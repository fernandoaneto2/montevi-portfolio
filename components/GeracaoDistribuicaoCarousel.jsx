'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

// TODO: substituir src, title e description pelos dados reais de cada projeto
const slides = [
  {
    src: '/Images/geracao-distribuicao/placeholder-1.png',
    alt: 'Projeto 1 — geração e distribuição',
    title: 'Subestação Abrigada — Complexo Comercial', // TODO: nome real
    description: 'Manutenção preventiva completa com troca do sistema de proteção e parametrização de relê conforme curvas da concessionária.', // TODO: descrição real
  },
  {
    src: '/Images/geracao-distribuicao/placeholder-2.png',
    alt: 'Projeto 2 — geração e distribuição',
    title: 'QGBT e QTA — Edifício Corporativo', // TODO: nome real
    description: 'Inspeção termográfica, limpeza de barramentos e substituição de disjuntores com contato desgastado. Laudo técnico entregue ao cliente.', // TODO: descrição real
  },
  {
    src: '/Images/geracao-distribuicao/placeholder-3.png',
    alt: 'Projeto 3 — geração e distribuição',
    title: 'Grupo Gerador — Indústria de Médio Porte', // TODO: nome real
    description: 'Revisão mecânica, elétrica e do sistema de transferência automática (ATS). Teste de carga realizado com laudo de capacidade operacional.', // TODO: descrição real
  },
  {
    src: '/Images/geracao-distribuicao/placeholder-4.png',
    alt: 'Projeto 4 — geração e distribuição',
    title: 'Manutenção Emergencial — Subestação 600 kVA', // TODO: nome real
    description: 'Atendimento emergencial após falha no sistema de proteção. Diagnóstico, substituição de componentes e normalização do fornecimento em campo.', // TODO: descrição real
  },
  {
    src: '/Images/geracao-distribuicao/placeholder-5.png',
    alt: 'Projeto 5 — geração e distribuição',
    title: 'Parametrização de Relê — Concessionária NEOENERGIA', // TODO: nome real
    description: 'Ajuste das curvas de proteção do relê de acordo com os parâmetros exigidos pela concessionária, eliminando pendência de conformidade.', // TODO: descrição real
  },
  {
    src: '/Images/geracao-distribuicao/placeholder-6.png',
    alt: 'Projeto 6 — geração e distribuição',
    title: 'Manutenção Corretiva — Quadro de Transferência', // TODO: nome real
    description: 'Substituição do QTA danificado e reconfiguração do circuito de transferência entre rede e gerador, com emissão de ART ao final do serviço.', // TODO: descrição real
  },
]

export default function GeracaoDistribuicaoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  const current = slides[selectedIndex]

  return (
    <div className="gd-carousel">
      <div className="gd-carousel__image-area">
        <div className="gd-carousel__viewport" ref={emblaRef}>
          <div className="gd-carousel__container">
            {slides.map((slide, i) => (
              <div className="gd-carousel__slide" key={i}>
                <div className="gd-carousel__slide-inner">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="gd-carousel__btn gd-carousel__btn--prev"
          onClick={scrollPrev}
          aria-label="Projeto anterior"
        >
          &#8592;
        </button>
        <button
          className="gd-carousel__btn gd-carousel__btn--next"
          onClick={scrollNext}
          aria-label="Próximo projeto"
        >
          &#8594;
        </button>
      </div>

      <div className="gd-carousel__caption" aria-live="polite">
        <h4 className="gd-carousel__caption-title">{current.title}</h4>
        <p className="gd-carousel__caption-desc">{current.description}</p>
      </div>

      <div className="gd-carousel__dots">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={`gd-carousel__dot${i === selectedIndex ? ' is-selected' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para projeto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
