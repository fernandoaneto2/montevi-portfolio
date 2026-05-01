import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Página não encontrada | Montevi Engenharia',
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="not-found-page">
        <p className="not-found-code">404</p>
        <h1 className="not-found-titulo">Página não encontrada</h1>
        <p className="not-found-sub">
          O endereço que você buscou não existe ou foi movido.
        </p>
        <Link href="/" className="not-found-btn">
          Voltar ao início
        </Link>
      </main>
      <Footer />
    </>
  )
}
