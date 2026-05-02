import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Iluminação Pública | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto e execução de redes completas de iluminação pública, da modelagem fotométrica à energização junto à Energisa. NBR 5101 · NR-10 · NR-35.",
};

const frentes = [
  {
    titulo: "Projeto de sistemas de iluminação pública",
    descricao:
      "Elaboração de projetos luminotécnicos completos conforme NBR 5101, com cálculo fotométrico, seleção de luminárias e dimensionamento da rede elétrica.",
    lista: [
      "Levantamento de campo e diagnóstico do sistema existente",
      "Cálculo fotométrico e modelagem de iluminância",
      "Seleção e especificação de luminárias e postes",
      "Projeto elétrico com diagrama unifilar e lista de materiais",
      "Aprovação junto à Energisa e prefeitura",
      "Emissão de ART de projeto",
    ],
  },
  {
    titulo: "Instalação e execução de redes de IP",
    descricao:
      "Instalação completa de redes de iluminação pública — posteamento, cabeamento, instalação de transformadores e comissionamento junto à concessionária.",
    lista: [
      "Instalação de postes, braços e luminárias",
      "Cabeamento de rede de IP em baixa tensão",
      "Instalação de transformadores para redes de IP",
      "Aterramento e proteção contra sobretensões",
      "Execução conforme NR-10 e NR-35 com sinalização viária",
      "Comissionamento e energização junto à Energisa",
    ],
  },
  {
    titulo: "Modernização e eficientização com LED",
    descricao:
      "Substituição de luminárias convencionais por tecnologia LED de alta eficiência — redução de consumo energético e custo de manutenção.",
    lista: [
      "Diagnóstico energético do sistema atual",
      "Projeto de substituição com equivalência fotométrica",
      "Instalação de luminárias LED de alta eficiência",
      "Adequação da rede elétrica quando necessário",
      "Relatório de consumo pré e pós-modernização",
      "Documentação técnica completa com ART",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Levantamento e diagnóstico",
    desc: "Visita ao local, inventário do sistema existente e levantamento das necessidades do cliente.",
  },
  {
    num: "02",
    titulo: "Projeto luminotécnico",
    desc: "Elaboração do projeto conforme NBR 5101, com cálculo fotométrico e especificação de materiais.",
  },
  {
    num: "03",
    titulo: "Aprovação junto à Energisa / prefeitura",
    desc: "Protocolo e acompanhamento do processo de aprovação junto aos órgãos competentes.",
  },
  {
    num: "04",
    titulo: "Instalação em campo",
    desc: "Execução com equipe certificada NR-10 e NR-35, sinalização viária e isolamento de área.",
  },
  {
    num: "05",
    titulo: "Comissionamento e entrega",
    desc: "Testes, energização e entrega da documentação técnica completa ao cliente.",
  },
];

const cases = [
  {
    tag: "Sistema completo de IP",
    titulo: "Iluminação Pública — Rede Completa",
    localizacao: "João Pessoa — PB",
    escopo: [
      "Projeto completo de rede de iluminação pública",
      "Instalação de transformador, posteamento e cabeamento",
      "Comissionamento e energização junto à Energisa",
      "Documentação técnica completa com ART",
    ],
    fotos: {
      destaque: "/Images/iluminacao-publica1.jpeg",
      s1: "/Images/iluminacao-publica2.jpeg",
      s2: "/Images/iluminacao-publica5.png",
    },
  },
  {
    tag: "Modernização LED",
    titulo: "Eficientização com Luminárias LED",
    localizacao: null,
    escopo: [
      "Diagnóstico energético do sistema existente",
      "Projeto de substituição com equivalência fotométrica",
      "Instalação de luminárias LED de alta eficiência",
      "Relatório de redução de consumo e documentação ART",
    ],
    fotos: {
      destaque: "/Images/iluminacao-publica6.png",
      s1: "/Images/iluminacao-publica7.png",
      s2: "/Images/iluminacao-publica4.jpeg",
    },
  },
  {
    tag: "Extensão de rede de IP",
    titulo: "Extensão de Rede de Iluminação Pública",
    localizacao: null,
    escopo: [
      "Projeto de extensão da rede de IP existente",
      "Instalação de postes, braços e luminárias",
      "Adequação da rede elétrica de alimentação",
      "Aprovação e comissionamento junto à Energisa",
    ],
    fotos: {
      destaque: "/Images/iluminacao-publica2.jpeg",
      s1: "/Images/iluminacao-publica5.png",
      s2: "/Images/iluminacao-publica7.png",
    },
  },
];

export default function IluminacaoPublicaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/iluminacao-publica4.jpeg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
          <div className="servico-hero__overlay" />
          <div className="servico-hero__inner">
            <p
              className="service-category"
              style={{ color: "var(--accent-light)", marginBottom: "0.5rem" }}
            >
              INFRAESTRUTURA PÚBLICA
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Iluminação Pública
            </h1>
            <p className="servico-hero__subtitle">
              Projeto e execução de redes completas de iluminação pública, da
              modelagem fotométrica à energização junto à concessionária —
              conforme NBR 5101, NR-10 e NR-35.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Do projeto fotométrico à energização
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi executa projetos completos de iluminação pública:
                levantamento de campo, projeto luminotécnico conforme NBR 5101,
                posteamento, cabeamento, instalação de transformadores e
                comissionamento junto à Energisa.
              </p>
              <p className="about-text">
                Trabalhamos com eficientização de sistemas existentes para
                luminárias LED, reduzindo o consumo energético e a carga de
                manutenção dos municípios e concessionárias. Cada projeto é
                acompanhado de cálculo fotométrico e documentação técnica
                completa.
              </p>
              <p className="about-text">
                Toda execução é realizada com equipe certificada NR-10 e NR-35,
                com sinalização viária, isolamento de área e procedimentos de
                segurança conforme as normas de trabalho em vias públicas.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Frentes de atuação ── */}
        <section
          id="frentes"
          className="frentes servico-section"
          style={{ background: "var(--accent-lighter)" }}
        >
          <div className="frentes__header">
            <h2 className="section-title">Frentes de atuação</h2>
            <p className="section-subtitle">
              Projeto, instalação e modernização — do zero à entrega com
              responsabilidade técnica em todas as etapas.
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

        {/* ── 4. Casos de referência ── */}
        <section
          className="portfolio-cases servico-section"
          style={{ background: "var(--accent-lighter)" }}
        >
          <div className="portfolio-cases__header">
            <p className="service-category">PORTFÓLIO</p>
            <h2 className="section-title">Casos de referência</h2>
            <p className="section-subtitle">
              Projetos representativos da nossa atuação em iluminação pública na
              Paraíba.
            </p>
          </div>

          <div className="portfolio-cases__lista">
            {cases.map((caso, i) => {
              const isReverse = i % 2 === 1;
              const galeria = (
                <div className="case__galeria">
                  <div className="case__foto case__foto--destaque">
                    <Image src={caso.fotos.destaque} alt={caso.titulo} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="case__foto">
                    <Image src={caso.fotos.s1} alt="" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="case__foto">
                    <Image src={caso.fotos.s2} alt="" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              );
              const conteudo = (
                <div className="case__conteudo">
                  <span className="case__tag">{caso.tag}</span>
                  <h3 className="case__titulo">{caso.titulo}</h3>
                  {caso.localizacao ? (
                    <p className="case__local">{caso.localizacao}</p>
                  ) : (
                    <p className="case__local case__local--todo">
                      Localização a confirmar
                    </p>
                  )}
                  <p className="case__escopo-label">Escopo entregue</p>
                  <ul className="case__lista">
                    {caso.escopo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
              return (
                <div
                  className={`case${isReverse ? " case--reverse" : ""}`}
                  key={caso.titulo}
                >
                  {isReverse ? conteudo : galeria}
                  {isReverse ? galeria : conteudo}
                </div>
              );
            })}
          </div>

          <p className="portfolio-cases__fechamento">
            Além desses cases, contamos com um histórico de projetos de
            iluminação pública elaborados e executados em municípios da Paraíba.
          </p>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Do primeiro contato à entrega da documentação técnica.
            </p>
            <ol className="atendimento__lista">
              {timeline.map((step) => (
                <li className="atendimento__item" key={step.num}>
                  <span className="atendimento__num">{step.num}</span>
                  <div className="atendimento__conteudo">
                    <strong className="atendimento__titulo">
                      {step.titulo}
                    </strong>
                    <p className="atendimento__desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 6. CTA final ── */}
        <section className="cta-final">
          <div className="cta-final__inner">
            <h2 className="cta-final__titulo">
              Precisa de projeto ou execução de iluminação pública?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Ilumina%C3%A7%C3%A3o%20P%C3%BAblica."
                className="cta-button-contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

        <div style={{ textAlign: "center", padding: "2rem 1rem 3rem" }}>
          <Link href="/#services" className="voltar-link">
            ← Voltar aos Serviços
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
