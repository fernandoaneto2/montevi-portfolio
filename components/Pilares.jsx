'use client'

import { useEffect } from 'react'

export default function Pilares() {
  useEffect(() => {
    const pilarCards = document.querySelectorAll('.pilar-card')

    // Hover effects
    pilarCards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)'
      })
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)'
      })
    })

    // Card click handler
    pilarCards.forEach((card) => {
      card.setAttribute('tabindex', '0')
      card.setAttribute('role', 'article')
      const handleClick = function () {
        pilarCards.forEach((c) => c.classList.remove('active'))
        this.classList.add('active')
      }
      const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          card.click()
        }
      }
      card.addEventListener('click', handleClick)
      card.addEventListener('keydown', handleKeyDown)
    })

    // IntersectionObserver for card animation
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards'
          }
        })
      },
      { threshold: 0.1 }
    )

    pilarCards.forEach((card, index) => {
      card.style.opacity = '0'
      card.style.animationDelay = `${index * 0.1}s`
      cardObserver.observe(card)
    })

    // Feature list animation
    const featureLists = document.querySelectorAll('.pilar-features')

    featureLists.forEach((list) => {
      const items = list.querySelectorAll('li')
      items.forEach((item, index) => {
        item.style.opacity = '0'
        item.style.transform = 'translateX(-10px)'
        item.style.transition = `all 0.3s ease-out ${index * 0.05}s`
      })
    })

    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('li')
            items.forEach((item) => {
              item.style.opacity = '1'
              item.style.transform = 'translateX(0)'
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    featureLists.forEach((list) => featureObserver.observe(list))

    // Responsive cursor
    const handleResponsive = () => {
      const isMobile = window.innerWidth < 768
      pilarCards.forEach((card) => {
        if (isMobile) card.style.cursor = 'pointer'
      })
    }
    window.addEventListener('resize', handleResponsive)
    handleResponsive()

    return () => {
      cardObserver.disconnect()
      featureObserver.disconnect()
      window.removeEventListener('resize', handleResponsive)
    }
  }, [])

  return (
    <section id="pilares" className="pilares" role="region" aria-label="Pilares da Empresa">
      <div className="pilares-container">
        <div className="section-header">
          <h2 className="section-title">Por que escolher a Monteví</h2>
          <p className="section-subtitle">
            Construímos relacionamentos duradouros baseados em confiança, qualidade e resultados
          </p>
        </div>

        <div className="pilares-grid">
          <div className="pilar-card">
            <div className="pilar-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill="#0a2563" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.90625,3.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM10.65625,9.84375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0zM39.03125,9.84375c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.3125,-0.29687 0.40234,-0.76172 0.21875,-1.15234c-0.1875,-0.39453 -0.60156,-0.62109 -1.03125,-0.56641zM24.90625,15c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.0625,0.00391 -0.125,0.01563 -0.1875,0.03125c-0.01172,0.01172 -0.01953,0.01953 -0.03125,0.03125c-5.30469,0.22656 -9.59375,4.54688 -9.59375,9.90625c0,5.50391 4.49609,10 10,10c5.50391,0 10,-4.49609 10,-10c0,-5.33984 -4.25391,-9.64453 -9.53125,-9.90625c-0.03516,0 -0.05859,-0.03125 -0.09375,-0.03125c-0.10156,-0.03906 -0.20703,-0.05859 -0.3125,-0.0625c-0.01953,0 -0.04297,0 -0.0625,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.9375,17c0.01953,0 0.04297,0 0.0625,0c0.03125,0 0.0625,0 0.09375,0c4.375,0.05078 7.90625,3.61328 7.90625,8c0,4.42188 -3.57812,8 -8,8c-4.41797,0 -8,-3.57812 -8,-8c0,-4.39844 3.54688,-7.96484 7.9375,-8zM4.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM38.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM15,33.875c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.29688,-0.28516 0.38672,-0.72656 0.22656,-1.10547c-0.15625,-0.37891 -0.53516,-0.62109 -0.94531,-0.61328c-0.03125,0 -0.0625,0 -0.09375,0zM34.6875,33.875c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.1875,-0.19922 -0.44531,-0.30859 -0.71875,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.90625,37.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z" />
                  </g>
                </g>
              </svg>
            </div>
            <h3 className="pilar-title">Economia Sustentável</h3>
            <p className="pilar-description">
              Transformamos luz solar em liberdade financeira. Nossos projetos são desenhados para reduzir
              drasticamente seus custos operacionais enquanto posiciona seu Empreendimento ou residência no
              futuro da energia limpa.
            </p>
            <ul className="pilar-features">
              <li>Redução real na conta de luz</li>
              <li>Valorização imediata do imóvel</li>
              <li>Payback efiente</li>
            </ul>
          </div>

          <div className="pilar-card">
            <div className="pilar-icon" aria-hidden="true">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M 30 60 L 50 30 L 70 60 M 50 30 L 50 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="pilar-title">Engenharia de Precisão</h3>
            <p className="pilar-description">
              Projetos inteligentes que unem viabilidade técnica e máxima performance. Do planejamento à
              execução, garantimos que cada detalhe do seu sistema de energia ou infraestrutura elétrica seja
              otimizado para o maior rendimento possível.
            </p>
            <ul className="pilar-features">
              <li>Dimensionamento personalizado</li>
              <li>Homologação técnica simplificada</li>
              <li>Máximo aproveitamento energético</li>
            </ul>
          </div>

          <div className="pilar-card">
            <div className="pilar-icon" aria-hidden="true">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M 35 45 Q 35 35 50 35 Q 65 35 65 45 L 65 65 Q 65 70 60 70 L 40 70 Q 35 70 35 65 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="45" cy="55" r="3" fill="currentColor" />
                <circle cx="55" cy="55" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3 className="pilar-title">Mobilidade Elétrica</h3>
            <p className="pilar-description">
              Prepare sua infraestrutura para a revolução dos veículos elétricos. Implementamos estações de
              recarga inteligentes, seguras e de alta capacidade de carregamento para frotas, condomínios ou
              residências.
            </p>
            <ul className="pilar-features">
              <li>Carregadores de última geração</li>
              <li>Instalação técnica normativa</li>
              <li>Gestão inteligente de carga</li>
            </ul>
          </div>

          <div className="pilar-card">
            <div className="pilar-icon" aria-hidden="true">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M 40 65 L 50 45 L 60 65 M 45 55 L 55 55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="35" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className="pilar-title">Parceria e Suporte</h3>
            <p className="pilar-description">
              Mais que fornecedores, somos seus parceiros de longo prazo. Com a Monteví, você tem a
              tranquilidade de um suporte especializado e monitoramento contínuo para garantir que sua
              geração de energia nunca pare.
            </p>
            <ul className="pilar-features">
              <li>Monitoramento pós-instalação</li>
              <li>Manutenção técnica preventiva</li>
              <li>Consultoria especializada 360º</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
