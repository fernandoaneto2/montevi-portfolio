const valores = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Segurança Operacional',
    texto:
      'Todas as intervenções seguem rigorosamente NR-10 e NR-35, com procedimento de Bloqueio/Etiquetagem (PT/LOTO) obrigatório em instalações energizadas. Segurança não é opcional — é o ponto de partida de cada projeto.',
    destaque: 'NR-10 · NR-35 · PT/LOTO',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 12h10M7 8h6M7 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    titulo: 'Conformidade Normativa',
    texto:
      'Projetos elaborados em conformidade com as normas ABNT, NDU da Energisa e resoluções da ANEEL. Cada entrega inclui ART do CREA, garantindo respaldo jurídico e técnico para o cliente.',
    destaque: 'NBR · NDU 013 / 015 · REN 1.000',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Comprometimento com Prazos',
    texto:
      'Cumprimos o cronograma acordado porque sabemos que atraso em obra gera custo para o cliente. Gestão transparente, comunicação contínua e execução disciplinada em todas as etapas.',
    destaque: 'Planejamento · Execução · Entrega',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    titulo: 'Compromisso com o Cliente',
    texto:
      'Da visita técnica até a entrega final, acompanhamos o cliente com clareza e transparência. Explicamos cada decisão técnica, apresentamos alternativas e mantemos o orçamento sob controle.',
    destaque: 'Transparência · Suporte · Confiança',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Excelência Técnica',
    texto:
      'Engenheiros registrados no CREA com formação contínua nas normas mais atuais do setor elétrico. Usamos ferramentas modernas de projeto e metodologias consagradas para garantir a qualidade de cada obra.',
    destaque: 'CREA · Capacitação Contínua · Qualidade',
  },
]

export default function MissaoValores() {
  return (
    <section id="missao-valores" className="mv-section" aria-labelledby="mv-titulo">
      <div className="mv-inner">
        <div className="mv-header">
          <p className="mv-eyebrow">MISSÃO E VALORES</p>
          <h2 id="mv-titulo" className="section-title mv-titulo">
            Engenharia com responsabilidade — do projeto à operação
          </h2>
          <p className="mv-subtitulo">
            A Montevi foi fundada com uma premissa clara: entregar serviços elétricos de alta complexidade sem
            abrir mão da segurança, da conformidade normativa e do respeito ao cliente.
          </p>
        </div>

        <div className="mv-grid">
          {valores.map((v) => (
            <article key={v.titulo} className="mv-card">
              <div className="mv-card__icon">{v.icon}</div>
              <h3 className="mv-card__titulo">{v.titulo}</h3>
              <p className="mv-card__texto">{v.texto}</p>
              <span className="mv-card__badge">{v.destaque}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
