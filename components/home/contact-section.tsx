const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function ContactSection() {
  return (
    <section id="contato" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface px-6 py-14 sm:px-10 sm:py-16">
          <div
            className="absolute left-1/2 top-0 -z-0 h-60 w-96 -translate-x-1/2 rounded-full bg-accent/[0.09] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow">
                Vamos conversar?
              </p>

              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Um projeto para a LIPEXP ou uma oportunidade para o Fellipe?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                Escolha o caminho que faz mais sentido. Estou disponível para
                novos projetos freelance e oportunidades profissionais em
                desenvolvimento web.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-border bg-background/30 p-6 sm:p-7">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  Para negócios
                </span>

                <h3 className="mt-4 text-2xl font-semibold">
                  Quero contratar a LIPEXP
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  Tem uma ideia, precisa de um site novo ou quer melhorar um
                  projeto existente? Conte o que você precisa e podemos
                  conversar sobre a melhor solução.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
              </article>

              <article className="rounded-xl border border-border bg-background/30 p-6 sm:p-7">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  Para recrutadores
                </span>

                <h3 className="mt-4 text-2xl font-semibold">
                  Tenho uma oportunidade profissional
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  Estou aberto a oportunidades em desenvolvimento web e
                  tecnologia. Você pode conhecer meus projetos, acessar meu
                  currículo ou entrar em contato pelo LinkedIn.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButton}
                  >
                    Ver LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="/curriculo-fellipe-leite.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryButton}
                  >
                    Currículo
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </article>
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
                href="mailto:lipexpstudio@gmail.com"
                className="transition hover:text-accent"
              >
                lipexpstudio@gmail.com
              </a>

              <span>São Paulo / SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}