import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projetos e Análises | Montevi Engenharia — João Pessoa/PB",
  description:
    "Hub completo de projetos elétricos: prediais, industriais e de redes. Análise e revisão de projetos de terceiros. Submissão via APR Web. ART em todas as etapas.",
};

// TODO: expandir conteúdo desta página — hub com subtipos de projeto:
// predial, industrial, redes de distribuição, GD, iluminação pública,
// revisão/análise de terceiros, adequação e conformidade normativa.

export default function ProjetosEAnalisesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            {/* TODO: substituir por foto do escritório ou diagrama unifilar real */}
            <Image
              src="/Images/projeto-eletrico.png"
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

        {/* ── Sobre o serviço ── */}
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

        {/* ── CTA final ── */}
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
