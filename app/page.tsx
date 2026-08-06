import { ProjectsSection } from "@/components/projects/projects-section";

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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "Design responsivo",
  "Integração com APIs",
];

const processSteps = [
  "Entendimento",
  "Planejamento",
  "Identidade visual",
  "Desenvolvimento",
  "Testes",
  "Publicação",
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="background-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px]"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="Voltar ao início"
          >
            <span className="flex size-10 items-center justify-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-accent transition group-hover:border-accent">
              FL
            </span>

            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Fellipe Leite
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-sm text-muted md:flex"
            aria-label="Navegação principal"
          >
            <a className="nav-link" href="#sobre">
              Sobre
            </a>

            <a className="nav-link" href="#projetos">
              Projetos
            </a>

            <a className="nav-link" href="#servicos">
              Serviços
            </a>

            <a className="nav-link" href="#habilidades">
              Habilidades
            </a>
          </nav>

          <a
            href="https://wa.me/5511914442908"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      <main>
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
                    <strong className="block text-3xl tracking-tight">
                      15+
                    </strong>

                    <span className="mt-1 block text-sm text-muted">
                      Tecnologias e habilidades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />

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
                Sou Fellipe Santos Leite, formado em Análise e Desenvolvimento
                de Sistemas pela Uninove. Sou apaixonado por tecnologia, games
                e desenvolvimento web.
              </p>

              <p>
                Gosto de transformar ideias em sites funcionais e bem
                organizados, principalmente quando minhas criações podem ser
                úteis para pessoas, empresas e projetos reais.
              </p>

              <p>
                Estou ampliando meus conhecimentos por meio da prática,
                desenvolvendo soluções completas e buscando oportunidades
                freelancer e profissionais na área de desenvolvimento web.
              </p>
            </div>
          </div>
        </section>

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
                Desenvolvimento cuidadoso, comunicação clara e soluções
                compatíveis com a necessidade de cada projeto.
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

                  <p className="leading-7 text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="habilidades"
          className="section-spacing border-t border-border"
        >
          <div className="section-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-eyebrow">Conhecimentos</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Tecnologias utilizadas nos meus projetos.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-muted">
                Apresento apenas tecnologias com as quais já trabalhei durante
                minha formação e no desenvolvimento dos projetos publicados.
              </p>
            </div>

            <div className="flex content-start flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

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

        <section id="contato" className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
              <div
                className="absolute left-1/2 top-0 -z-0 h-60 w-96 -translate-x-1/2 rounded-full bg-accent/[0.09] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="section-eyebrow">Vamos criar algo útil?</p>

                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Tem uma ideia ou precisa melhorar sua presença digital?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  Estou disponível para conversar sobre sites institucionais,
                  lojas, landing pages, portfólios e manutenção de projetos.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/5511914442908"
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButton}
                  >
                    Conversar pelo WhatsApp
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryButton}
                  >
                    Acessar LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-9 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="text-foreground">Fellipe Leite</strong>
            <p className="mt-1">Desenvolvedor Web • São Paulo/SP</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              className="social-link"
              href="https://github.com/killLipe17"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="social-link"
              href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="social-link"
              href="https://www.youtube.com/@killlipe_"
              target="_blank"
              rel="noreferrer"
            >
              KILL LIPE
            </a>

            <a
              className="social-link"
              href="https://www.instagram.com/canalkl_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <p>Desenvolvido por Fellipe Leite.</p>
        </div>
      </footer>
    </div>
  );
}