import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Carregadores Elétricos (EV) | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projetos e especificações para infraestrutura de carregamento de veículos elétricos. Carregadores AC e DC para uso residencial, comercial e industrial. NBR 5410 · IEC 61851.",
};

const frentes = [
  {
    titulo: "Infraestrutura elétrica para EV",
    descricao:
      "Dimensionamento e projeto da infraestrutura elétrica necessária para suportar a instalação de carregadores de veículos elétricos — com previsão de expansão futura da frota.",
    lista: [
      "Análise da capacidade elétrica instalada e adequações necessárias",
      "Dimensionamento de circuitos dedicados para carregadores",
      "Projeto de quadros de distribuição e proteções",
      "Cabeamento, eletrodutos e eletrocalhas para infraestrutura EV",
      "Previsão de expansão para aumento de carregadores no futuro",
      "Emissão de ART do CREA e memorial descritivo completo",
    ],
  },
  {
    titulo: "Carregadores AC e DC",
    descricao:
      "Especificação e instalação de carregadores de veículos elétricos em corrente alternada (AC) e corrente contínua (DC) para aplicações residenciais, comerciais e industriais.",
    lista: [
      "Carregadores residenciais AC (Modo 2 e Modo 3 — Wallbox)",
      "Carregadores comerciais AC para condomínios e estacionamentos",
      "Carregadores DC de alta potência (Fast Charge) para frotas industriais",
      "Especificação e fornecimento dos equipamentos",
      "Instalação conforme IEC 61851 e normas da concessionária",
      "Comissionamento e testes de funcionamento",
    ],
  },
  {
    titulo: "Proteções e segurança elétrica",
    descricao:
      "Projeto dos sistemas de proteção da infraestrutura de carregamento — garantindo segurança elétrica, conformidade normativa e proteção dos equipamentos.",
    lista: [
      "Disjuntores e dispositivos de proteção diferencial (DR)",
      "Dispositivos de proteção contra surtos (DPS)",
      "Aterramento conforme NBR 5410 e IEC 61851",
      "Proteção contra sobrecorrente e curto-circuito",
      "Sinalização de segurança e identificação dos circuitos",
      "Documentação técnica completa com ART de instalação",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Análise da infraestrutura existente",
    desc: "Visita técnica para análise da capacidade elétrica instalada, carga disponível e necessidades de adequação para os carregadores.",
  },
  {
    num: "02",
    titulo: "Projeto elétrico e especificação",
    desc: "Elaboração do projeto elétrico completo — dimensionamento, especificação dos carregadores (AC ou DC) e das proteções necessárias.",
  },
  {
    num: "03",
    titulo: "Emissão de ART",
    desc: "Emissão da Anotação de Responsabilidade Técnica (ART) do CREA com responsabilidade técnica do engenheiro responsável.",
  },
  {
    num: "04",
    titulo: "Instalação em campo",
    desc: "Execução da infraestrutura elétrica e instalação dos carregadores por equipe técnica certificada NR-10.",
  },
  {
    num: "05",
    titulo: "Comissionamento e entrega",
    desc: "Testes de funcionamento, comissionamento dos carregadores e entrega da documentação técnica completa ao cliente.",
  },
];

export default function CarregadoresEletricosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/foto-carregadore-eletricos.png"
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
              MOBILIDADE ELÉTRICA
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Carregadores Elétricos (EV)
            </h1>
            <p className="servico-hero__subtitle">
              Projeto e instalação de infraestrutura de carregamento para
              veículos elétricos — carregadores AC e DC para uso residencial,
              comercial e industrial, com proteções e expansão futura previstas.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Infraestrutura preparada para a mobilidade elétrica
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi projeta e instala infraestruturas elétricas completas
                para carregamento de veículos elétricos — do dimensionamento da
                capacidade instalada à especificação e instalação dos
                carregadores AC e DC, com documentação técnica e ART do CREA.
              </p>
              <p className="about-text">
                Atendemos residências, condomínios, estacionamentos comerciais e
                frotas industriais com soluções sob medida: Wallbox residencial,
                carregadores AC para múltiplos pontos e Fast Charge DC de alta
                potência — todos com proteção contra surtos (DPS) e aterramento
                conforme normas técnicas.
              </p>
              <p className="about-text">
                Cada projeto prevê capacidade de expansão futura, garantindo que
                a infraestrutura instalada acompanhe o crescimento da frota
                elétrica sem necessidade de grandes adequações posteriores.
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
              Do dimensionamento elétrico à instalação dos carregadores — AC ou
              DC, com segurança e conformidade normativa em todas as etapas.
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

        {/* ── 4. Portfólio ── */}
        <section className="exec-gallery servico-section">
          <div className="exec-gallery__inner">
            <div className="exec-gallery__header">
              <p className="service-category">PORTFÓLIO</p>
              <h2 className="section-title">Infraestrutura instalada</h2>
              <p className="section-subtitle">
                Infraestrutura de carregamento para veículos elétricos projetada
                e instalada pela Montevi.
              </p>
            </div>

            <div className="exec-gallery__banner">
              <Image
                src="/Images/foto-carregadore-eletricos.png"
                alt="Carregadores de veículos elétricos — Montevi Engenharia"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <p className="exec-gallery__legenda">
              Em breve compartilharemos mais registros fotográficos dos nossos
              projetos de infraestrutura EV executados. Entre em contato para
              conhecer nosso portfólio completo.
            </p>
          </div>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Da análise da infraestrutura existente à entrega funcionando.
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
              Precisa de infraestrutura para carregadores elétricos?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Carregadores%20El%C3%A9tricos."
                className="cta-button-contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

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
