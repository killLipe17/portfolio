const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-28"
    >
      <div>
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
          Disponível para projetos freelancer
        </div>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Desenvolvedor Web
        </p>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
          Transformo ideias em{" "}
          <span className="text-muted">soluções digitais reais.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
          Sou Fellipe Leite, tecnólogo em Análise e Desenvolvimento de
          Sistemas. Crio sites modernos, responsivos e organizados para
          negócios, profissionais e projetos que precisam fortalecer sua
          presença digital.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projetos" className={primaryButton}>
            Ver meus projetos
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="https://wa.me/5511914442908"
            target="_blank"
            rel="noreferrer"
            className={secondaryButton}
          >
            Conversar pelo WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <a
            className="social-link"
            href="https://github.com/killLipe17"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <span>São Paulo/SP</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:mx-0">
        <div
          className="absolute -inset-12 -z-10 rounded-full bg-accent/[0.08] blur-3xl"
          aria-hidden="true"
        />

        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-border bg-surface-strong px-5 py-4">
            <div className="flex gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-muted/30" />
              <span className="size-2.5 rounded-full bg-muted/30" />
              <span className="size-2.5 rounded-full bg-accent" />
            </div>

            <span className="font-mono text-xs text-muted">
              fellipe-leite.dev
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Perfil profissional
              </span>

              <span className="rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 font-mono text-xs text-accent">
                Online
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm leading-7">
              <p>
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">desenvolvedor</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-code">&quot;Fellipe Leite&quot;</span>;
              </p>

              <p>
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">formacao</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-code">
                  &quot;Análise e Desenvolvimento de Sistemas&quot;
                </span>
                ;
              </p>

              <p>
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">objetivo</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-code">
                  &quot;Criar soluções úteis&quot;
                </span>
                ;
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-background/60 p-5">
                <strong className="block text-3xl tracking-tight">02</strong>

                <span className="mt-1 block text-sm text-muted">
                  Projetos publicados
                </span>
              </div>

              <div className="rounded-lg border border-border bg-background/60 p-5">
                <strong className="block text-3xl tracking-tight">15+</strong>

                <span className="mt-1 block text-sm text-muted">
                  Tecnologias e habilidades
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}