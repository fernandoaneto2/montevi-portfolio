import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="about"
      role="region"
      aria-label="Sobre a Empresa"
    >
      <div className="about-content">
        <h2 className="section-title">Somos a Monteví</h2>
        <p className="about-text">
          Fundada em 2023, a Montevi nasce como a consolidação de mais de 15
          anos de atuação de seus sócios e corpo técnico no setor elétrico.
          Somos a sua parceira confiável em soluções de infraestrutura e geração
          de energia, unindo o vigor de uma estrutura moderna à experiência de
          quem domina o mercado há mais de uma década.
        </p>
        <p className="about-text">
          Especialistas em projetos solares, modelagem de negócios e gestão
          energética, entregamos produtos pensados para demandas que exigem
          exclusividade e alta performance. Nossa equipe qualificada garante
          excelência técnica e inovação, utilizando métodos rigorosos para
          assegurar resultados dentro do prazo e do orçamento. Conte com nossa
          trajetória para impulsionar o sucesso do seu investimento.
        </p>

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
        <div className="about-placeholder" style={{ position: "relative" }}>
          <Image
            src="/Images/foto-paineis-solares.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="600px"
          />
        </div>
      </div>
    </section>
  );
}
