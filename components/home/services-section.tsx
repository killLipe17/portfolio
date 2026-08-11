const services = [
  {
    number: "01",
    title: "Sites institucionais",
    description:
      "Sites profissionais para empresas, marcas e negócios apresentarem seus serviços, diferenciais e canais de contato com uma presença digital moderna.",
  },
  {
    number: "02",
    title: "Sites para lojas",
    description:
      "Catálogos digitais e soluções para apresentar produtos, organizar informações e criar caminhos simples para pedidos e vendas.",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Páginas focadas em campanhas, produtos ou serviços, com estrutura objetiva e chamadas para ação que direcionam o visitante ao próximo passo.",
  },
  {
    number: "04",
    title: "Portfólios profissionais",
    description:
      "Sites personalizados para profissionais, criadores e marcas apresentarem projetos, experiências e trabalhos de forma clara e profissional.",
  },
  {
    number: "05",
    title: "Integrações e funcionalidades",
    description:
      "Integração com APIs, formulários, bancos de dados e recursos personalizados para transformar um site em uma solução mais completa.",
  },
  {
    number: "06",
    title: "Manutenção e evolução",
    description:
      "Correções, atualizações de conteúdo, melhorias visuais, novas funcionalidades e evolução de sites que já estão publicados.",
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
              Da ideia ao site publicado.
            </h2>
          </div>

          <p className="section-description">
            A LIPEXP desenvolve soluções digitais para negócios, profissionais
            e projetos que precisam criar ou evoluir sua presença na internet.
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