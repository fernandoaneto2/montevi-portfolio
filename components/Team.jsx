"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Team() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const members = document.querySelectorAll(".team-member");
    members.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      className="team"
      role="region"
      aria-label="Corpo Técnico"
    >
      <h2 className="section-title">Corpo Técnico</h2>
      <p className="section-subtitle">
        Profissionais qualificados e experientes
      </p>

      <div className="team-container">
        <div className="team-member">
          <div
            className="member-avatar"
            aria-hidden="true"
            style={{ position: "relative" }}
          >
            <Image
              src="/Images/foto-alves.png"
              alt="Foto Perfil"
              fill
              style={{ objectFit: "cover" }}
              sizes="120px"
            />
          </div>
          <h3>Vitanael Alves de Aquino</h3>
          <p className="member-role">Engenheiro Eletricista</p>
          <p className="member-crea">CREA: 162020730-3 PB</p>
          <p className="member-description">
            +10 anos no setor de infraestrutura, +200 projetos elétricos e +25
            MW em projetos de conexão.
          </p>
        </div>

        <div className="team-member">
          <div
            className="member-avatar"
            aria-hidden="true"
            style={{ position: "relative" }}
          >
            <Image
              src="/Images/foto-torreao.png"
              alt="Foto Perfil"
              fill
              style={{ objectFit: "cover" }}
              sizes="120px"
            />
          </div>
          <h3>Vitor Torreão Alves De Souza</h3>
          <p className="member-role">Comercial técnico</p>
          <p className="member-crea"></p>
          <p className="member-description">
            +5 anos de experiência em Engenharia Elétrica, estudo técnico,
            gestão de projetos e fiscalização/execução de obras públicas e
            privadas.
          </p>
        </div>

        <div className="team-member">
          <div
            className="member-avatar member-avatar--placeholder"
            aria-hidden="true"
            style={{ position: "relative" }}
          ></div>
          <h3>Francisco Alves de Souza Neto</h3>
          <p className="member-role">Diretor Comercial</p>
          <p className="member-crea"></p>
          <p className="member-description">
            Responsável pelo desenvolvimento comercial e relacionamento
            estratégico com clientes e parceiros da Montevi Engenharia.
          </p>
        </div>
      </div>
    </section>
  );
}
