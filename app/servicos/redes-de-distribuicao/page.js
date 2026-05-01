import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Redes de Distribuição | Montevi Engenharia — João Pessoa/PB",
  description:
    "Projeto e execução de redes de distribuição aérea e subterrânea em média e baixa tensão, com domínio total dos procedimentos da Energisa. NBR 5410 · NR-10 · NDU 001.",
};

// TODO: expandir conteúdo desta página (frentes, diferenciais, cases, timeline)

export default function RedesDeDistribuicaoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="servico-page">
        {/* ── Hero ── */}
        <section className="servico-hero">
          <div className="servico-hero__bg">
            {/* TODO: substituir por foto real de rede de distribuição aérea */}
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
              ENGENHARIA ELÉTRICA
            </p>
            <h1
              className="section-title"
              style={{ color: "var(--white)", marginBottom: "1rem" }}
            >
              Redes de Distribuição
            </h1>
            <p className="servico-hero__subtitle">
              Projeto e execução de redes de distribuição aérea e subterrânea
              em média e baixa tensão, com domínio total dos procedimentos e
              ferramentas da Energisa.
            </p>
          </div>
        </section>

        {/* ── Sobre o serviço ── */}
        <section className="servico-sobre servico-section">
          <div className="servico-sobre__inner">
            <h2 className="section-title">
              Domínio completo da rede Energisa
            </h2>
            <div className="servico-sobre__textos">
              <p className="about-text">
                A Montevi projeta e executa redes de distribuição aérea (RDA) e
                subterrânea (RDS) em média e baixa tensão, atendendo plenamente
                às normas de distribuição da Energisa e às normas ABNT
                aplicáveis.
              </p>
              <p className="about-text">
                Nossa equipe tem vivência direta nos processos de submissão,
                aprovação e energização junto à concessionária, com domínio das
                ferramentas APR Web e Agência Virtual — o que reduz prazos e
                elimina retrabalho.
              </p>
              <p className="about-text">
                Atendemos extensões de rede para novas cargas, reforços de
                circuito, adequações de padrão de entrada e medição, e projetos
                completos de RDA e RDS com emissão de ART e responsabilidade
                técnica em todas as etapas.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="cta-final">
          <div className="cta-final__inner">
            <h2 className="cta-final__titulo">
              Precisa de projeto ou execução de rede elétrica?
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
