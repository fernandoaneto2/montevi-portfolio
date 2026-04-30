import Image from 'next/image'
import Link from 'next/link'
import GeracaoDistribuicaoCarousel from '@/components/GeracaoDistribuicaoCarousel'

export const metadata = {
  title: 'Geração e Distribuição | Monteví Engenharia',
  description:
    'Manutenção de subestação abrigada 600 kVA — emergencial, preventiva e corretiva. Parametrização de relê, QGBT, QTA e gerador. Responsabilidade técnica integral com ART.',
}

const topicos = [
  {
    title: 'Parametrização de relê',
    text: 'Relê fora das curvas da concessionária é motivo de desligamento forçado e multa. Calibramos o relê de acordo com os parâmetros exigidos pela distribuidora, eliminando o risco de corte por não conformidade e garantindo que a proteção atue exatamente quando deve.',
  },
  {
    title: 'Troca do sistema de proteção',
    text: 'Fusíveis, relés e disjuntores perdem eficácia de forma silenciosa — sem alarme, sem aviso. Substituímos todo o sistema de proteção com componentes certificados, garantindo que a subestação reaja corretamente a qualquer condição de sobrecarga ou curto-circuito.',
  },
  {
    title: 'Manutenção de QGBT e QTA',
    text: 'Conexões oxidadas, barramentos sobrecarregados e disjuntores com contato desgastado são pontos cegos que acumulam risco. Inspecionamos, limpamos e regularizamos cada componente com medição de temperatura e registro fotográfico completo.',
  },
  {
    title: 'Manutenção do grupo gerador',
    text: 'Um gerador que nunca passou por teste de carga falha exatamente quando a rede principal cai. Realizamos a manutenção completa — revisão mecânica, elétrica e do sistema de transferência automática (ATS) — com laudo comprovando a capacidade real de operação.',
  },
  {
    title: 'Atendimento emergencial',
    text: 'Quando a subestação falha, cada hora de parada tem custo direto na operação. Atendemos com equipe técnica própria, diagnóstico no local e execução imediata — sem terceirização, sem demora para acionar o responsável certo.',
  },
  {
    title: 'Documentação técnica e ART',
    text: 'Laudos, relatórios e ARTs emitidas no CREA são exigidos por seguradoras, auditorias e pela própria concessionária. Entregamos documentação completa em cada intervenção — não apenas o serviço executado, mas a prova formal do que foi feito.',
  },
]

export default function GeracaoEDistribuicaoPage() {
  return (
    <main className="servico-page">

      {/* ── Hero com banner ── */}
      <section className="servico-hero">
        <div className="servico-hero__bg">
          <Image
            src="/Images/subestacao-predial.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="servico-hero__overlay" />
        <div className="servico-hero__inner">
          <p className="service-category" style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>
            ESPECIALIDADE
          </p>
          <h1 className="section-title" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Geração e Distribuição
          </h1>
          <p className="servico-hero__subtitle">
            Subestações abrigadas exigem manutenção técnica documentada — não improvisação.
            Parametrizamos, protegemos e mantemos a continuidade da sua operação.
          </p>
        </div>
      </section>

      {/* ── Tópicos do serviço ── */}
      <section className="servico-topicos">
        <div className="servico-topicos__header">
          <h2 className="section-title">O que executamos na sua instalação</h2>
          <p className="section-subtitle">
            Cada intervenção é conduzida por engenheiro habilitado, com ART emitida
            e relatório técnico entregue ao final do serviço.
          </p>
        </div>

        <div className="servico-topicos__grid">
          {topicos.map((t) => (
            <div className="servico-topico" key={t.title}>
              <h3 className="servico-topico__title">{t.title}</h3>
              <p className="servico-topico__text">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfólio ── */}
      <section className="portfolio servico-section" style={{ background: 'var(--accent-lighter)' }}>
        <h2 className="section-title">Projetos Realizados</h2>
        <p className="section-subtitle">Execuções em geração e distribuição — clique nas setas para navegar</p>
        {/* TODO: substituir placeholders pelas fotos e dados reais dos projetos */}
        <GeracaoDistribuicaoCarousel />
      </section>

      {/* ── CTA ── */}
      <section className="servico-section" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <h2 className="section-title">Sua subestação tem plano de manutenção?</h2>
        <p className="about-text" style={{ marginBottom: '2rem' }}>
          Se não tem, o custo de começar agora é menor do que o de qualquer parada
          não programada. Solicite uma visita técnica e receba um diagnóstico
          objetivo da sua instalação — sem compromisso.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://wa.me/5511922763114?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Gera%C3%A7%C3%A3o%20e%20Distribui%C3%A7%C3%A3o."
            className="cta-button-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar pelo WhatsApp
          </a>
          <Link href="/#contact" className="cta-button">
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* ── Voltar ── */}
      <div style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
        <Link href="/#services" className="action-button" style={{ display: 'inline-block' }}>
          ← Voltar aos Serviços
        </Link>
      </div>

    </main>
  )
}
