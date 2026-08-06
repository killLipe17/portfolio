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
        <p className="section-eyebrow">Processo de trabalho</p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step} className="bg-surface p-7">
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>

              <h3 className="mt-8 text-lg font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}