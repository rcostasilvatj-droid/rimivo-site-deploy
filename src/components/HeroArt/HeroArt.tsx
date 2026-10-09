import type { CSSProperties } from 'react'
import rimivoIcon from '../../assets/brand/rimivo/rimivo-app-icon.webp'
import styles from './HeroArt.module.css'

interface Dot {
  slug?: string
  color?: string
  angle: number
  radius: number
  size: number
}

// Marcas dos quatro produtos (duas cores oficiais de cada) e os três pontos de cor da logo Rimivo.
const dots: Dot[] = [
  { slug: 'anilha', angle: -38, radius: 0.5, size: 30 },
  { slug: 'entregamanager', angle: 34, radius: 0.335, size: 26 },
  { slug: 'trampo-facil', angle: 148, radius: 0.5, size: 28 },
  { slug: 'e-massa-delivery', angle: 214, radius: 0.335, size: 24 },
  { color: '#3260fd', angle: 92, radius: 0.5, size: 9 },
  { color: '#2cd1a1', angle: 262, radius: 0.5, size: 9 },
  { color: '#fec03f', angle: 320, radius: 0.18, size: 9 },
]

export function HeroArt() {
  return (
    <div className={styles.art} aria-hidden="true">
      <div className={styles.glow} />
      <span className={`${styles.ring} ${styles.ringOuter}`} />
      <span className={`${styles.ring} ${styles.ringMiddle}`} />
      <span className={`${styles.ring} ${styles.ringInner}`} />

      {dots.map((dot) => (
        <span
          key={dot.slug ?? dot.color}
          className={dot.slug ? styles.productDot : styles.brandDot}
          data-product={dot.slug}
          style={
            {
              '--a': `${dot.angle}deg`,
              '--r': dot.radius,
              '--s': `${dot.size}px`,
              '--c': dot.color,
            } as CSSProperties
          }
        />
      ))}

      <img className={styles.icon} src={rimivoIcon} width={256} height={256} alt="" decoding="async" />
    </div>
  )
}
