const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function ContactSection() {
  return (
    <section id="contato" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="absolute left-1/2 top-0 -z-0 h-60 w-96 -translate-x-1/2 rounded-full bg-accent/[0.09] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="section-eyebrow">
              Pronto para o próximo level?
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Vamos transformar sua ideia em uma presença digital profissional.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Conte o que você precisa. A LIPEXP Studio desenvolve landing
              pages, sites institucionais, portfólios e melhorias em projetos
              existentes de acordo com o objetivo de cada negócio.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/5511914442908"
                target="_blank"
                rel="noreferrer"
                className={primaryButton}
              >
                Solicitar orçamento
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="mailto:lipexpstudio@gmail.com"
                className={secondaryButton}
              >
                Enviar e-mail
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted">
              <a
                href="https://www.instagram.com/lipexpstudio/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}