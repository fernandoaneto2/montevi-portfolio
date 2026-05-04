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
    tag: 'Energia Solar',
    titulo: 'Geração Fotovoltaica',
    descricao:
      'Soluções completas em energia solar fotovoltaica — On Grid, Off Grid, Híbrido e Bomba Solar — do dimensionamento à instalação e homologação junto à concessionária.',
    bullets: [
      'On Grid, On Grid com Micro Inversor e Off Grid',
      'Sistemas Híbridos e Bomba Solar',
      'Dimensionamento, projeto elétrico e ART de instalação',
      'Homologação junto à concessionária e troca do medidor',
    ],
    normas: ['NBR 16690', 'ABNT NBR 16274', 'REN 1.000/2021', 'NR-10'],
    seguranca:
      'Instalação com equipe certificada NR-10, proteção anti-ilhamento e aterramento conforme normas ABNT.',
    imagem: '/Images/paineis-solares2.jpg',
    alt: 'Sistema de geração fotovoltaica instalado em telhado',
    href: '/servicos/geracao-fotovoltaica',
    waText: 'Olá! Tenho interesse no serviço de Geração Fotovoltaica.',
    priority: false,
  },
  {
    tag: 'Escritório Técnico BIM',
    titulo: 'Projetos de Engenharia',
    descricao:
      'Todos os projetos são desenvolvidos em BIM, com levantamento automático de materiais federados, assegurando fidelidade ao projeto, eficiência construtiva e economia.',
    bullets: [
      'Elétricos: BT/MT, medição agrupada, cabeamento e SPDA',
      'Complementares: PCI, hidrossanitário, gás e climatização',
      'ART (CREA), memoriais, compatibilização e As Built',
      'Análise e revisão técnica de projetos de terceiros',
    ],
    normas: ['NBR 5410', 'NBR 14039', 'NBR 5419', 'CREA/ART'],
    seguranca:
      'Todo projeto entregue com ART do CREA e memorial descritivo completo — responsabilidade técnica garantida.',
    imagem: '/Images/engenharia-civil.jpg',
    alt: 'Projeto de engenharia elétrica desenvolvido em BIM',
    href: '/servicos/projetos-de-engenharia',
    waText: 'Olá! Tenho interesse no serviço de Projetos de Engenharia.',
    priority: false,
  },
  {
    tag: 'Mobilidade Elétrica',
    titulo: 'Carregadores Elétricos (EV)',
    descricao:
      'Projetos e especificações para infraestrutura de carregamento de veículos elétricos, atendendo normas técnicas, capacidade elétrica instalada e expansão futura.',
    bullets: [
      'Carregadores AC e DC — residencial, comercial e industrial',
      'Dimensionamento elétrico e adequações da instalação',
      'Proteções: disjuntores, DPS e aterramento',
      'Projeto com previsão de expansão futura da frota',
    ],
    normas: ['NBR 5410', 'IEC 61851', 'NR-10', 'ABNT NBR 16415'],
    seguranca:
      'Infraestrutura projetada com proteção contra surtos (DPS) e aterramento conforme normas de segurança elétrica.',
    imagem: '/Images/foto-carregadore-eletricos.png',
    alt: 'Carregadores de veículos elétricos instalados em infraestrutura',
    href: '/servicos/carregadores-eletricos',
    waText: 'Olá! Tenho interesse no serviço de Carregadores Elétricos.',
    priority: false,
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
        Seis frentes especializadas, cada uma com domínio normativo completo e
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
