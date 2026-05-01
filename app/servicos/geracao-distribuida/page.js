import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Geração Distribuída (GD) | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto, viabilidade e homologação de sistemas de microgeração e minigeração distribuída junto à Energisa. NDU 013 · NDU 015 · NBR 16690 · REN 1.000/2021.",
};

// TODO: expandir conteúdo desta página (estudo de viabilidade, fluxo de
// homologação APR Web, tipos de sistema, cases de GD homologados)

export default function GeracaoDistribuidaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            {/* TODO: substituir por foto real de sistema de GD homologado */}
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

        {/* ── Sobre o serviço ── */}
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

        {/* ── CTA final ── */}
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
