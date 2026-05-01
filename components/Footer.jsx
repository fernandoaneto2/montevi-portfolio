import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/#about', label: 'Sobre nós' },
  { href: '/#portfolio', label: 'Portfólio' },
  { href: '/#contact', label: 'Contato' },
]

const servicoLinks = [
  { href: '/servicos/subestacoes-e-geradores', label: 'Subestações e Geradores' },
  { href: '/servicos/redes-de-distribuicao', label: 'Redes de Distribuição' },
  { href: '/servicos/iluminacao-publica', label: 'Iluminação Pública' },
  { href: '/servicos/projetos-e-analises', label: 'Projetos e Análises' },
  { href: '/servicos/geracao-distribuida', label: 'Geração Distribuída' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <Link href="/" className="footer-brand__logo" aria-label="Montevi Engenharia — Início">
            <Image
              src="/Images/logo-branca-removebg.png"
              alt=""
              width={42}
              height={42}
              style={{ width: 42, height: 42, objectFit: "contain", flexShrink: 0 }}
            />
          </Link>
          <p className="footer-brand__nome">Montevi Engenharia</p>
          <p className="footer-brand__tag">
            Engenharia elétrica com segurança normatizada — João Pessoa, PB.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">NR-10</span>
            <span className="footer-badge">NR-35</span>
            <span className="footer-badge">PT/LOTO</span>
            <span className="footer-badge">ART/CREA</span>
          </div>
        </div>

        {/* ── Navegação + Serviços ── */}
        <div className="footer-col">
          <p className="footer-col-titulo">Navegação</p>
          <nav aria-label="Links do rodapé — Geral">
            <ul className="footer-nav-list">
              <li><Link href="/#home">Início</Link></li>
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <p className="footer-col-titulo" style={{ marginTop: '1.5rem' }}>Serviços</p>
          <nav aria-label="Links do rodapé — Serviços">
            <ul className="footer-nav-sub">
              {servicoLinks.map((s) => (
                <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Contato ── */}
        <div className="footer-col">
          <p className="footer-col-titulo">Contato</p>
          <address className="footer-address">
            <p>Metta Engenharia LTDA</p>
            <p>CNPJ: 54.308.461/0001-55</p>
            <p>João Pessoa — PB</p>
            <p>Atuação: Paraíba e Nordeste</p>
          </address>
          <a
            href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.517 5.835L0 24l6.335-1.517A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.921 0-3.72-.513-5.27-1.407l-.378-.224-3.761.901.916-3.678-.247-.395A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
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
