import logoLight from '../../assets/brand/rimivo/rimivo-logo-horizontal.webp'
import logoDark from '../../assets/brand/rimivo/rimivo-logo-horizontal-reverse.webp'
import styles from './Wordmark.module.css'

/**
 * Logo oficial da Rimivo (extraída de logo/logo.webp, a fonte oficial da marca).
 * A versão navy é usada em fundos claros e a versão reversa (branca) em fundos
 * escuros, alternando automaticamente conforme o esquema de cores do sistema.
 */
export function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <img
        className={`${styles.logoImg} ${styles.light}`}
        src={logoLight}
        width={208}
        height={84}
        alt="Rimivo"
      />
      <img
        className={`${styles.logoImg} ${styles.dark}`}
        src={logoDark}
        width={200}
        height={84}
        alt="Rimivo"
      />
    </span>
  )
}
