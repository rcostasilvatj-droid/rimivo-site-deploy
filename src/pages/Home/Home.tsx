import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { Button } from '../../components/Button/Button'
import { HeroArt } from '../../components/HeroArt/HeroArt'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { products } from '../../data/products'
import { site } from '../../data/site'
import styles from './Home.module.css'

const reasons = [
  {
    title: 'Simplicidade',
    text: 'Interfaces diretas, sem complexidade desnecessária para quem usa no dia a dia.',
  },
  {
    title: 'Produtividade',
    text: 'Ferramentas pensadas para reduzir fricção nas tarefas do dia a dia de cada operação.',
  },
  {
    title: 'Tecnologia útil',
    text: 'Aplicamos tecnologia para resolver problemas concretos, não para impressionar.',
  },
  {
    title: 'Web e mobile conforme a necessidade',
    text: 'Cada produto é construído na plataforma certa para o seu contexto — web, mobile ou os dois.',
  },
]

export function Home() {
  return (
    <>
      <Seo
        title={site.defaultTitle}
        description={site.defaultDescription}
        path="/"
      />

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroInner}>
              <span className={styles.eyebrow}>Rimivo</span>
              <h1 className={styles.heroTitle}>Software que resolve problemas reais.</h1>
              <p className={styles.heroLead}>
                A Rimivo desenvolve produtos digitais focados em simplificar operações do dia a
                dia — para academias, prestadores de serviço, operações de entrega e
                estabelecimentos de alimentação.
              </p>
              <div className={styles.heroActions}>
                <Button to="/#produtos" variant="primary">
                  Conheça nossos produtos
                </Button>
                <Button to="/contato" variant="secondary">
                  Fale com a Rimivo
                </Button>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroArt />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} id="produtos">
        <Container>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Produtos</p>
            <h2 className={styles.sectionTitle}>Nossos produtos</h2>
            <p className={styles.sectionLead}>
              Cada produto Rimivo nasce de um problema específico, resolvido com foco e
              simplicidade.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHead}>
            <p className={styles.sectionEyebrow}>Por que Rimivo</p>
            <h2 className={styles.sectionTitle}>Como pensamos software</h2>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((reason) => (
              <div key={reason.title}>
                <span className={styles.reasonIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10L8 14L16 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonText}>{reason.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.aboutBlock}>
            <div>
              <p className={styles.sectionEyebrow}>Sobre a Rimivo</p>
              <h2 className={styles.sectionTitle}>Uma empresa de software</h2>
              <p className={styles.aboutText}>
                A Rimivo é uma empresa de software focada no desenvolvimento de produtos
                digitais para diferentes segmentos — de academias a operações de entrega e food
                service. Desenvolvemos cada produto com atenção ao problema real que ele resolve.
              </p>
            </div>
            <Button to="/sobre" variant="secondary">
              Saiba mais sobre a Rimivo
            </Button>
          </div>
        </Container>
      </section>

      <section className={styles.ctaSection}>
        <Container>
          <h2 className={styles.ctaTitle}>Quer conversar com a Rimivo?</h2>
          <p className={styles.ctaText}>
            Fale com a gente sobre algum dos nossos produtos ou tire uma dúvida.
          </p>
          <div className={styles.ctaActions}>
            <Button to="/contato" variant="primary">
              Fale com a Rimivo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
