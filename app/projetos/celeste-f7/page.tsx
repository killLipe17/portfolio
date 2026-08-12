import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Celeste F7",
  description: "Estudo de caso do Celeste F7, site institucional de Futebol 7 desenvolvido para apresentar história, jogos, elenco, patrocinadores e informações do time.",
};

const technologies = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS",
  "App Router",
  "Dados locais",
  "Git",
  "GitHub",
  "Vercel"
];

const projectFacts = [
  {
    "label": "Tipo",
    "value": "Projeto institucional"
  },
  {
    "label": "Minha atuação",
    "value": "Design + desenvolvimento"
  },
  {
    "label": "Conteúdo",
    "value": "Jogos, elenco e patrocinadores"
  },
  {
    "label": "Estrutura",
    "value": "Responsiva + preparada para evoluir"
  }
];

const objectives = [
  {
    "title": "Preservar a história",
    "description": "Registrar a trajetória do time e apresentar suas principais informações institucionais em um espaço próprio."
  },
  {
    "title": "Organizar informações",
    "description": "Estruturar áreas para elenco, jogos, resultados, conquistas, galeria e patrocinadores."
  },
  {
    "title": "Facilitar o acesso",
    "description": "Reunir redes sociais, localização e informações importantes em uma navegação simples e responsiva."
  }
];

const mainFeatures = [
  {
    "title": "História e identidade",
    "description": "A presença institucional reúne a trajetória do Celeste F7 e apresenta o time com uma identidade esportiva própria."
  },
  {
    "title": "Jogos e resultados",
    "description": "Partidas e placares ficam organizados em uma área pensada para acompanhar a rotina esportiva do time."
  },
  {
    "title": "Elenco e conquistas",
    "description": "Jogadores, posições, títulos e informações do grupo podem ser apresentados de forma clara e atualizável."
  },
  {
    "title": "Galeria de imagens",
    "description": "O projeto possui espaço para registrar momentos do time e ampliar o conteúdo visual conforme novos materiais surgirem."
  },
  {
    "title": "Patrocinadores e redes",
    "description": "Parceiros e canais oficiais ganham espaço próprio, fortalecendo a apresentação institucional e a divulgação do time."
  },
  {
    "title": "Localização e rotina",
    "description": "Informações sobre o campo, endereço e horários ajudam jogadores e visitantes a encontrar os principais dados em um só lugar."
  }
];

const challenges = [
  {
    "title": "Preservar a história do time",
    "description": "Organizar informações acumuladas desde a fundação do Celeste F7 e transformá-las em uma apresentação digital clara."
  },
  {
    "title": "Estruturar conteúdos esportivos",
    "description": "Preparar áreas para elenco, jogos, resultados, conquistas e galeria sem criar complexidade desnecessária na primeira versão."
  },
  {
    "title": "Criar uma identidade própria",
    "description": "Desenvolver uma aparência esportiva moderna que representasse o time e permanecesse consistente em diferentes telas."
  },
  {
    "title": "Permitir evolução futura",
    "description": "Construir uma estrutura simples, mas preparada para receber novas partidas, jogadores, imagens, patrocinadores e conquistas."
  }
];

const solutions = [
  {
    "title": "Arquitetura com Next.js e TypeScript",
    "description": "Componentes reutilizáveis e tipagem mantêm o código organizado e facilitam futuras atualizações."
  },
  {
    "title": "Conteúdo em dados locais",
    "description": "A versão atual evita banco de dados sem necessidade, mantendo as informações de forma simples e fácil de atualizar."
  },
  {
    "title": "Interface responsiva",
    "description": "O layout preserva leitura, identidade e navegação em computadores, tablets e celulares."
  },
  {
    "title": "Estrutura de conteúdo modular",
    "description": "Jogos, elenco, patrocinadores e outras áreas podem evoluir sem exigir uma reconstrução completa do site."
  },
  {
    "title": "Presença institucional própria",
    "description": "O site concentra informações que antes ficariam dispersas entre redes sociais e comunicação informal."
  },
  {
    "title": "Publicação e versionamento",
    "description": "GitHub e Vercel formam um fluxo simples para manter o projeto publicado e receber atualizações."
  }
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function CelesteF7Page() {
  const overviewParagraphs = [
  "O Celeste F7 é um time de Futebol 7 fundado em 2007, em São Paulo.",
  "O projeto foi criado para reunir história, informações esportivas, localização, redes sociais e conteúdos relacionados ao time em uma única presença digital.",
  "O site está publicado e possui uma estrutura preparada para receber novos dados conforme elenco, jogos, resultados e demais conteúdos forem atualizados."
];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="background-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px]"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-3 text-sm font-semibold transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="font-mono text-lg text-accent" aria-hidden="true">
              ←
            </span>
            Voltar ao portfólio
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/killLipe17/celeste-f7"
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-10 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-4 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:inline-flex"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://celeste-f7.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Visitar projeto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Estudo de caso
              </span>
              <span className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Publicado — conteúdo em expansão
              </span>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              Site institucional de Futebol 7
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Celeste F7
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Site institucional desenvolvido para apresentar a história do Celeste F7 e organizar informações sobre jogos, elenco, conquistas, patrocinadores, redes sociais e localização do time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://celeste-f7.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
              >
                Acessar site publicado <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/killLipe17/celeste-f7"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
              >
                Ver código no GitHub <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/#projetos"
                className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
              >
                Ver outros projetos
              </Link>
            </div>
          </div>

          <div className="relative mt-14">
            <div
              className="absolute -inset-16 -z-10 rounded-full bg-accent/[0.06] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative aspect-[1600/808] overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50">
              <Image
                src="/projects/celeste-f7/celeste-f7-desktop.webp"
                alt="Página inicial do Celeste F7 em um computador"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.03]"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-10 right-5 hidden w-[12%] min-w-24 max-w-36 overflow-hidden rounded-[1.2rem] border border-white/15 bg-black p-1.5 shadow-2xl shadow-black/70 sm:block lg:right-12">
              <div className="relative aspect-[820/1602] overflow-hidden rounded-[0.85rem] bg-background">
                <Image
                  src="/projects/celeste-f7/celeste-f7-mobile.webp"
                  alt="Versão para celular do Celeste F7"
                  fill
                  sizes="150px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-eyebrow">Visão geral</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Uma presença digital para representar a história do time.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-muted">
              {overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Projeto & atuação</p>
                <h2 className="section-title">
                  Uma presença institucional pensada para organizar e evoluir.
                </h2>
              </div>

              <p className="section-description">
                O Celeste F7 reúne identidade visual, arquitetura de conteúdo, desenvolvimento responsivo e organização das informações esportivas em uma experiência própria para o time.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {projectFacts.map((fact) => (
                <article key={fact.label} className="bg-surface p-7">
                  <span className="font-mono text-xs text-accent">
                    {fact.label}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">
                    {fact.value}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Objetivo</p>
                <h2 className="section-title">
                  Organizar e valorizar a presença do Celeste F7.
                </h2>
              </div>

              <p className="section-description">
                O site funciona como ponto central de informações para jogadores, torcedores, patrocinadores e pessoas interessadas em conhecer o time.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {objectives.map((objective, index) => (
                <article key={objective.title} className="bg-surface p-7 sm:p-9">
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">
                    {objective.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">
                    {objective.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Principais recursos</p>
                <h2 className="section-title">
                  Uma estrutura esportiva clara e preparada para crescer.
                </h2>
              </div>

              <p className="section-description">
                Os recursos principais concentram o que realmente importa para apresentar o time e acompanhar sua rotina.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mainFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className="group rounded-xl border border-border bg-surface p-6 transition hover:border-accent/40 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-px flex-1 bg-border transition group-hover:bg-accent/30"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Desafios do projeto</p>
                <h2 className="section-title">
                  Transformar informações esportivas em uma experiência clara.
                </h2>
              </div>

              <p className="section-description">
                O principal cuidado foi organizar conteúdos diferentes sem tornar a primeira versão complexa ou difícil de atualizar.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {challenges.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="rounded-xl border border-border bg-surface p-7 sm:p-8"
                >
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {challenge.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">
                    {challenge.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Soluções aplicadas</p>
                <h2 className="section-title">
                  Uma base simples, organizada e preparada para evoluir.
                </h2>
              </div>

              <p className="section-description">
                A versão atual prioriza desempenho, manutenção simples e facilidade para adicionar novos conteúdos.
              </p>
            </div>

            <div className="mt-14 divide-y divide-border border-y border-border">
              {solutions.map((solution, index) => (
                <article
                  key={solution.title}
                  className="grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:px-4"
                >
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold">
                    {solution.title}
                  </h3>
                  <p className="leading-7 text-muted">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-eyebrow">Tecnologias</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Ferramentas utilizadas no projeto.
              </h2>
            </div>

            <div className="flex content-start flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
              <div
                className="absolute left-1/2 top-0 h-60 w-96 -translate-x-1/2 rounded-full bg-accent/[0.09] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="section-eyebrow">Resultado atual</p>

                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Um site publicado e preparado para acompanhar o time.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  O Celeste F7 possui uma presença digital própria, responsiva e organizada, preparada para receber novos jogadores, resultados, imagens, conquistas e patrocinadores.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://celeste-f7.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Visitar projeto <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://github.com/killLipe17/celeste-f7"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
                  >
                    Ver código no GitHub <span aria-hidden="true">↗</span>
                  </a>

                  <Link
                    href="/#projetos"
                    className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
                  >
                    Voltar aos projetos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
