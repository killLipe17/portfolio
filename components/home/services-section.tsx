const services = [
  {
    number: "01",
    title: "Sites institucionais",
    description:
      "Sites profissionais para apresentar empresas, serviços, projetos e organizações.",
  },
  {
    number: "02",
    title: "Sites para lojas",
    description:
      "Catálogos digitais e experiências de compra adaptadas às necessidades do negócio.",
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Páginas objetivas para divulgar produtos, serviços, campanhas e oportunidades.",
  },
  {
    number: "04",
    title: "Portfólios",
    description:
      "Apresentações digitais personalizadas para profissionais e criadores.",
  },
  {
    number: "05",
    title: "Manutenção de sites",
    description:
      "Ajustes visuais, atualizações de conteúdo e melhorias em projetos existentes.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Serviços</p>

            <h2 className="section-title">
              Como posso contribuir com seu projeto.
            </h2>
          </div>

          <p className="section-description">
            Desenvolvimento cuidadoso, comunicação clara e soluções compatíveis
            com a necessidade de cada projeto.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-4 py-7 transition hover:bg-white/[0.015] sm:grid-cols-[80px_0.7fr_1fr] sm:items-center sm:px-4"
            >
              <span className="font-mono text-sm text-accent">
                {service.number}
              </span>

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}