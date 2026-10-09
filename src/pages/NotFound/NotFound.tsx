import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { Button } from '../../components/Button/Button'
import styles from './NotFound.module.css'

export function NotFound() {
  return (
    <>
      <Seo
        title="Página não encontrada"
        description="A página que você procura não foi encontrada."
        path="/404"
      />

      <section className={styles.section}>
        <Container>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Página não encontrada</h1>
          <p className={styles.text}>
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button to="/" variant="primary">
            Voltar para a página inicial
          </Button>
        </Container>
      </section>
    </>
  )
}
