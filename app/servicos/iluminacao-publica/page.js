import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Iluminação Pública | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto e execução de redes completas de iluminação pública, da modelagem fotométrica à energização junto à Energisa. NBR 5101 · NR-10 · NR-35.",
};

// TODO: expandir conteúdo desta página (frentes, diferenciais, cases, timeline)

export default function IluminacaoPublicaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            <Image
              src="/Images/projeto-sistema-de-iluminacao.png"
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

        {/* ── Sobre o serviço ── */}
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
                manutenção dos municípios e concessionárias.
              </p>
              <p className="about-text">
                Toda execução é realizada com equipe certificada NR-10 e NR-35,
                sinalização viária e isolamento de área conforme normas de
                segurança no trabalho e de tráfego.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
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
