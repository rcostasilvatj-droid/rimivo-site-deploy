import type { ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Insights } from '../Insights/Insights'

interface LayoutProps { children: ReactNode }

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <Insights />
    </>
  )
}
