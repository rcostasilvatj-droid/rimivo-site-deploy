import type { CSSProperties } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Seo } from '../../components/Seo/Seo'
import { Container } from '../../components/Container/Container'
import { Button } from '../../components/Button/Button'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { getProductBySlug, products, type ProductSlug } from '../../data/products'
import rimivoIcon from '../../assets/brand/rimivo/rimivo-app-icon-sm.webp'
import styles from './ProductPage.module.css'

interface ProductPageProps {
  slug: ProductSlug
}

export function ProductPage({ slug }: ProductPageProps) {
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/404" replace />
  }

  const otherProducts = products.filter((item) => item.slug !== product.slug)
  const statusClass = [
    styles.status,
    product.statusTone === 'production' && styles.statusProduction,
    product.statusTone === 'development' && styles.statusDevelopment,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <Seo title={product.name} description={product.description} path={product.path} />

      <section className={styles.hero} data-product={product.slug}>
        <Container>
          <nav className={styles.breadcrumb} aria-label="Navegação estrutural">
            <Link to="/">Rimivo</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <h1
            className={styles.logoHeading}
            style={{ '--logo-h': `${product.logoHeight.page}px` } as CSSProperties}
          >
            <img
              className={styles.logo}
              src={product.logo.src}
              width={product.logo.width}
              height={product.logo.height}
              alt={product.brandLine}
              fetchPriority="high"
              decoding="async"
            />
          </h1>

          <div className={styles.meta}>
            <p className={styles.endorsement}>
              <img src={rimivoIcon} width={22} height={22} alt="" decoding="async" />
              Uma solução da Rimivo
            </p>
            {product.statusLabel && <span className={statusClass}>{product.statusLabel}</span>}
          </div>

          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.lead}>{product.longDescription}</p>

          <div className={styles.actions}>
            {product.websiteUrl && (
              <Button href={product.websiteUrl} variant="primary" className={styles.ctaPrimary}>
                Acessar site do {product.name}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M6 3.5H12.5V10M12.5 3.5L4 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="visually-hidden"> (abre em nova aba)</span>
              </Button>
            )}
            <Button
              to="/contato"
              variant={product.websiteUrl ? 'secondary' : 'primary'}
              className={product.websiteUrl ? styles.ctaSecondary : styles.ctaPrimary}
            >
              Fale com a Rimivo
            </Button>
            <Button to="/#produtos" variant="secondary" className={styles.ctaSecondary}>
              Ver todos os produtos
            </Button>
          </div>
        </Container>
      </section>

      <section data-product={product.slug}>
        <Container>
          <div className={styles.body}>
            <div>
              <h2 className={styles.sectionTitle}>Recursos</h2>
              <ul className={styles.featureList}>
                {product.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.aside}>
              <p className={styles.asideLabel}>Para quem é</p>
              <p className={styles.asideValue}>{product.audience}</p>

              <p className={styles.asideLabel}>Plataforma</p>
              <p className={styles.asideValue}>{product.platform}</p>
            </aside>
          </div>
        </Container>
      </section>

      <section className={styles.otherProducts}>
        <Container>
          <h2>Outros produtos Rimivo</h2>
          <div className={styles.otherGrid}>
            {otherProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
