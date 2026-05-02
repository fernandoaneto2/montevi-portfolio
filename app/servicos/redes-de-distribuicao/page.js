import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Redes de Distribuição | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto e execução de redes de distribuição aérea e subterrânea em média e baixa tensão, com domínio total dos procedimentos da Energisa. NBR 5410 · NR-10 · NDU 001.",
};

const frentes = [
  {
    titulo: "Redes aéreas de distribuição",
    descricao:
      "Projeto e execução de redes aéreas de média e baixa tensão — do dimensionamento ao comissionamento, com aprovação junto à Energisa.",
    lista: [
      "Projeto de redes MT e BT para loteamentos e áreas industriais",
      "Posteamento, cabeamento e instalação de transformadores",
      "Instalação de dispositivos de proteção (religadores, fusíveis, chaves)",
      "Extensão e adequação de redes existentes",
      "Aterramento conforme NBR 5419",
      "Comissionamento e energização junto à Energisa",
    ],
  },
  {
    titulo: "Redes subterrâneas",
    descricao:
      "Projeto e instalação de redes subterrâneas de baixa e média tensão para empreendimentos comerciais, condomínios e áreas industriais.",
    lista: [
      "Projeto com dimensionamento de cabos, dutos e câmaras",
      "Instalação de cabos, eletrocalhas e câmaras de passagem",
      "Sistemas de aterramento para redes subterrâneas",
      "Integração com subestações e QGBT",
      "Aprovação junto à Energisa e prefeitura quando aplicável",
      "Documentação técnica completa com ART",
    ],
  },
  {
    titulo: "Aprovação e acompanhamento junto à Energisa",
    descricao:
      "Submissão e gestão de projetos de rede no portal da Energisa — do protocolo ao aceite final, sem burocracia para o cliente.",
    lista: [
      "Elaboração e submissão de projetos via APR Web",
      "Acompanhamento do fluxo de análise e aprovação da concessionária",
      "Adequação de projetos conforme exigências técnicas da Energisa",
      "Gestão de vistorias e inspeções em campo",
      "Emissão de ART de projeto e execução",
      "Acervo técnico completo entregue ao cliente",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Levantamento técnico",
    desc: "Visita ao local, levantamento topográfico e análise das condições da rede existente.",
  },
  {
    num: "02",
    titulo: "Projeto de rede",
    desc: "Elaboração do projeto elétrico completo com memorial descritivo, diagrama unifilar e lista de materiais.",
  },
  {
    num: "03",
    titulo: "Submissão à Energisa",
    desc: "Protocolo do projeto via APR Web e acompanhamento da análise pela concessionária.",
  },
  {
    num: "04",
    titulo: "Execução em campo",
    desc: "Implantação da rede com equipe técnica, seguindo NR-10, NR-35 e os procedimentos da Energisa.",
  },
  {
    num: "05",
    titulo: "Comissionamento e energização",
    desc: "Testes, energização acompanhada pela Energisa e entrega da documentação técnica completa.",
  },
];

const cases = [
  {
    tag: "Rede aérea — loteamento",
    titulo: "Projeto de Agrupamento de Rede",
    localizacao: "João Pessoa — PB",
    escopo: [
      "Projeto completo de rede aérea de distribuição BT",
      "Dimensionamento de transformadores e ramais",
      "Posteamento e cabeamento conforme NDU Energisa",
      "Aprovação e comissionamento junto à concessionária",
    ],
    fotos: {
      destaque: "/Images/subestacao-aerea1.jpeg",
      s1: "/Images/engenharia-civil.jpg",
      s2: "/Images/subestacao-abrigada.jpeg",
    },
  },
  {
    tag: "Projeto de rede MT",
    titulo: "Extensão de Rede — Área Industrial",
    localizacao: null,
    escopo: [
      "Projeto de extensão de rede de média tensão",
      "Instalação de poste, cruzeta e transformador",
      "Proteção por fusíveis e religador",
      "Aterramento conforme NBR 5419 e comissionamento",
    ],
    fotos: {
      destaque: "/Images/subestacao-abrigada2.jpeg",
      s1: "/Images/subestacao-abrigada3.jpeg",
      s2: "/Images/subestacao-aerea1.jpeg",
    },
  },
  {
    tag: "Rede subterrânea",
    titulo: "Rede Subterrânea — Empreendimento Comercial",
    localizacao: null,
    escopo: [
      "Projeto de rede subterrânea de baixa tensão",
      "Instalação de cabos, dutos e câmaras de passagem",
      "Integração com QGBT e subestação",
      "Documentação técnica completa com ART",
    ],
    fotos: {
      destaque: "/Images/engenharia-civil.jpg",
      s1: "/Images/subestacao-abrigada.jpeg",
      s2: "/Images/engenharia-civil2.jpg",
    },
  },
];

export default function RedesDeDistribuicaoPage() {
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
              REDES ELÉTRICAS
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Redes de Distribuição
            </h1>
            <p className="servico-hero__subtitle">
              Projeto, execução e aprovação de redes aéreas e subterrâneas de
              distribuição de energia — com domínio total dos processos da
              Energisa e responsabilidade técnica (ART) em todas as etapas.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Do projeto à energização, sem burocracia para o cliente
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi projeta e executa redes de distribuição aéreas e
                subterrâneas de média e baixa tensão, com aprovação integral
                junto à Energisa. Conhecemos os fluxos da concessionária por
                dentro — o que reduz prazos e elimina retrabalho.
              </p>
              <p className="about-text">
                Cada projeto é elaborado com memorial descritivo, diagrama
                unifilar e lista de materiais, submetido via APR Web e
                acompanhado até o aceite final. Emitimos ART de projeto e de
                execução em todas as etapas.
              </p>
              <p className="about-text">
                Atendemos loteamentos, empreendimentos comerciais, indústrias e
                o setor público em João Pessoa, Paraíba e demais estados do
                Nordeste, com padrão de execução alinhado às normas ABNT e às
                NDU da Energisa.
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
              Da rede aérea à subterrânea — projeto, execução e aprovação sob a
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
              Projetos representativos da nossa atuação em redes de distribuição
              aéreas e subterrâneas.
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
            Além desses cases, contamos com um histórico de projetos de rede
            elaborados, aprovados e executados junto à Energisa na Paraíba.
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
              Precisa de um projeto ou execução de rede elétrica?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Redes%20de%20Distribui%C3%A7%C3%A3o."
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
