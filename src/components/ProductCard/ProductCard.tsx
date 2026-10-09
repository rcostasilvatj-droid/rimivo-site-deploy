import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const statusClass = [
    styles.status,
    product.statusTone === 'production' && styles.statusProduction,
    product.statusTone === 'development' && styles.statusDevelopment,
  ]
    .filter(Boolean)
    .join(' ')

  const logo = product.logoCard ?? product.logo

  return (
    <Link to={product.path} className={styles.card} data-product={product.slug}>
      <div
        className={styles.brandPanel}
        style={{ '--logo-h': `${product.logoHeight.card}px` } as CSSProperties}
      >
        <img
          className={styles.logo}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={`Logo ${product.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{product.name}</h3>
          {product.statusLabel && <span className={statusClass}>{product.statusLabel}</span>}
        </div>

        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.more}>
            Conhecer
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {!product.endorsedInLogo && <span className={styles.endorsement}>Um produto Rimivo</span>}
        </div>
      </div>
    </Link>
  )
}
