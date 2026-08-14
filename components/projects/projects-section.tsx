import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Portfólio LIPEXP</p>
            <h2 className="section-title">
              Projetos reais. Soluções que saíram do papel.
            </h2>
          </div>

          <p className="section-description">
            Projetos desenvolvidos por Fellipe Leite, do planejamento à
            publicação, e reunidos hoje no portfólio da LIPEXP Studio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isLastOddProject =
              projects.length % 2 !== 0 && index === projects.length - 1;

            return (
              <article
                key={project.title}
                className={`group flex min-h-[560px] flex-col rounded-xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8 ${
                  isLastOddProject
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-0.75rem)]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-sm uppercase tracking-[0.14em] text-accent">
                    Case {project.number}
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

                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex min-h-14 items-center gap-2 rounded-lg border border-accent/15 bg-accent/[0.03] px-3 py-2.5 text-sm leading-5 text-foreground"
                    >
                      <span className="font-mono text-accent" aria-hidden="true">
                        +
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

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

                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:items-center">
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      Ver estudo de caso
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      Visitar projeto
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
