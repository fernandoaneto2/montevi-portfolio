import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Geração Fotovoltaica | Montevi Engenharia — João Pessoa/PB",
  description:
    "Soluções completas em energia solar fotovoltaica: On Grid, Off Grid, Híbrido e Bomba Solar. Projeto, instalação e homologação junto à concessionária. NBR 16690 · REN 1.000/2021.",
};

const frentes = [
  {
    titulo: "Sistemas On Grid e On Grid com Micro Inversor",
    descricao:
      "Sistemas conectados à rede elétrica — com inversores string ou micro inversores — para compensação de energia e redução da conta de luz.",
    lista: [
      "Dimensionamento do sistema conforme consumo e área disponível",
      "Projeto elétrico com diagrama unifilar e memorial descritivo",
      "On Grid com inversor central (string) para grande geração",
      "On Grid com micro inversores — maior eficiência por módulo",
      "Homologação junto à concessionária e troca do medidor bidirecional",
      "ART de projeto e instalação emitida pelo CREA",
    ],
  },
  {
    titulo: "Sistemas Off Grid e Híbridos",
    descricao:
      "Soluções autônomas ou com backup de energia para locais sem acesso à rede elétrica ou que exigem continuidade de fornecimento.",
    lista: [
      "Off Grid — sistema isolado com banco de baterias",
      "Híbrido — sistema com rede e banco de baterias para backup",
      "Dimensionamento do banco de baterias conforme autonomia desejada",
      "Inversores híbridos com carregamento inteligente",
      "Projeto completo com ART e memorial descritivo",
      "Monitoramento remoto da geração e consumo",
    ],
  },
  {
    titulo: "Bomba Solar",
    descricao:
      "Sistemas de bombeamento de água movidos a energia solar — ideais para aplicações rurais, irrigação e abastecimento em locais sem rede elétrica.",
    lista: [
      "Dimensionamento do sistema de bombeamento solar",
      "Seleção de bomba e inversor solar adequados à demanda hídrica",
      "Projeto elétrico e hidráulico integrado",
      "Instalação e comissionamento do sistema completo",
      "Solução sem bateria — direto do sol para a bomba",
      "ART de projeto e instalação entregue ao cliente",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Estudo de viabilidade",
    desc: "Análise do consumo energético, da área disponível e da incidência solar para dimensionamento correto do sistema fotovoltaico.",
  },
  {
    num: "02",
    titulo: "Projeto elétrico completo",
    desc: "Elaboração do memorial descritivo, diagrama unifilar, folha de dados dos inversores e demais documentos exigidos pela concessionária.",
  },
  {
    num: "03",
    titulo: "Emissão de ART e submissão",
    desc: "Emissão da ART de projeto e instalação no CREA e protocolo do processo via APR Web / Agência Virtual da concessionária.",
  },
  {
    num: "04",
    titulo: "Instalação em campo",
    desc: "Montagem das estruturas, instalação dos módulos, inversores e cabeamento por equipe técnica certificada NR-10 e NR-35.",
  },
  {
    num: "05",
    titulo: "Homologação e entrega",
    desc: "Acompanhamento da vistoria da concessionária, troca do medidor bidirecional e entrega da documentação técnica completa.",
  },
];

const galeriaFotos = [2, 3, 4, 5, 6, 7, 8, 9];

export default function GeracaoFotovoltaicaPage() {
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
              ENERGIA SOLAR
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Geração Fotovoltaica
            </h1>
            <p className="servico-hero__subtitle">
              Soluções completas em energia solar — On Grid, Off Grid, Híbrido e
              Bomba Solar — do dimensionamento à instalação e homologação, com
              responsabilidade técnica (ART) em todas as etapas.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Energia solar para cada necessidade
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi projeta e instala sistemas fotovoltaicos completos
                para residências, comércios, indústrias e propriedades rurais.
                Do estudo de viabilidade ao comissionamento final, entregamos
                soluções On Grid, Off Grid, Híbridas e Bomba Solar com projeto
                elétrico e ART do CREA.
              </p>
              <p className="about-text">
                Nossos sistemas On Grid com micro inversores garantem maior
                eficiência por módulo e monitoramento individual — ideal para
                telhados com sombreamento parcial. Para quem precisa de
                autonomia energética, os sistemas híbridos oferecem backup com
                banco de baterias dimensionado conforme a demanda.
              </p>
              <p className="about-text">
                Conduzimos todo o processo de homologação junto à concessionária
                — do protocolo na APR Web até a troca do medidor bidirecional —
                sem burocracia para o cliente.
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
              On Grid, Off Grid, Híbrido ou Bomba Solar — solução completa com
              projeto, instalação e homologação sob a mesma responsabilidade
              técnica.
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

        {/* ── 4. Galeria de execução ── */}
        <section className="exec-gallery servico-section">
          <div className="exec-gallery__inner">
            <div className="exec-gallery__header">
              <p className="service-category">PORTFÓLIO</p>
              <h2 className="section-title">Execução em campo</h2>
              <p className="section-subtitle">
                Sistema fotovoltaico projetado e instalado pela Montevi — João
                Pessoa, PB.
              </p>
            </div>

            <div className="exec-gallery__banner">
              <Image
                src="/Images/geracao-fotovoltaica1.jpeg"
                alt="Instalação de sistema fotovoltaico — Montevi Engenharia"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div className="exec-gallery__grid">
              {galeriaFotos.map((n) => (
                <div className="exec-gallery__foto" key={n}>
                  <Image
                    src={`/Images/geracao-fotovoltaica${n}.jpeg`}
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}
            </div>

            <p className="exec-gallery__legenda">
              Além deste projeto, contamos com um histórico de sistemas
              fotovoltaicos instalados em diferentes modalidades para clientes
              residenciais, comerciais e rurais.
            </p>
          </div>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Do estudo de viabilidade à homologação e entrega do sistema
              gerando.
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
              Quer instalar energia solar fotovoltaica?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Gera%C3%A7%C3%A3o%20Fotovoltaica."
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
