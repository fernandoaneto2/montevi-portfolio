import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projetos e Análises | Montevi Engenharia — João Pessoa/PB",
  description:
    "Hub completo de projetos elétricos: prediais, industriais e de redes. Análise e revisão de projetos de terceiros. Submissão via APR Web. ART em todas as etapas.",
};

const frentes = [
  {
    titulo: "Projetos elétricos prediais e industriais",
    descricao:
      "Elaboração de projetos elétricos completos para edificações prediais, residenciais e industriais — conforme NBR 5410, NBR 14039 e NBR 5419.",
    lista: [
      "Projetos de instalações elétricas prediais (NBR 5410)",
      "Projetos de instalações elétricas industriais em média tensão (NBR 14039)",
      "Projetos de SPDA — para-raios (NBR 5419)",
      "Projetos de quadros de distribuição (QGBT, QTA, QD)",
      "Memorial descritivo, diagrama unifilar e lista de materiais",
      "Emissão de ART do CREA em todas as etapas",
    ],
  },
  {
    titulo: "Projetos de redes e geração distribuída",
    descricao:
      "Projetos de redes de distribuição aérea e subterrânea e de sistemas de microgeração e minigeração distribuída, com aprovação junto à Energisa.",
    lista: [
      "Projetos de redes de distribuição aérea e subterrânea",
      "Projetos de iluminação pública conforme NBR 5101",
      "Projetos de microgeração e minigeração distribuída (GD)",
      "Submissão via APR Web e Agência Virtual da Energisa",
      "Acompanhamento até a aprovação final da concessionária",
      "Documentação técnica completa com ART",
    ],
  },
  {
    titulo: "Análise e revisão de projetos de terceiros",
    descricao:
      "Revisão técnica, adequação normativa e análise crítica de projetos elaborados por terceiros — com laudo técnico e ART de responsabilidade.",
    lista: [
      "Análise técnica de projetos elétricos prediais e industriais",
      "Revisão e adequação às normas ABNT vigentes",
      "Identificação de não conformidades e recomendações de correção",
      "Adequação de projetos para aprovação junto à Energisa",
      "Laudo técnico com ART de análise",
      "Conformidade com NBR 5410, NBR 14039, NBR 5419 e NDU Energisa",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Briefing técnico",
    desc: "Alinhamento do escopo, levantamento das necessidades do cliente e análise da documentação existente.",
  },
  {
    num: "02",
    titulo: "Elaboração do projeto",
    desc: "Desenvolvimento do projeto elétrico completo — memorial descritivo, diagrama unifilar, plantas e lista de materiais.",
  },
  {
    num: "03",
    titulo: "Emissão de ART",
    desc: "Emissão da Anotação de Responsabilidade Técnica (ART) do CREA com responsabilidade técnica do engenheiro responsável.",
  },
  {
    num: "04",
    titulo: "Aprovação junto à concessionária",
    desc: "Submissão via APR Web e acompanhamento de todo o processo de aprovação da Energisa (quando aplicável).",
  },
  {
    num: "05",
    titulo: "Entrega da documentação",
    desc: "Entrega do projeto aprovado, ART, memorial e todos os documentos técnicos necessários ao cliente.",
  },
];

const cases = [
  {
    tag: "Projeto industrial",
    titulo: "Projeto Elétrico Industrial — Média Tensão",
    localizacao: "João Pessoa — PB",
    escopo: [
      "Projeto de instalações elétricas industriais em média tensão",
      "Dimensionamento de QGBT e quadros de distribuição",
      "Diagrama unifilar completo e memorial descritivo",
      "ART de projeto e submissão à Energisa",
    ],
    fotos: {
      destaque: "/Images/subestacao-abrigada.jpeg",
      s1: "/Images/subestacao-abrigada2.jpeg",
      s2: "/Images/subestacao-abrigada3.jpeg",
    },
  },
  {
    tag: "Projeto predial residencial",
    titulo: "Projeto Elétrico Predial — Residencial",
    localizacao: null,
    escopo: [
      "Projeto completo de instalações elétricas prediais (NBR 5410)",
      "Dimensionamento de circuitos, quadros e proteções",
      "Projeto de SPDA (para-raios) conforme NBR 5419",
      "Memorial descritivo e ART de projeto",
    ],
    fotos: {
      destaque: "/Images/subestacao-aerea1.jpeg",
      s1: "/Images/engenharia-civil.jpg",
      s2: "/Images/subestacao-abrigada3.jpeg",
    },
  },
  {
    tag: "Análise e revisão",
    titulo: "Análise Técnica de Projeto de Terceiro",
    localizacao: null,
    escopo: [
      "Análise técnica completa de projeto elétrico industrial",
      "Identificação de não conformidades com NBR 14039",
      "Elaboração de relatório técnico com recomendações",
      "ART de análise e laudo técnico entregue ao cliente",
    ],
    fotos: {
      destaque: "/Images/subestacao-abrigada2.jpeg",
      s1: "/Images/subestacao-aerea1.jpeg",
      s2: "/Images/engenharia-civil.jpg",
    },
  },
];

export default function ProjetosEAnalisesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/engenharia-civil2.jpg"
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
              ESCRITÓRIO TÉCNICO
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Projetos e Análises
            </h1>
            <p className="servico-hero__subtitle">
              Hub completo de projetos elétricos — elaboramos, analisamos e
              aprovamos projetos junto à concessionária, com responsabilidade
              técnica (ART) em todas as etapas.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Responsabilidade técnica do início ao fim
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi oferece um escritório técnico completo para projetos
                elétricos prediais, industriais e de redes de distribuição.
                Elaboramos projetos novos, revisamos projetos de terceiros e
                acompanhamos todo o processo de aprovação junto à Energisa.
              </p>
              <p className="about-text">
                Cada projeto é entregue com ART do CREA, memorial descritivo,
                diagrama unifilar e demais documentos exigidos pela
                concessionária — garantindo segurança jurídica e técnica em
                todas as fases.
              </p>
              <p className="about-text">
                Domínio completo das ferramentas APR Web, Agência Virtual da
                Energisa e das normas NDU 013 (baixa tensão), NDU 015 (média
                tensão), NBR 5410, NBR 14039 e NBR 5419 (SPDA).
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
              Predial, industrial ou de redes — elaboramos, revisamos e
              aprovamos projetos com ART em todas as etapas.
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
              Projetos e análises técnicas representativos da nossa atuação em
              engenharia elétrica.
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
            Além desses cases, contamos com um amplo histórico de projetos
            elétricos elaborados, analisados e aprovados junto à Energisa.
          </p>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Do briefing técnico à entrega da documentação aprovada.
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
              Precisa de um projeto elétrico ou análise técnica?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Projetos%20e%20An%C3%A1lises."
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
