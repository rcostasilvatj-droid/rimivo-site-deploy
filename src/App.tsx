import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { Home } from './pages/Home/Home'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { Sobre } from './pages/Sobre/Sobre'
import { Contato } from './pages/Contato/Contato'
import { LegalPage } from './pages/Legal/LegalPage'
import { NotFound } from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anilha" element={<ProductPage slug="anilha" />} />
          <Route path="/entregamanager" element={<ProductPage slug="entregamanager" />} />
          <Route path="/trampo-facil" element={<ProductPage slug="trampo-facil" />} />
          <Route path="/e-massa-delivery" element={<ProductPage slug="e-massa-delivery" />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<LegalPage type="privacidade" />} />
          <Route path="/termos" element={<LegalPage type="termos" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
