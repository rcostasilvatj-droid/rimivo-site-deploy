import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { privacidade, termos } from '../../data/legal'
import styles from './LegalPage.module.css'

interface LegalPageProps {
  type: 'privacidade' | 'termos'
}

export function LegalPage({ type }: LegalPageProps) {
  const content = type === 'privacidade' ? privacidade : termos
  const path = type === 'privacidade' ? '/privacidade' : '/termos'

  return (
    <>
      <Seo title={content.title} description={content.intro} path={path} />

      <section className={styles.section}>
        <Container>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.disclaimer}>{content.intro}</p>

          <div className={styles.sections}>
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h2 className={styles.heading}>{section.heading}</h2>
                <div className={styles.body}>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
