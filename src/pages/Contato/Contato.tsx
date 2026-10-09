import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { contact, hasAnyContactInfo } from '../../data/contact'
import styles from './Contato.module.css'

const description = 'Fale com a Rimivo sobre nossos produtos ou tire suas dúvidas.'

export function Contato() {
  return (
    <>
      <Seo title="Contato" description={description} path="/contato" />

      <section className={styles.section}>
        <Container>
          <p className={styles.eyebrow}>Contato</p>
          <h1 className={styles.title}>Fale com a Rimivo</h1>
          <p className={styles.lead}>
            Quer conversar sobre algum dos nossos produtos ou tirar uma dúvida? Estes são os
            nossos canais oficiais de contato.
          </p>

          <div className={styles.card}>
            {hasAnyContactInfo ? (
              <div className={styles.list}>
                {contact.email && (
                  <div className={styles.item}>
                    <span className={styles.itemLabel}>E-mail</span>
                    <a className={styles.itemValue} href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className={styles.item}>
                    <span className={styles.itemLabel}>Telefone</span>
                    <span className={styles.itemValue}>{contact.phone}</span>
                  </div>
                )}
                {contact.whatsapp && (
                  <div className={styles.item}>
                    <span className={styles.itemLabel}>WhatsApp</span>
                    <span className={styles.itemValue}>{contact.whatsapp}</span>
                  </div>
                )}
                {contact.address && (
                  <div className={styles.item}>
                    <span className={styles.itemLabel}>Endereço</span>
                    <span className={styles.itemValue}>{contact.address}</span>
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.placeholderText}>
                Nossos canais de contato oficiais serão publicados em breve nesta página. Até
                lá, entre em contato através dos canais oficiais de cada produto Rimivo.
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
