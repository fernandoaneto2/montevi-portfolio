import Link from 'next/link'

const navLinks = [
  { href: '/#about', label: 'Sobre' },
  { href: '/#services', label: 'Serviços' },
  { href: '/#portfolio', label: 'Portfólio' },
  { href: '/#contact', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-col">
          <p className="footer-nav__titulo">Navegação</p>
          <nav aria-label="Links do rodapé">
            <ul className="footer-nav-list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/servicos/subestacoes-e-geradores">Subestações e Geradores</Link>
              </li>
              <li>
                <Link href="/servicos/geracao-distribuida">Geração Distribuída</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-nav__titulo">Contato</p>
          <address className="footer-address">
            <p>Metta Engenharia LTDA</p>
            <p>CNPJ: 54.308.461/0001-55</p>
            <p>João Pessoa — PB</p>
          </address>
          <a
            href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            Fale pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Montevi Engenharia. Todos os direitos reservados.</p>
        <Link href="/politica-de-privacidade" className="footer-privacy-link">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  )
}
