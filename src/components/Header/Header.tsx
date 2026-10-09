import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../Container/Container'
import { Wordmark } from '../Wordmark/Wordmark'
import { Button } from '../Button/Button'
import styles from './Header.module.css'

const navItems = [
  { label: 'Produtos', to: '/#produtos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <NavLink to="/" aria-label="Rimivo — página inicial" onClick={() => setIsOpen(false)}>
            <Wordmark />
          </NavLink>

          <nav className={styles.nav} aria-label="Navegação principal">
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive && !item.to.includes('#')
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <div className={styles.desktopCta}>
              <Button to="/#produtos" variant="primary">
                Conheça nossos produtos
              </Button>
            </div>

            <button
              type="button"
              className={styles.menuToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {isOpen ? (
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 5H17M3 10H17M3 15H17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className={styles.mobilePanel} id="mobile-menu">
          <Container>
            <ul className={styles.mobileLinks}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={styles.mobileLink} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCta}>
              <Button to="/#produtos" variant="primary" onClick={() => setIsOpen(false)}>
                Conheça nossos produtos
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
