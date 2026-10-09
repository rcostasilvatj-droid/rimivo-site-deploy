import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Insights.module.css'

const API_URL = (import.meta.env.VITE_INSIGHTS_API_URL || 'https://rimivo-insights.onrender.com').replace(/\/$/, '')
const VISITOR_KEY = 'rimivo_insights_visitor'
const SESSION_KEY = 'rimivo_insights_session'
const DISMISSED_KEY = 'rimivo_lead_dismissed_at'
const SENT_KEY = 'rimivo_lead_sent_at'
const CONSENT_VERSION = '2026-10-08'

type EventType = 'page_view' | 'heartbeat' | 'click_contact' | 'click_price' | 'lead_prompt_view' | 'lead_prompt_dismiss'

function randomId() {
  return crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function storageId(storage: Storage, key: string) {
  const current = storage.getItem(key)
  if (current) return current
  const next = randomId()
  storage.setItem(key, next)
  return next
}

function productFromPath(path: string) {
  if (path.includes('e-massa')) return 'É Massa Delivery'
  if (path.includes('entregamanager')) return 'EntregaManager'
  if (path.includes('anilha')) return 'Anilha'
  if (path.includes('trampo-facil')) return 'Trampo Fácil'
  return ''
}

export function Insights() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const product = useMemo(() => productFromPath(location.pathname), [location.pathname])
  const enabled = Boolean(API_URL)

  function send(type: EventType, extra: Record<string, unknown> = {}) {
    if (!enabled) return
    const payload = {
      site: 'rimivo', type, path: location.pathname, product: product || null,
      source: document.referrer || 'direct',
      visitorId: storageId(localStorage, VISITOR_KEY),
      sessionId: storageId(sessionStorage, SESSION_KEY), ...extra,
    }
    fetch(`${API_URL}/v1/events`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), keepalive: true,
    }).catch(() => undefined)
  }

  useEffect(() => {
    send('page_view')
    const startedAt = Date.now()
    const heartbeat = () => send('heartbeat', { durationSeconds: Math.round((Date.now() - startedAt) / 1000) })
    const timer = window.setInterval(heartbeat, 15_000)
    const onHidden = () => document.visibilityState === 'hidden' && heartbeat()
    document.addEventListener('visibilitychange', onHidden)
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', onHidden); heartbeat() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, enabled])

  useEffect(() => {
    if (!enabled || ['/privacidade', '/termos'].includes(location.pathname)) return
    const now = Date.now()
    const dismissed = Number(localStorage.getItem(DISMISSED_KEY) || 0)
    const sent = Number(localStorage.getItem(SENT_KEY) || 0)
    if (now - dismissed < 7 * 86_400_000 || now - sent < 30 * 86_400_000) return
    let shown = false
    const show = () => { if (!shown) { shown = true; setOpen(true); send('lead_prompt_view') } }
    const timer = window.setTimeout(show, 45_000)
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      if (available > 0 && window.scrollY / available >= 0.5) show()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, location.pathname])

  useEffect(() => {
    if (!enabled) return
    const onClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest('a,button')
      if (!element) return
      const value = `${element.textContent || ''} ${element.getAttribute('href') || ''}`.toLowerCase()
      if (/whatsapp|contato|fale com|mailto:|wa\.me/.test(value)) send('click_contact')
      if (/preço|planos|valor|contratar|conhecer/.test(value)) send('click_price')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, location.pathname])

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, String(Date.now()))
    setOpen(false); send('lead_prompt_dismiss')
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setState('sending')
    try {
      const response = await fetch(`${API_URL}/v1/leads`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: 'rimivo', name: form.get('name'), whatsapp: form.get('whatsapp'),
          email: form.get('email'), product: form.get('product'), message: form.get('message'),
          consent: form.get('consent') === 'on', consentVersion: CONSENT_VERSION,
          path: location.pathname, source: document.referrer || 'direct',
          visitorId: storageId(localStorage, VISITOR_KEY),
        }),
      })
      if (!response.ok) throw new Error('request failed')
      localStorage.setItem(SENT_KEY, String(Date.now()))
      setState('sent')
    } catch { setState('error') }
  }

  if (!enabled || !open) return null
  return (
    <div className={styles.backdrop} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && dismiss()}>
      <section className={styles.card} role="dialog" aria-modal="true" aria-labelledby="lead-title">
        <button className={styles.close} type="button" onClick={dismiss} aria-label="Fechar">×</button>
        {state === 'sent' ? (
          <div className={styles.success}><h2 id="lead-title">Recebemos seu contato!</h2><p>A equipe da Rimivo entrará em contato pelos dados informados.</p><button type="button" onClick={() => setOpen(false)}>Fechar</button></div>
        ) : (
          <form onSubmit={submit}>
            <p className={styles.eyebrow}>Vamos conversar?</p>
            <h2 id="lead-title">Gostaria de conhecer melhor alguma solução da Rimivo?</h2>
            <label>Nome <span>*</span><input name="name" required minLength={2} maxLength={120} autoComplete="name" /></label>
            <label>WhatsApp <span>*</span><input name="whatsapp" required inputMode="tel" maxLength={32} autoComplete="tel" /></label>
            <label>E-mail <small>(opcional)</small><input name="email" type="email" maxLength={180} autoComplete="email" /></label>
            <label>Produto de interesse <span>*</span>
              <select name="product" required defaultValue={product}>
                <option value="" disabled>Selecione</option><option>É Massa Delivery</option><option>EntregaManager</option><option>Anilha</option><option>Trampo Fácil</option><option>Outro produto Rimivo</option>
              </select>
            </label>
            <label>Mensagem <small>(opcional)</small><textarea name="message" maxLength={1200} rows={3} /></label>
            <label className={styles.consent}><input name="consent" type="checkbox" required /> <span>Autorizo a Rimivo a usar estes dados para responder ao meu contato. Li a <Link to="/privacidade">Política de Privacidade</Link>.</span></label>
            {state === 'error' && <p className={styles.error}>Não foi possível enviar agora. Tente novamente em instantes.</p>}
            <button className={styles.submit} disabled={state === 'sending'}>{state === 'sending' ? 'Enviando…' : 'Quero conhecer'}</button>
          </form>
        )}
      </section>
    </div>
  )
}
