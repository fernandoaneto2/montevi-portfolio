import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Geração Distribuída (GD) | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto, viabilidade e homologação de sistemas de microgeração e minigeração distribuída junto à Energisa. NDU 013 · NDU 015 · NBR 16690 · REN 1.000/2021.",
};

const frentes = [
  {
    titulo: "Microgeração distribuída — baixa tensão (NDU 013)",
    descricao:
      "Projeto e homologação de sistemas de microgeração distribuída para clientes residenciais e pequenos comerciais conectados em baixa tensão, conforme NDU 013 da Energisa.",
    lista: [
      "Estudo de viabilidade técnica e análise da rede de BT",
      "Projeto elétrico completo (memorial descritivo, diagrama unifilar, folha de dados do inversor)",
      "Especificação e verificação dos equipamentos (módulos, inversores, estruturas)",
      "Proteção anti-ilhamento e desligamento automático (REN 1.000/2021)",
      "Emissão de ART de projeto e instalação",
      "Submissão e acompanhamento via APR Web até a homologação",
    ],
  },
  {
    titulo: "Minigeração distribuída — média tensão (NDU 015)",
    descricao:
      "Projeto e homologação de sistemas de minigeração distribuída para clientes industriais e rurais conectados em média tensão, conforme NDU 015 da Energisa.",
    lista: [
      "Estudo de viabilidade técnica e análise da rede de MT",
      "Projeto elétrico de GD com integração à subestação existente",
      "Adequação do padrão de entrada quando necessário",
      "Proteção de interconexão conforme requisitos da ANEEL e Energisa",
      "Emissão de ART de projeto e instalação",
      "Submissão, acompanhamento e vistoria final da Energisa",
    ],
  },
  {
    titulo: "Homologação e troca de medidor",
    descricao:
      "Condução integral do processo de homologação junto à Energisa — do protocolo na APR Web até a troca do medidor e início da compensação de energia.",
    lista: [
      "Preparação e organização de toda a documentação técnica exigida",
      "Submissão do projeto via APR Web / Agência Virtual da Energisa",
      "Acompanhamento das etapas de análise e aprovação",
      "Gestão de solicitações de complementação ou correção",
      "Acompanhamento da vistoria da Energisa em campo",
      "Acompanhamento até a troca do medidor e início da compensação",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Estudo de viabilidade técnica",
    desc: "Análise do consumo, da rede elétrica local e das condições de instalação para dimensionamento correto do sistema.",
  },
  {
    num: "02",
    titulo: "Projeto elétrico completo",
    desc: "Elaboração do memorial descritivo, diagrama unifilar, folha de dados do inversor e demais documentos exigidos pela Energisa.",
  },
  {
    num: "03",
    titulo: "Emissão de ART e submissão",
    desc: "Emissão da ART de projeto e instalação no CREA e protocolo do processo via APR Web / Agência Virtual.",
  },
  {
    num: "04",
    titulo: "Análise e aprovação pela Energisa",
    desc: "Acompanhamento integral do processo de análise, resposta a complementações e gestão até a aprovação.",
  },
  {
    num: "05",
    titulo: "Homologação e troca do medidor",
    desc: "Acompanhamento da vistoria final da Energisa e do processo de troca do medidor para início da compensação de energia.",
  },
];

const cases = [
  {
    tag: "Microgeração residencial",
    titulo: "Sistema de Microgeração — Residencial",
    localizacao: "João Pessoa — PB",
    escopo: [
      "Estudo de viabilidade e dimensionamento do sistema fotovoltaico",
      "Projeto elétrico completo com diagrama unifilar e memorial",
      "ART de projeto e instalação emitida",
      "Homologação junto à Energisa e troca do medidor",
    ],
    fotos: {
      destaque: "/Images/paineis-solares2.jpg",
      s1: "/Images/paineis-solares3.jpg",
      s2: "/Images/foto-paineis-solares.jpg",
    },
  },
  {
    tag: "Microgeração comercial",
    titulo: "Sistema de Microgeração — Comércio",
    localizacao: null,
    escopo: [
      "Estudo de viabilidade com análise da demanda e consumo",
      "Projeto elétrico de sistema fotovoltaico em BT",
      "Submissão via APR Web conforme NDU 013",
      "Homologação completa e acompanhamento até a troca do medidor",
    ],
    fotos: {
      destaque: "/Images/foto-paineis-solares.jpg",
      s1: "/Images/paineis-solares4.jpg",
      s2: "/Images/paineis-solares3.jpg",
    },
  },
  {
    tag: "Minigeração industrial / rural",
    titulo: "Sistema de Minigeração — Industrial / Rural",
    localizacao: null,
    escopo: [
      "Estudo de viabilidade em MT com análise da subestação existente",
      "Projeto de integração do sistema fotovoltaico à rede de MT",
      "Submissão via APR Web conforme NDU 015",
      "Vistoria e homologação junto à Energisa",
    ],
    fotos: {
      destaque: "/Images/paineis-solares3.jpg",
      s1: "/Images/paineis-solares2.jpg",
      s2: "/Images/foto-paineis-solares.jpg",
    },
  },
];

export default function GeracaoDistribuidaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/paineis-solares4.jpg"
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
              GERAÇÃO DISTRIBUÍDA
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Geração Distribuída (GD)
            </h1>
            <p className="servico-hero__subtitle">
              Projeto, viabilidade e homologação de sistemas de microgeração e
              minigeração distribuída — com submissão e acompanhamento junto à
              Energisa até a troca do medidor.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Homologação garantida junto à Energisa
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi conduz todo o processo de projeto e homologação de
                sistemas de geração distribuída: do estudo de viabilidade
                técnica e análise da rede até a aprovação final e troca do
                medidor pela Energisa.
              </p>
              <p className="about-text">
                Elaboramos o projeto elétrico completo (memorial descritivo,
                diagrama unifilar, folha de dados do inversor), emitimos a ART
                de projeto e instalação, e acompanhamos a submissão via APR Web
                conforme NDU 013 (baixa tensão) e NDU 015 (média tensão).
              </p>
              <p className="about-text">
                Todos os sistemas são projetados com proteção anti-ilhamento e
                desligamento automático conforme os requisitos de segurança da
                Energisa e da ANEEL (REN 1.000/2021).
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
              Microgeração ou minigeração — projeto, ART e homologação sob a
              mesma responsabilidade técnica.
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
              Sistemas de geração distribuída projetados e homologados junto à
              Energisa na Paraíba.
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
            Além desses cases, contamos com sistemas de GD projetados e
            homologados em diferentes modalidades junto à Energisa Paraíba.
          </p>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Do estudo de viabilidade à homologação e troca do medidor.
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
              Precisa homologar um sistema de geração distribuída?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Gera%C3%A7%C3%A3o%20Distribu%C3%ADda."
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
