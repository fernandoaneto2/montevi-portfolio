import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about" role="region" aria-label="Sobre a Empresa">
      <div className="about-content">
        <h2 className="section-title">Somos a Monteví</h2>
        <p className="about-text">
          Empresa fundada em 2023 e sua parceira confiável em soluções de
          engenharia elétrica.
        </p>
        <p className="about-text">
          Possuímos soluções em infraestrutura para obras de engenharia elétrica e geração
          de energia para consumidores que desejam qualidade, exclusividade e ganho de
          performance. Através da nossa expertise em projetos e execuções de gerações
          solares, modelagens de negócios e gestão energética trazemos produtos pensados
          exatamente para atender a sua demanda. Nossa equipe altamente qualificada está comprometida em oferecer excelência
          técnica e inovação em cada geração. Utilizamos métodos e práticas para garantir
          resultados dentro do prazo e do orçamento.
        </p>
        <p className="about-text">Conte conosco para impulsionar o sucesso do seu investimento.</p>
        <div className="about-stats">
          <div className="stat">
            <h3>+300</h3>
            <p>Projetos Elétricos Aprovados</p>
          </div>
          <div className="stat">
            <h3>+25 MW</h3>
            <p>Projetos de Conexão</p>
          </div>
          <div className="stat">
            <h3>+15 Anos</h3>
            <p>No Mercado</p>
          </div>
        </div>
      </div>
      <div className="about-image" aria-hidden="true">
        <div className="about-placeholder" style={{ position: 'relative' }}>
          <Image
            src="/Images/foto-paineis-solares.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            sizes="600px"
          />
        </div>
      </div>
    </section>
  )
}
