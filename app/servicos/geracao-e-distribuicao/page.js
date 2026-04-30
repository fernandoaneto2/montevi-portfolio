import Image from 'next/image'
import Link from 'next/link'
import GeracaoDistribuicaoCarousel from '@/components/GeracaoDistribuicaoCarousel'

export const metadata = {
  title: 'Geração e Distribuição | Engenharia Elétrica em João Pessoa — Monteví',
  description:
    'Projetos e manutenção de subestações aéreas e abrigadas, geração distribuída e redes elétricas em João Pessoa, PB. Domínio completo das normas e ferramentas da Energisa — NDU 013, NDU 015, APR Web. ART em todas as etapas.',
}

const frentes = [
  {
    titulo: 'Subestações aéreas e abrigadas',
    descricao:
      'Projeto, montagem, modernização e manutenção de subestações de média tensão — abrigadas e em poste. Atuação completa do dimensionamento ao comissionamento.',
    lista: [
      'Subestações abrigadas e subestações aéreas em poste',
      'Manutenção preventiva, preditiva, corretiva e emergencial',
      'Troca e modernização do sistema de proteção',
      'Parametrização de relés de proteção',
      'Manutenção de QGBT, QTA e geradores de emergência',
      'Comissionamento e energização',
    ],
  },
  {
    titulo: 'Geração Distribuída (GD)',
    descricao:
      'Projeto e viabilização de sistemas de microgeração e minigeração distribuída, com conexão à rede Energisa conforme NDU 013 (baixa tensão) e NDU 015 (média tensão).',
    lista: [
      'Estudo de viabilidade técnica e análise da rede',
      'Projeto elétrico completo (memorial descritivo, diagrama unifilar)',
      'Emissão de ART de projeto e instalação',
      'Submissão e acompanhamento via APR Web / Agência Virtual',
      'Adequação do padrão de entrada e subestação quando necessário',
      'Acompanhamento até a homologação e troca do medidor',
    ],
  },
  {
    titulo: 'Escritório de projetos elétricos',
    descricao:
      'Elaboração e análise de projetos de redes de distribuição e instalações elétricas industriais e prediais, com domínio completo dos processos e ferramentas da Energisa.',
    lista: [
      'Projetos de redes de distribuição aérea e subterrânea',
      'Projetos de iluminação pública',
      'Projetos de instalações elétricas industriais e prediais',
      'Análise e revisão de projetos de terceiros',
      'Submissão e acompanhamento junto à Energisa',
      'Domínio de APR Web, Agência Virtual e portal de projetos',
    ],
  },
]

const diferenciais = [
  {
    titulo: 'Domínio das ferramentas Energisa',
    texto:
      'Conhecemos por dentro o APR Web, a Agência Virtual e os fluxos de aprovação da concessionária — o que reduz prazos e elimina retrabalho.',
  },
  {
    titulo: 'Equipe com vivência em concessionária',
    texto:
      'Profissionais com passagem por escritórios de referência do setor, com formação técnica consolidada nos processos de projeto e manutenção elétrica.',
  },
  {
    titulo: 'Escopo completo',
    texto:
      'Do projeto à energização, com responsabilidade técnica (ART) em cada etapa — sem terceirizar a parte crítica do serviço.',
  },
  {
    titulo: 'Conformidade normativa',
    texto:
      'Projetos e execuções alinhados às normas ABNT (NBR 5410, NBR 14039, NBR 5419) e às Normas de Distribuição da Energisa (NDU).',
  },
]

const timeline = [
  {
    num: '01',
    titulo: 'Diagnóstico',
    desc: 'Conversa inicial e visita técnica para entender o escopo e o estado atual da instalação.',
  },
  {
    num: '02',
    titulo: 'Proposta técnica',
    desc: 'Elaboração do escopo detalhado, cronograma e orçamento.',
  },
  {
    num: '03',
    titulo: 'Projeto',
    desc: 'Desenvolvimento do projeto elétrico, emissão de ART e submissão à Energisa quando necessário.',
  },
  {
    num: '04',
    titulo: 'Execução / Manutenção',
    desc: 'Realização do serviço em campo com equipe técnica e procedimentos de segurança (NR-10, NR-35).',
  },
  {
    num: '05',
    titulo: 'Comissionamento e entrega',
    desc: 'Testes, energização e entrega da documentação técnica completa.',
  },
]

export default function GeracaoEDistribuicaoPage() {
  return (
    <main className="servico-page">

      {/* ── 1. Hero ── */}
      <section className="servico-hero">
        <div className="servico-hero__bg">
          <Image
            src="/Images/subestacao-predial.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="servico-hero__overlay" />
        <div className="servico-hero__inner">
          <p className="service-category" style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>
            ENGENHARIA ELÉTRICA
          </p>
          <h1 className="section-title" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Geração e Distribuição
          </h1>
          <p className="servico-hero__subtitle">
            Projetamos, executamos e damos manutenção em subestações, sistemas de
            geração distribuída e redes elétricas — com domínio completo das normas
            e ferramentas da Energisa.
          </p>
          <div className="servico-hero__ctas">
            <a
              href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Gera%C3%A7%C3%A3o%20e%20Distribui%C3%A7%C3%A3o."
              className="cta-button-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
            <a href="#frentes" className="cta-button">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Sobre o serviço ── */}
      <section className="servico-sobre servico-section">
        <div className="servico-sobre__inner">
          <h2 className="section-title">Engenharia elétrica completa, do projeto à energização</h2>
          <div className="servico-sobre__textos">
            <p className="about-text">
              A Montevi reúne em um único escritório toda a cadeia de engenharia elétrica
              de média e baixa tensão: do projeto inicial ao comissionamento, passando
              pela manutenção e pela homologação junto à concessionária.
            </p>
            <p className="about-text">
              Nossa equipe técnica tem experiência consolidada em projetos de subestações,
              redes de distribuição e geração distribuída, com vivência direta nos processos
              da Energisa — o que se traduz em prazos de aprovação mais curtos, menos
              retrabalho e segurança técnica em cada etapa.
            </p>
            <p className="about-text">
              Atendemos clientes industriais, comerciais e do setor público em João Pessoa,
              Paraíba e demais estados do Nordeste, com responsabilidade técnica (ART) e
              padrão de execução alinhado às normas ABNT e às diretrizes da concessionária.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Frentes de atuação ── */}
      <section id="frentes" className="frentes servico-section" style={{ background: 'var(--accent-lighter)' }}>
        <div className="frentes__header">
          <h2 className="section-title">Frentes de atuação</h2>
          <p className="section-subtitle">
            Três especialidades que se complementam — projeto, execução e manutenção
            sob a mesma responsabilidade técnica.
          </p>
        </div>
        <div className="frentes__grid">
          {frentes.map((f) => (
            <div className="frente" key={f.titulo}>
              <h3 className="frente__titulo">{f.titulo}</h3>
              <p className="frente__descricao">{f.descricao}</p>
              <ul className="frente__lista">
                {f.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Por que contratar ── */}
      <section className="diferenciais servico-section">
        <h2 className="section-title">Por que contratar a Montevi</h2>
        <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
          Domínio técnico e conhecimento do fluxo da concessionária — em um escritório só.
        </p>
        <div className="diferenciais__grid">
          {diferenciais.map((d) => (
            <div className="diferencial" key={d.titulo}>
              <h3 className="diferencial__titulo">{d.titulo}</h3>
              <p className="diferencial__texto">{d.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Portfólio ── */}
      <section className="portfolio servico-section" style={{ background: 'var(--accent-lighter)' }}>
        <h2 className="section-title">Projetos Realizados</h2>
        <p className="section-subtitle">
          {/* TODO: atualizar subtítulo com número real de projetos entregues */}
          Execuções em geração e distribuição — clique nas setas para navegar
        </p>
        {/* TODO: substituir placeholders pelas fotos e dados reais dos projetos */}
        <GeracaoDistribuicaoCarousel />
      </section>

      {/* ── 6. Como funciona o atendimento ── */}
      <section className="atendimento servico-section">
        <div className="atendimento__inner">
          <h2 className="section-title">Como funciona o atendimento</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Do primeiro contato à entrega da documentação técnica.
          </p>
          <ol className="atendimento__lista">
            {timeline.map((step) => (
              <li className="atendimento__item" key={step.num}>
                <span className="atendimento__num">{step.num}</span>
                <div className="atendimento__conteudo">
                  <strong className="atendimento__titulo">{step.titulo}</strong>
                  <p className="atendimento__desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 7. CTA final ── */}
      <section className="cta-final">
        <div className="cta-final__inner">
          <h2 className="cta-final__titulo">
            Precisa de um projeto ou manutenção em sistemas elétricos?
          </h2>
          <p className="cta-final__sub">
            Fale com a equipe da Montevi e receba um orçamento técnico personalizado.
          </p>
          <div className="cta-final__btns">
            <a
              href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Gera%C3%A7%C3%A3o%20e%20Distribui%C3%A7%C3%A3o."
              className="cta-button-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      {/* ── Voltar ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
        <Link href="/#services" className="action-button" style={{ display: 'inline-block' }}>
          ← Voltar aos Serviços
        </Link>
      </div>

    </main>
  )
}
