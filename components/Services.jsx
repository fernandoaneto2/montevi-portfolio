import Image from 'next/image'
import Link from 'next/link'

const WA = 'https://wa.me/5511922763114?text='

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

const servicos = [
  {
    tag: 'Engenharia Elétrica',
    titulo: 'Subestações e Geradores',
    descricao:
      'Projeto, montagem, manutenção e modernização de subestações aéreas, abrigadas e grupos geradores — com máxima confiabilidade energética e segurança operacional.',
    bullets: [
      'Subestações aéreas e abrigadas (média tensão)',
      'Manutenção preventiva, preditiva, corretiva e emergencial',
      'Modernização de proteção e parametrização de relés',
      'Grupos Geradores (GMG) e Quadros de Transferência (QTA)',
    ],
    normas: ['NBR 14039', 'NR-10', 'NR-35', 'NDU Energisa'],
    seguranca:
      'Execução com PT (Permissão de Trabalho), travamento, bloqueio e LOTO conforme NR-10.',
    imagem: '/Images/subestacao-predial.png',
    alt: 'Subestação abrigada com painéis de proteção elétrica',
    href: '/servicos/subestacoes-e-geradores',
    waText: 'Olá! Tenho interesse no serviço de Subestações e Geradores.',
    priority: true,
  },
  {
    tag: 'Engenharia Elétrica',
    titulo: 'Redes de Distribuição',
    descricao:
      'Projeto e execução de redes de distribuição aérea e subterrânea em média e baixa tensão, com domínio total dos procedimentos da Energisa.',
    bullets: [
      'Redes de distribuição aérea (RDA) e subterrânea (RDS)',
      'Extensão e reforço de rede para novas cargas',
      'Adequação de padrão de entrada e medição',
      'Submissão e acompanhamento via APR Web e Agência Virtual',
    ],
    normas: ['NBR 5410', 'NBR 14039', 'NR-10', 'NDU 001/Energisa'],
    seguranca:
      'Equipe certificada NR-10 e NR-35, com APR (Análise Preliminar de Risco) em todas as frentes de obra.',
    // TODO: substituir por foto real de rede de distribuição aérea (poste/transformador)
    imagem: '/Images/subestacao-aerea1.jpeg',
    alt: 'Rede de distribuição elétrica aérea em poste',
    href: '/servicos/redes-de-distribuicao',
    waText: 'Olá! Tenho interesse no serviço de Redes de Distribuição.',
    priority: false,
  },
  {
    tag: 'Infraestrutura Pública',
    titulo: 'Iluminação Pública',
    descricao:
      'Projeto e execução de redes completas de iluminação pública, da modelagem fotométrica à energização junto à concessionária.',
    bullets: [
      'Projeto luminotécnico conforme NBR 5101',
      'Posteamento, cabeamento e instalação de transformadores',
      'Eficientização energética com luminárias LED',
      'Comissionamento e energização junto à Energisa',
    ],
    normas: ['NBR 5101', 'NBR 5410', 'NR-10', 'NR-35'],
    seguranca:
      'Trabalho em altura com NR-35, sinalização viária e isolamento de área conforme normas de tráfego.',
    imagem: '/Images/iluminacao-publica4.jpeg',
    alt: 'Execução de rede de iluminação pública com luminárias LED',
    href: '/servicos/iluminacao-publica',
    waText: 'Olá! Tenho interesse no serviço de Iluminação Pública.',
    priority: false,
  },
  {
    tag: 'Escritório Técnico',
    titulo: 'Projetos e Análises',
    descricao:
      'Hub completo de projetos elétricos: elaboramos, analisamos e aprovamos projetos junto à concessionária, com responsabilidade técnica em todas as etapas.',
    bullets: [
      'Projetos elétricos prediais, industriais e de redes',
      'Análise técnica e revisão de projetos de terceiros',
      'Submissão e acompanhamento via APR Web da Energisa',
      'Emissão de ART e memoriais descritivos completos',
    ],
    normas: ['NBR 5410', 'NBR 14039', 'NBR 5419', 'NDU 013', 'NDU 015'],
    seguranca:
      'Todo projeto entregue com ART do CREA — segurança jurídica e técnica do início ao fim.',
    imagem: '/Images/engenharia-civil2.jpg',
    alt: 'Execução de obra elétrica com responsabilidade técnica',
    href: '/servicos/projetos-e-analises',
    waText: 'Olá! Tenho interesse no serviço de Projetos e Análises.',
    priority: false,
  },
  {
    tag: 'Geração Distribuída',
    titulo: 'Geração Distribuída (GD)',
    descricao:
      'Projeto, viabilidade e homologação de sistemas de microgeração e minigeração distribuída, com conexão garantida junto à Energisa.',
    bullets: [
      'Estudo de viabilidade técnica e análise da rede',
      'Projeto elétrico completo (memorial, unifilar, folha de dados)',
      'Submissão e acompanhamento via APR Web até a homologação',
      'Adequação do padrão de entrada e troca do medidor',
    ],
    normas: ['NDU 013', 'NDU 015', 'NBR 16690', 'NBR 5410', 'REN 1.000/2021'],
    seguranca:
      'Projetos com proteção anti-ilhamento e desligamento automático conforme NDU Energisa.',
    imagem: '/Images/paineis-solares4.jpg',
    alt: 'Painéis solares fotovoltaicos de sistema de geração distribuída',
    href: '/servicos/geracao-distribuida',
    waText: 'Olá! Tenho interesse no serviço de Geração Distribuída.',
    priority: false,
  },
]

function ServiceCard({ servico }) {
  return (
    <article className="svc-card">
      <div className="svc-card__img-wrap">
        <Image
          src={servico.imagem}
          alt={servico.alt}
          fill
          className="svc-card__img"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          priority={servico.priority}
        />
      </div>

      <div className="svc-card__body">
        <p className="svc-card__tag">{servico.tag}</p>

        <h3 className="svc-card__titulo">{servico.titulo}</h3>

        <p className="svc-card__descricao">{servico.descricao}</p>

        <ul className="svc-card__bullets" aria-label="Serviços incluídos">
          {servico.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div
          className="svc-card__normas"
          aria-label={`Normas atendidas: ${servico.normas.join(', ')}`}
        >
          {servico.normas.map((n) => (
            <span key={n} className="svc-card__badge">
              {n}
            </span>
          ))}
        </div>

        <div className="svc-card__seguranca">
          <ShieldIcon />
          <span>{servico.seguranca}</span>
        </div>

        <div className="svc-card__ctas">
          <Link href={servico.href} className="svc-card__cta-primary">
            Ver detalhes →
          </Link>
          <a
            href={`${WA}${encodeURIComponent(servico.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="svc-card__cta-secondary"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="services" role="region" aria-label="Serviços">
      <p className="services__eyebrow">Áreas de atuação</p>
      <h2 className="section-title">
        Engenharia elétrica com segurança normatizada
      </h2>
      <p className="section-subtitle">
        Cinco frentes especializadas, cada uma com domínio normativo completo e
        equipe certificada para garantir execução segura e em conformidade.
      </p>

      <div className="svc-grid">
        {servicos.map((s) => (
          <ServiceCard key={s.titulo} servico={s} />
        ))}
      </div>
    </section>
  )
}
