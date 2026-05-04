import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projetos de Engenharia | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projetos elétricos e complementares desenvolvidos em BIM com levantamento automático de materiais. ART, memoriais, compatibilização e As Built. NBR 5410 · NBR 14039 · NBR 5419.",
};

const frentes = [
  {
    titulo: "Projetos elétricos em BIM",
    descricao:
      "Elaboração de projetos elétricos completos em plataforma BIM — modelagem federada, levantamento automático de materiais e compatibilização multidisciplinar.",
    lista: [
      "Instalações elétricas em baixa tensão (NBR 5410)",
      "Instalações em média tensão e subestações (NBR 14039)",
      "Sistemas de proteção contra descargas atmosféricas — SPDA (NBR 5419)",
      "Medição agrupada e padrão de entrada conforme concessionária",
      "Cabeamento estruturado e infraestrutura de dados",
      "Emissão de ART do CREA em todas as etapas",
    ],
  },
  {
    titulo: "Projetos complementares",
    descricao:
      "Desenvolvimento de projetos complementares integrados ao modelo BIM — garantindo compatibilização automática e eliminação de interferências entre disciplinas.",
    lista: [
      "Proteção contra incêndio (PCI) — sprinklers, hidrantes e detectores",
      "Instalações hidrossanitárias — água fria, quente e esgoto",
      "Gás natural e GLP — projeto e especificação",
      "Climatização — AVAC e splits",
      "Drenagem pluvial e esgotamento sanitário",
      "Compatibilização BIM entre todas as disciplinas",
    ],
  },
  {
    titulo: "Documentação técnica e entrega",
    descricao:
      "Entrega completa da documentação técnica — do projeto aprovado ao As Built — garantindo rastreabilidade e conformidade normativa em todas as fases da obra.",
    lista: [
      "ART (CREA) de projeto e de execução",
      "Memoriais descritivos e especificações técnicas",
      "Diagramas unifilares e plantas baixas de instalação",
      "Listas de materiais geradas automaticamente pelo modelo BIM",
      "Compatibilização e detecção de conflitos entre disciplinas",
      "As Built atualizado conforme obra executada",
    ],
  },
];

const timeline = [
  {
    num: "01",
    titulo: "Briefing e levantamento",
    desc: "Alinhamento do escopo com o cliente, análise da documentação existente e levantamento das necessidades do projeto.",
  },
  {
    num: "02",
    titulo: "Modelagem BIM",
    desc: "Desenvolvimento do modelo BIM federado com todas as disciplinas integradas e levantamento automático de materiais.",
  },
  {
    num: "03",
    titulo: "Compatibilização",
    desc: "Detecção e resolução de conflitos entre as disciplinas do projeto — elétrica, hidráulica, PCI, climatização e estrutura.",
  },
  {
    num: "04",
    titulo: "Emissão de ART",
    desc: "Emissão da Anotação de Responsabilidade Técnica (ART) do CREA pelo engenheiro responsável em cada disciplina.",
  },
  {
    num: "05",
    titulo: "Entrega e As Built",
    desc: "Entrega do projeto aprovado, memoriais, listas de materiais e atualização do As Built após a execução da obra.",
  },
];

const galeriaFotos = [
  {
    src: "/Images/projeto-agrupamento.png",
    alt: "Projeto de agrupamento de rede elétrica — Montevi Engenharia",
  },
  { src: "/Images/projeto-agrupamento2.png", alt: "" },
  { src: "/Images/projeto-eletrico-vias-do-atlantico.png", alt: "" },
  { src: "/Images/projeto-luna.png", alt: "" },
  { src: "/Images/projeto-spda.png", alt: "" },
  { src: "/Images/projetos-complementares2.jpg", alt: "" },
];

export default function ProjetosDeEngenhariaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── 1. Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/engenharia-civil.jpg"
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
              ESCRITÓRIO TÉCNICO BIM
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Projetos de Engenharia
            </h1>
            <p className="servico-hero__subtitle">
              Projetos elétricos e complementares desenvolvidos em BIM — com
              levantamento automático de materiais, compatibilização
              multidisciplinar e entrega completa da documentação técnica.
            </p>
          </div>
        </section>

        {/* ── 2. Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">BIM do projeto ao As Built</h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi desenvolve projetos elétricos e complementares em
                plataforma BIM — garantindo fidelidade ao projeto, eficiência
                construtiva e economia no levantamento de materiais. Todos os
                projetos são modelados de forma federada, com compatibilização
                automática entre as disciplinas.
              </p>
              <p className="about-text">
                Nosso escopo inclui instalações elétricas (BT/MT), medição
                agrupada, cabeamento, SPDA, PCI, hidrossanitário, gás,
                climatização e drenagem — cada um com ART do CREA, memorial
                descritivo e lista de materiais gerada diretamente pelo modelo.
              </p>
              <p className="about-text">
                Do briefing ao As Built, garantimos rastreabilidade técnica
                completa e conformidade normativa em todas as etapas — com
                responsabilidade técnica (ART/CREA) assegurada do início ao fim.
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
              Elétrico, complementares e documentação — tudo integrado em BIM
              com ART e compatibilização multidisciplinar.
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

        {/* ── 4. Galeria de projetos ── */}
        <section className="exec-gallery servico-section">
          <div className="exec-gallery__inner">
            <div className="exec-gallery__header">
              <p className="service-category">PORTFÓLIO</p>
              <h2 className="section-title">Projetos entregues</h2>
              <p className="section-subtitle">
                Uma amostra dos projetos elétricos e complementares
                desenvolvidos pela Montevi em plataforma BIM.
              </p>
            </div>

            <div className="exec-gallery__grid exec-gallery__grid--3col">
              {galeriaFotos.map((foto) => (
                <div className="exec-gallery__foto" key={foto.src}>
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}
            </div>

            <p className="exec-gallery__legenda">
              Além desses projetos, contamos com um histórico de projetos
              elétricos e complementares desenvolvidos em BIM para
              empreendimentos residenciais, comerciais e industriais.
            </p>
          </div>
        </section>

        {/* ── 5. Como funciona o atendimento ── */}
        <section className="atendimento servico-section">
          <div className="atendimento__inner">
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Do briefing técnico à entrega da documentação aprovada e As Built.
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
              Precisa de um projeto de engenharia em BIM?
            </h2>
            <p className="cta-final__sub">
              Fale com a equipe da Montevi e receba um orçamento técnico
              personalizado.
            </p>
            <div className="cta-final__btns">
              <a
                href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Projetos%20de%20Engenharia."
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
