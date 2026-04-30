'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ServiceCard({ service, image, alt, title, excerpt, backTitle, backDescription, listContent, detailsLink }) {
  const [flipped, setFlipped] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setFlipped((f) => !f)
    }
  }

  return (
    <div className="service-card-wrapper">
      <div
        className={`service-card-flip${flipped ? ' is-flipped' : ''}`}
        role="button"
        tabIndex={0}
        data-service={service}
        aria-label={`${title} - Clique para ver detalhes`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={handleKeyDown}
      >
        <div className="service-card-front">
          <div className="front-content">
            <div className="image-modern-container">
              <Image
                src={image}
                alt={alt}
                fill
                className="modern-image"
                sizes="350px"
                style={{ objectFit: 'cover' }}
              />
              <div className="image-overlay"></div>
            </div>
            <div className="service-info">
              <p className="service-category">ESPECIALIDADE</p>
              <h3 className="service-title">{title}</h3>
              <p className="service-excerpt">{excerpt}</p>
            </div>
          </div>
        </div>
        <div className="service-card-back">
          <div className="back-header">
            <h3>{backTitle}</h3>
          </div>
          <div className="back-body">
            <p className="back-description">{backDescription}</p>
            {listContent}
            <a href="#contact" className="action-button" onClick={(e) => e.stopPropagation()}>
              Solicitar Orçamento
            </a>
            {detailsLink && (
              <Link
                href={detailsLink}
                className="action-button"
                style={{ marginTop: '8px' }}
                onClick={(e) => e.stopPropagation()}
              >
                Ver mais
              </Link>
            )}
          </div>
          <div className="back-footer">
            <span>Clique para voltar</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="services" role="region" aria-label="Serviços">
      <h2 className="section-title">Nossos Serviços</h2>
      <p className="section-subtitle">
        Três nichos de especialização para suas necessidades
      </p>

      <div className="services-container">
        <ServiceCard
          service="complementary"
          image="/Images/subestacao-predial.png"
          alt="Geração e Distribuição — Subestações, GD e Projetos Elétricos"
          title="Geração e Distribuição"
          excerpt="Projeto, manutenção e homologação de subestações, geração distribuída e redes elétricas — com domínio completo das normas da Energisa."
          backTitle="Geração e Distribuição"
          backDescription="Engenharia elétrica completa, do projeto à energização."
          listContent={
            <ul className="services-list">
              <li>Subestações aéreas e abrigadas — projeto, montagem e manutenção</li>
              <li>Geração distribuída (GD) — projeto, conexão e homologação</li>
              <li>Escritório de projetos — redes, iluminação pública e instalações</li>
              <li>Ferramentas Energisa — APR Web, NDU 013 e NDU 015</li>
            </ul>
          }
          detailsLink="/servicos/geracao-e-distribuicao"
        />

        <ServiceCard
          service="civil"
          image="/Images/paineis-solares4.jpg"
          alt="Projeto de Engenharia Civil - Estrutura moderna"
          title="Geração Fotovoltaica"
          excerpt="Projetos estruturais inovadores e soluções construtivas."
          backTitle="Geração Fotovoltaica"
          backDescription="Nossa equipe realiza desde pequenas reformas até grandes projetos estruturais, sempre com foco em qualidade, segurança e eficiência energética."
          listContent={
            <>
              <h4 style={{ color: '#247ba0', marginBottom: '15px', fontSize: '1.2rem' }}>
                Nossas Soluções:
              </h4>
              <ul className="services-list">
                <li>On Grid</li>
                <li>On Grid com Micro Inversor</li>
                <li>Off Grid</li>
                <li>Híbrido</li>
                <li>A Bomba Solar</li>
              </ul>
            </>
          }
        />

        <ServiceCard
          service="electrical"
          image="/Images/projetos-complementares2.jpg"
          alt="Projeto de Engenharia - BIM e Automação"
          title="Projetos de Engenharia"
          excerpt="Projetos desenvolvidos em BIM, com modelagem 2D e 3D."
          backTitle="Projetos de Engenharia"
          backDescription="Todos os projetos são desenvolvidos em BIM, com levantamento automático de materiais federados, assegurando fidelidade ao projeto, eficiência construtiva e economia."
          listContent={
            <ul className="services-list">
              <li>
                <strong>Escopo:</strong> ART (CREA), memoriais, compatibilização e As Built
              </li>
              <li>
                <strong>Elétricos:</strong> Para todo tipo de Empreendimento (BT/MT, medição agrupada, cabeamento e SPDA)
              </li>
              <li>
                <strong>Complementares:</strong> PCI, hidrossanitário, gás, climatização e drenagem
              </li>
            </ul>
          }
        />

        <ServiceCard
          service="complementary"
          image="/Images/foto-carregadore-eletricos.png"
          alt="Carregadores Elétricos - Infraestrutura para veículos elétricos"
          title="Carregadores Elétricos"
          excerpt="Soluções completas para infraestrutura de recarga veicular."
          backTitle="Carregadores Elétricos"
          backDescription="Projetos e especificações para infraestrutura de carregamento de veículos elétricos, atendendo normas técnicas, capacidade elétrica instalada e expansão futura."
          listContent={
            <ul className="services-list">
              <li>
                <strong>Infraestrutura:</strong> dimensionamento elétrico e adequações
              </li>
              <li>
                <strong>Carregadores:</strong> AC e DC (residencial, comercial e industrial)
              </li>
              <li>
                <strong>Proteções:</strong> disjuntores, DPS e aterramento
              </li>
              <li>
                <strong>Normas:</strong> NBR, concessionárias e segurança elétrica
              </li>
            </ul>
          }
        />

        <ServiceCard
          service="electrical"
          image="/Images/engenharia-civil.jpg"
          alt="Projeto de Engenharia - BIM e Automação"
          title="Manutenção e Construção"
          excerpt="Inteligência em infraestrutura para melhor performance dos seus sistemas."
          backTitle="Manutenção e Construção"
          backDescription="Garantimos eficiência operacional através de serviços especializados em construção e manutenção elétrica, reduzindo falhas e aumentando a vida útil dos sistemas."
          listContent={
            <ul className="services-list">
              <li>Manutenção Preventiva</li>
              <li>Manutenção Corretiva Emergencial</li>
              <li>Reformas e Ampliações Elétricas</li>
              <li>Laudos Técnicos e Inspeções</li>
              <li>Modernização de Sistemas</li>
            </ul>
          }
        />

        <ServiceCard
          service="complementary"
          image="/Images/subestacao-predial.png"
          alt="Sistemas de Segurança"
          title="Sistemas de Segurança"
          excerpt="Máxima confiabilidade energética e segurança operacional."
          backTitle="Sistemas de Segurança"
          backDescription="Soluções completas em subestações e grupos geradores, eliminando paradas não programadas e otimizando o consumo de energia."
          listContent={
            <ul className="services-list">
              <li>Manutenção Preditiva e Preventiva em Subestações</li>
              <li>Instalação e Configuração de Grupos Geradores (GMG)</li>
              <li>Modernização de Painéis e Quadros de Transferência (QTA)</li>
              <li>Consultoria Técnica para Eficiência Energética</li>
            </ul>
          }
        />

        <ServiceCard
          service="complementary"
          image="/Images/subestacao-predial.png"
          alt="Subestação e Geradores"
          title="Subestações e Geradores"
          excerpt="Máxima confiabilidade energética e segurança operacional."
          backTitle="Subestações e Geradores"
          backDescription="Soluções completas em subestações e grupos geradores, eliminando paradas não programadas e otimizando o consumo de energia."
          listContent={
            <ul className="services-list">
              <li>Manutenção Preditiva e Preventiva em Subestações</li>
              <li>Instalação e Configuração de Grupos Geradores (GMG)</li>
              <li>Modernização de Painéis e Quadros de Transferência (QTA)</li>
              <li>Consultoria Técnica para Eficiência Energética</li>
            </ul>
          }
        />
      </div>
    </section>
  )
}
