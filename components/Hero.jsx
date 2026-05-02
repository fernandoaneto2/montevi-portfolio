'use client'

import Image from 'next/image'

const stats = [
  { valor: 'NR-10 · NR-35', label: 'Segurança normatizada' },
  { valor: 'ART / CREA', label: 'Responsabilidade técnica' },
  { valor: 'Todo Brasil', label: 'Área de atuação' },
]

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" role="region" aria-label="Seção Principal">
      <div className="hero-content">
        <p className="hero-eyebrow">ENGENHARIA ELÉTRICA</p>
        <h1 className="hero-title">
          A Excelência da <span className="highlight">Engenharia</span>
        </h1>
        <p className="hero-description">
          Projeto, execução e manutenção em subestações, redes elétricas e
          geração distribuída — com segurança normatizada e responsabilidade
          técnica em cada etapa.
        </p>
        <div className="hero-ctas">
          <button
            className="cta-button"
            onClick={scrollToServices}
            aria-label="Explorar serviços"
          >
            EXPLORAR SERVIÇOS
          </button>
          <a
            className="cta-button-contact"
            href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Vim%20do%20site%20da%20Montev%C3%AD."
          >
            Falar conosco
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat__valor">{s.valor}</span>
              <span className="hero-stat__label">{s.label}</span>
              {i < stats.length - 1 && <span className="hero-stat__sep" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image" aria-hidden="true">
        <div className="logo-container">
          <Image
            className="logo-img"
            src="/Images/paineis-solares4.jpg"
            alt=""
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  )
}
