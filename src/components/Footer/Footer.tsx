import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'
import { Wordmark } from '../Wordmark/Wordmark'
import { products } from '../../data/products'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Wordmark />
            <p>Software que resolve problemas reais e simplifica operações do dia a dia.</p>
          </div>

          <nav aria-label="Produtos">
            <p className={styles.heading}>Produtos</p>
            <ul className={styles.linkList}>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={product.path}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Rimivo">
            <p className={styles.heading}>Rimivo</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className={styles.heading}>Legal</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/privacidade">Privacidade</Link>
              </li>
              <li>
                <Link to="/termos">Termos</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Rimivo</p>
          <div className={styles.legalLinks}>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
