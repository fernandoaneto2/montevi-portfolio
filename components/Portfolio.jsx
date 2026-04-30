'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const projects = [
  { src: '/Images/projeto-luna.png', title: 'Projeto Elétrico Executivo', subtitle: 'Complexo Residencial Luna' },
  { src: '/Images/projeto-agrupamento.png', title: 'Agrupamento de medição', subtitle: 'Residencial Porto Resort' },
  { src: '/Images/projeto-agrupamento2.png', title: 'Agrupamento de medição', subtitle: 'Edifício Residencial Multifamiliar' },
  { src: '/Images/projeto-sistema-de-iluminacao.png', title: 'Projeto de Iluminação Pública', subtitle: 'Arco Metropolitano' },
  { src: '/Images/projeto-eletrico-vias-do-atlantico.png', title: 'Projeto Elétrico Executivo', subtitle: 'Vias do Atlântico' },
  { src: '/Images/projeto-pci.png', title: 'Projeto PCI', subtitle: 'Prevenção de Combate a Incêndio' },
  { src: '/Images/projeto-spda.png', title: 'Projeto SPDA', subtitle: 'Sistema de Proteção e Descargas' },
  { src: '/Images/projeto-predial-residencial.png', title: 'Projeto Predial', subtitle: 'Residencial Multifamiliar' },
  { src: '/Images/projeto-eletrico.png', title: 'Projeto Elétrico', subtitle: 'Cabeamento Estruturado' },
  { src: '/Images/projeto-poinsp.png', title: 'Projeto POINSP', subtitle: 'Policlínica Integrada' },
  { src: '/Images/projeto-der.png', title: 'Projeto DER', subtitle: 'Departamento de Estradas' },
]

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const items = document.querySelectorAll('.portfolio-item')
    items.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease-out'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="portfolio" role="region" aria-label="Portfólio">
      <h2 className="section-title">Portfólio de Projetos</h2>
      <p className="section-subtitle">Conheça alguns de nossos trabalhos realizados</p>

      <div className="portfolio-grid">
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-item">
              <div className="portfolio-image" aria-hidden="true" style={{ position: 'relative' }}>
                <Image
                  src={p.src}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
