import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Subestações e Geradores | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto, montagem, manutenção e modernização de subestações aéreas, abrigadas e grupos geradores em João Pessoa/PB. NBR 14039 · NR-10 · NR-35 · NDU Energisa.",
};

const frentes = [
  {
    titulo: "Subestações aéreas e abrigadas",
    descricao:
      "Projeto, montagem, modernização e manutenção de subestações de média tensão — abrigadas e em poste. Atuação completa do dimensionamento ao comissionamento.",
    lista: [
      "Subestações abrigadas e subestações aéreas em poste",
      "Manutenção preventiva, preditiva, corretiva e emergencial",
      "Troca e modernização do sistema de proteção",
      "Parametrização de relés de proteção",
      "Manutenção de QGBT, QTA e geradores de emergência",
      "Comissionamento e energização",
    ],
  },
  {
    titulo: "Geração Distribuída (GD)",
    descricao:
      "Projeto e viabilização de sistemas de microgeração e minigeração distribuída, com conexão à rede Energisa conforme NDU 013 (baixa tensão) e NDU 015 (média tensão).",
    lista: [
      "Estudo de viabilidade técnica e análise da rede",
      "Projeto elétrico completo (memorial descritivo, diagrama unifilar)",
      "Emissão de ART de projeto e instalação",
      "Submissão e acompanhamento via APR Web / Agência Virtual",
      "Adequação do padrão de entrada e subestação quando necessário",
      "Acompanhamento até a homologação e troca do medidor",
    ],
  },
  {
    titulo: "Escritório de projetos elétricos",
    descricao:
      "Elaboração e análise de projetos de redes de distribuição e instalações elétricas industriais e prediais, com domínio completo dos processos e ferramentas da Energisa.",
    lista: [
      "Projetos de redes de distribuição aérea e subterrânea",
      "Projetos de iluminação pública",
      "Projetos de instalações elétricas industriais e prediais",
      "Análise e revisão de projetos de terceiros",
      "Submissão e acompanhamento junto à Energisa",
      "Domínio de APR Web, Agência Virtual e portal de projetos",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Diagnóstico",
    desc: "Conversa inicial e visita técnica para entender o escopo e o estado atual da instalação.",
  },
  {
    num: "02",
    titulo: "Proposta técnica",
    desc: "Elaboração do escopo detalhado, cronograma e orçamento.",
  },
  {
    num: "03",
    titulo: "Projeto",
    desc: "Desenvolvimento do projeto elétrico, emissão de ART e submissão à Energisa quando necessário.",
  },
  {
    num: "04",
    titulo: "Execução / Manutenção",
    desc: "Realização do serviço em campo com equipe técnica e procedimentos de segurança (NR-10, NR-35).",
  },
  {
    num: "05",
    titulo: "Comissionamento e entrega",
    desc: "Testes, energização e entrega da documentação técnica completa.",
  },
];

const cases = [
  {
    tag: "Subestação abrigada",
    titulo: "Subestação Abrigada — Edson Ramalho",
    localizacao: "Edson Ramalho, João Pessoa — PB",
    escopo: [
      "Manutenção completa da subestação abrigada",
      "Modernização do sistema de proteção",
      "Parametrização de relés",
      "Adequação à NBR 14039 e às normas Energisa",
    ],
    fotos: {
      destaque: "/Images/subestacao-abrigada.jpeg",
      s1: "/Images/subestacao-abrigada2.jpeg",
      s2: "/Images/subestacao-abrigada3.jpeg",
    },
  },
  {
    tag: "Projeto e execução de rede",
    titulo: "Iluminação Pública — Rede Completa",
    localizacao: null,
    escopo: [
      "Projeto completo de rede de iluminação pública",
      "Instalação de transformador",
      "Posteamento e cabeamento",
      "Comissionamento e energização junto à Energisa",
    ],
    fotos: {
      destaque: "/Images/iluminacao-publica1.jpeg",
      s1: "/Images/iluminacao-publica2.jpeg",
      s2: "/Images/iluminacao-publica4.jpeg",
    },
  },
  {
    tag: "Subestação aérea",
    titulo: "Subestação Aérea",
    localizacao: null,
    escopo: [
      "Projeto e montagem de subestação aérea em poste",
      "Instalação de transformador e dispositivos de proteção",
      "Aterramento conforme NBR 5419",
      "Comissionamento e energização",
    ],
    fotos: {
      destaque: "/Images/subestacao-aerea1.jpeg",
      s1: "/Images/subestacao-predial.png",
      s2: "/Images/subestacao-abrigada3.jpeg",
    },
  },
];

export default function SubestacoesEGeradoresPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/subestacao-predial.png"
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
              ENGENHARIA ELÉTRICA
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Subestações e Geradores
            </h1>
            <p className="servico-hero__subtitle">
              Projeto, montagem, manutenção e modernização de subestações aéreas
              e abrigadas e grupos geradores — com máxima confiabilidade
              energética e execução conforme NR-10, NR-35 e NDU Energisa.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Engenharia elétrica completa, do projeto à energização
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi reúne em um único escritório toda a cadeia de
                engenharia elétrica de média e baixa tensão: do projeto inicial
                ao comissionamento, passando pela manutenção e pela homologação
                junto à concessionária.
              </p>
              <p className="about-text">
                Nossa equipe técnica tem experiência consolidada em projetos de
                subestações, redes de distribuição e geração distribuída, com
                vivência direta nos processos da Energisa — o que se traduz em
                prazos de aprovação mais curtos, menos retrabalho e segurança
                técnica em cada etapa.
              </p>
              <p className="about-text">
                Atendemos clientes industriais, comerciais e do setor público em
                João Pessoa, Paraíba e demais estados do Nordeste, com
                responsabilidade técnica (ART) e padrão de execução alinhado às
                normas ABNT e às diretrizes da concessionária.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Sobre a Montevi ── */}

        {/* ── 4. Frentes de atuação ── */}
        <section
          id="frentes"
          className="frentes servico-section"
          style={{ background: "var(--accent-lighter)" }}
        >
          <div className="frentes__header">
            <h2 className="section-title">Frentes de atuação</h2>
            <p className="section-subtitle">
              Três especialidades que se complementam — projeto, execução e
              manutenção sob a mesma responsabilidade técnica.
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

        {/* ── 5. Por que contratar ── */}

        {/* ── 6. Casos de referência ── */}
        <section
          className="portfolio-cases servico-section"
          style={{ background: "var(--accent-lighter)" }}
        >
          <div className="portfolio-cases__header">
            <p className="service-category">PORTFÓLIO</p>
            <h2 className="section-title">Casos de referência</h2>
            <p className="section-subtitle">
              Três projetos representativos da nossa atuação em diferentes
              frentes da engenharia elétrica.
            </p>
          </div>

          <div className="portfolio-cases__lista">
            {cases.map((caso, i) => {
              const isReverse = i % 2 === 1;
              const galeria = (
                <div className="case__galeria">
                  <div className="case__foto case__foto--destaque">
                    <Image
                      src={caso.fotos.destaque}
                      alt={caso.titulo}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="case__foto">
                    <Image
                      src={caso.fotos.s1}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="case__foto">
                    <Image
                      src={caso.fotos.s2}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
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
                      {/* TODO: confirmar localização */}
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

        {/* ── 7. Como funciona o atendimento ── */}
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

        {/* ── 8. CTA final ── */}
        <section className="cta-final">
          <div className="cta-final__inner">
            <h2 className="cta-final__titulo">
              Precisa de um projeto ou manutenção em sistemas elétricos?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
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
        {/* <div style={{ textAlign: "center", padding: "2rem 1rem 3rem" }}>
          <Link href="/#services" className="voltar-link">
            ← Voltar aos Serviços
          </Link>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
