import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { Button } from '../../components/Button/Button'
import styles from './Sobre.module.css'

const description =
  'A Rimivo é uma empresa de software responsável pelo desenvolvimento de produtos digitais como Anilha, EntregaManager, Trampo Fácil e É Massa Delivery.'

export function Sobre() {
  return (
    <>
      <Seo title="Sobre" description={description} path="/sobre" />

      <section className={styles.section}>
        <Container>
          <p className={styles.eyebrow}>Sobre a Rimivo</p>
          <h1 className={styles.title}>Uma empresa de software</h1>

          <div className={styles.body}>
            <p>
              A Rimivo é uma empresa de software responsável pelo desenvolvimento de produtos
              digitais como Anilha, EntregaManager, Trampo Fácil e É Massa Delivery.
            </p>
            <p>
              Cada produto nasce da necessidade de simplificar uma operação real — seja em
              academias, na logística de entregas, na prestação de serviços ou no food service.
            </p>
            <p>
              Nosso foco é construir software direto, funcional e pensado para o uso do dia a
              dia de quem depende dele.
            </p>
          </div>

          <div className={styles.cta}>
            <Button to="/contato" variant="primary">
              Fale com a Rimivo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
