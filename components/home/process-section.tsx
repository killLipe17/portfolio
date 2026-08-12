const processSteps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conversamos sobre o negócio, público, objetivos e necessidades para definir o que o projeto precisa resolver.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Organizo estrutura, páginas, conteúdos, funcionalidades e prioridades antes de iniciar o desenvolvimento.",
  },
  {
    number: "03",
    title: "Identidade & interface",
    description:
      "Defino a direção visual e construo uma experiência alinhada à identidade e ao objetivo do projeto.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Transformo o planejamento em um site funcional, responsivo e preparado para as integrações necessárias.",
  },
  {
    number: "05",
    title: "Testes & ajustes",
    description:
      "Reviso diferentes telas, funcionalidades, conteúdos e detalhes antes da entrega final.",
  },
  {
    number: "06",
    title: "Publicação",
    description:
      "Faço o deploy do projeto e deixo o site disponível para uso, divulgação e evolução.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Processo LIPEXP</p>

            <h2 className="section-title">
              Um processo claro, do briefing ao lançamento.
            </h2>
          </div>

          <p className="section-description">
            Cada projeto passa por etapas definidas para reduzir improvisos,
            alinhar expectativas e transformar a ideia em uma solução pronta
            para uso.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group bg-surface p-7 transition hover:bg-surface-strong"
            >
              <span className="font-mono text-xs text-accent">
                {step.number}
              </span>

              <h3 className="mt-8 text-lg font-semibold transition group-hover:text-accent">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}