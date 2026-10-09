import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  to?: string
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', to, href, onClick, className }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
