const services = [
  {
    number: "01",
    title: "Landing Pages",
    description:
      "Páginas estratégicas para apresentar produtos, serviços, campanhas e transformar visitantes em oportunidades.",
  },
  {
    number: "02",
    title: "Sites institucionais",
    description:
      "Sites profissionais para apresentar empresas, serviços, projetos e fortalecer sua presença digital.",
  },
  {
    number: "03",
    title: "Sites para lojas",
    description:
      "Catálogos digitais e experiências de compra desenvolvidas de acordo com as necessidades do negócio.",
  },
  {
    number: "04",
    title: "Portfólios profissionais",
    description:
      "Sites personalizados para profissionais, criadores e marcas apresentarem seus trabalhos de forma organizada.",
  },
  {
    number: "05",
    title: "Manutenção e ajustes",
    description:
      "Atualizações de conteúdo, melhorias visuais, correções e evolução de projetos já publicados.",
  },
  {
    number: "06",
    title: "Design responsivo",
    description:
      "Interfaces planejadas para funcionar bem em computadores, tablets e dispositivos móveis.",
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
              O que podemos criar para você.
            </h2>
          </div>

          <p className="section-description">
            Soluções digitais desenvolvidas de acordo com o objetivo de cada
            negócio, profissional ou projeto.
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

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-7 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}