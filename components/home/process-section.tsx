const processSteps = [
  "Entendimento",
  "Planejamento",
  "Identidade visual",
  "Desenvolvimento",
  "Testes",
  "Publicação",
];

export function ProcessSection() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Processo LIPEXP</p>

            <h2 className="section-title">
              Da ideia ao site publicado.
            </h2>
          </div>

          <p className="section-description">
            Um processo organizado para entender a necessidade, desenvolver a
            solução e entregar o projeto pronto para uso.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="group bg-surface p-7 transition hover:bg-surface-strong"
            >
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>

              <h3 className="mt-8 text-lg font-semibold transition group-hover:text-accent">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}