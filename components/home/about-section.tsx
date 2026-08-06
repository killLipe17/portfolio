export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing border-t border-border">
      <div className="section-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-eyebrow">Sobre mim</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Aprendizado aplicado em projetos de verdade.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            Sou Fellipe Santos Leite, formado em Análise e Desenvolvimento de
            Sistemas pela Uninove. Sou apaixonado por tecnologia, games e
            desenvolvimento web.
          </p>

          <p>
            Gosto de transformar ideias em sites funcionais e bem organizados,
            principalmente quando minhas criações podem ser úteis para pessoas,
            empresas e projetos reais.
          </p>

          <p>
            Estou ampliando meus conhecimentos por meio da prática,
            desenvolvendo soluções completas e buscando oportunidades
            freelancer e profissionais na área de desenvolvimento web.
          </p>
        </div>
      </div>
    </section>
  );
}