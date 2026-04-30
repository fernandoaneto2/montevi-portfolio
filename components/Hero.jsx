'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" role="region" aria-label="Seção Principal">
      <div className="hero-content">
        <h1 className="hero-title">
          A Excelência da <span className="highlight">Engenharia</span>
        </h1>
        <p className="hero-description">
          Soluções de Engenharia Elétrica, Civil e Complementares com excelência
          técnica e inovação em cada projeto.
        </p>
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
      <div className="hero-image" aria-hidden="true">
        <div className="logo-container">
          <Image
            className="logo-img"
            src="/Images/paineis-solares4.jpg"
            alt="Logo da Monteví Engenharia"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  )
}
