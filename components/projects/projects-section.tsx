import Image from "next/image";

import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Projetos selecionados</p>

            <h2 className="section-title">
              Soluções criadas para necessidades reais.
            </h2>
          </div>

          <p className="section-description">
            Projetos desenvolvidos do planejamento à publicação, com foco em
            organização, funcionamento e experiência do usuário.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-[560px] flex-col rounded-xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-sm text-accent">
                  Projeto {project.number}
                </span>

                <span className="max-w-[210px] rounded-full border border-border px-3 py-1 text-right text-xs leading-5 text-muted">
                  {project.status}
                </span>
              </div>

              <div className="relative my-8">
                <div className="relative aspect-[1600/808] overflow-hidden rounded-lg border border-border bg-background shadow-xl shadow-black/30">
                  <Image
                    src={project.desktopImage}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute -bottom-5 right-4 hidden w-[15%] min-w-16 max-w-24 overflow-hidden rounded-[0.8rem] border border-white/15 bg-black p-1 shadow-2xl shadow-black sm:block">
                  <div className="relative aspect-[820/1602] overflow-hidden rounded-[0.55rem] bg-background">
                    <Image
                      src={project.mobileImage}
                      alt={`Versão para celular do projeto ${project.title}`}
                      fill
                      sizes="100px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-foreground transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Visitar projeto
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}