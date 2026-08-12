import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "KILL LIPE",
  description:
    "Estudo de caso do KILL LIPE, site institucional e media kit para canal de games, com YouTube Data API, conteúdo multilíngue e contato profissional.",

  alternates: {
    canonical: "/projetos/kill-lipe",
  },

  openGraph: {
    type: "website",
    url: "/projetos/kill-lipe",
    title: "KILL LIPE | LIPEXP Studio",
    description:
      "Site institucional e media kit para canal de games, com YouTube Data API, conteúdo multilíngue e contato profissional.",
  },

  twitter: {
    card: "summary_large_image",
    title: "KILL LIPE | LIPEXP Studio",
    description:
      "Site institucional e media kit para canal de games desenvolvido pela LIPEXP Studio.",
  },
};

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "YouTube Data API",
  "Resend",
  "Git",
  "GitHub",
  "Vercel"
];

const projectFacts = [
  {
    "label": "Tipo",
    "value": "Projeto autoral"
  },
  {
    "label": "Minha atuação",
    "value": "Design + desenvolvimento"
  },
  {
    "label": "Integrações",
    "value": "YouTube API + Resend"
  },
  {
    "label": "Idiomas",
    "value": "PT-BR • EN • ES"
  }
];

const objectives = [
  {
    "title": "Apresentar o canal",
    "description": "Reunir identidade, conteúdos, coberturas e informações profissionais em uma presença própria fora do YouTube."
  },
  {
    "title": "Fortalecer contatos",
    "description": "Criar uma apresentação clara para publishers, desenvolvedoras e equipes de PR conhecerem o projeto."
  },
  {
    "title": "Automatizar informações",
    "description": "Usar dados do YouTube para reduzir atualizações manuais e manter métricas e conteúdos relevantes atualizados."
  }
];

const mainFeatures = [
  {
    "title": "Conteúdo multilíngue",
    "description": "Versões em PT-BR, inglês e espanhol ampliam a apresentação do canal para audiência e empresas internacionais."
  },
  {
    "title": "Dados do YouTube",
    "description": "A YouTube Data API mantém métricas do canal e conteúdos importantes atualizados sem depender apenas de edição manual."
  },
  {
    "title": "Vídeos relevantes",
    "description": "A área de vídeos prioriza conteúdos longos, filtra Shorts e destaca coberturas importantes de forma organizada."
  },
  {
    "title": "Apresentação profissional",
    "description": "O site funciona como ponto de referência para publishers, desenvolvedoras e equipes de PR conhecerem o projeto."
  },
  {
    "title": "Contato integrado",
    "description": "O formulário conectado ao Resend cria um canal direto para propostas, parcerias e contatos profissionais."
  },
  {
    "title": "Experiência responsiva",
    "description": "Identidade, hierarquia e navegação foram adaptadas para desktop, tablet e celular mantendo a linguagem do KILL LIPE."
  }
];

const challenges = [
  {
    "title": "Atender público e empresas",
    "description": "Criar uma experiência útil para a audiência do canal e, ao mesmo tempo, adequada como apresentação profissional para o mercado de games."
  },
  {
    "title": "Trabalhar com dados externos",
    "description": "Integrar métricas e conteúdos do YouTube de forma confiável e organizada, reduzindo dependência de atualizações manuais."
  },
  {
    "title": "Organizar três idiomas",
    "description": "Disponibilizar conteúdo em português, inglês e espanhol sem comprometer consistência visual e navegação."
  },
  {
    "title": "Separar conteúdo relevante",
    "description": "Priorizar vídeos longos e coberturas importantes, evitando que Shorts interfiram nas áreas principais do site."
  }
];

const solutions = [
  {
    "title": "Arquitetura com Next.js e TypeScript",
    "description": "Componentes reutilizáveis e tipagem ajudam a manter a aplicação organizada e preparada para evolução."
  },
  {
    "title": "Integração com YouTube Data API",
    "description": "Métricas e conteúdos do canal são consultados via API para manter áreas importantes mais próximas do estado atual."
  },
  {
    "title": "Experiência multilíngue",
    "description": "A estrutura foi organizada em versões PT-BR, inglês e espanhol para atender público e contatos internacionais."
  },
  {
    "title": "Contato profissional com Resend",
    "description": "O formulário transforma o site em um canal direto para propostas, parcerias e oportunidades profissionais."
  },
  {
    "title": "Interface responsiva",
    "description": "A navegação preserva hierarquia, identidade e legibilidade em desktop, tablet e celular."
  },
  {
    "title": "Versionamento e publicação",
    "description": "Git, GitHub e Vercel formam o fluxo de atualização e publicação contínua do projeto."
  }
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function KillLipePage() {
  const overviewParagraphs = [
  "O KILL LIPE é um canal brasileiro de games com conteúdo voltado a gameplays, guias e cobertura de lançamentos.",
  "O site foi desenvolvido para reunir conteúdos do canal e, simultaneamente, apresentar informações profissionais para publishers, desenvolvedoras e equipes de relações públicas.",
  "A plataforma utiliza dados do YouTube para manter áreas importantes atualizadas e possui versões em português, inglês e espanhol."
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
              href="https://github.com/killLipe17/kill-lipe"
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-10 items-center justify-center gap-2 rounded-md border border-border bg-white/[0.02] px-4 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:inline-flex"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://kill-lipe.vercel.app/"
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
                Publicado
              </span>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              Site institucional / Media Kit para canal de games
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              KILL LIPE
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Site institucional criado para apresentar o canal, destacar conteúdos e coberturas, exibir métricas atualizadas e facilitar contatos profissionais com publishers, desenvolvedoras e equipes de PR.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://kill-lipe.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
              >
                Acessar site publicado <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/killLipe17/kill-lipe"
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
                src="/projects/kill-lipe/kill-lipe-desktop.webp"
                alt="Página inicial do site KILL LIPE em um computador"
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
                  src="/projects/kill-lipe/kill-lipe-mobile.webp"
                  alt="Versão para celular do site KILL LIPE"
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
                Um ponto central para o canal e sua apresentação profissional.
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
                  Do conceito ao deploy, um projeto desenvolvido de ponta a ponta.
                </h2>
              </div>

              <p className="section-description">
                Além de ser um projeto autoral, o KILL LIPE reúne decisões de produto, identidade visual, interface, desenvolvimento, integrações e publicação.
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
                  Transformar o canal em uma presença profissional completa.
                </h2>
              </div>

              <p className="section-description">
                Mais do que divulgar vídeos, o projeto foi pensado para apresentar o KILL LIPE de maneira organizada para audiência e empresas do mercado de games.
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
                  Uma plataforma conectada ao conteúdo do canal.
                </h2>
              </div>

              <p className="section-description">
                Os recursos principais combinam automação, conteúdo editorial e apresentação profissional sem transformar o case em uma lista extensa.
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
                  Conteúdo dinâmico sem perder clareza e identidade.
                </h2>
              </div>

              <p className="section-description">
                O projeto precisava conciliar dados externos, diferentes idiomas, conteúdo editorial e apresentação profissional.
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
                  Automação, organização e uma base preparada para crescer.
                </h2>
              </div>

              <p className="section-description">
                A arquitetura foi planejada para facilitar atualizações, integrações e a expansão de novas coberturas.
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
                  Um site publicado que representa o canal dentro e fora do YouTube.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  O KILL LIPE possui uma presença digital própria para reunir conteúdos, apresentar coberturas, disponibilizar informações profissionais e facilitar novas oportunidades no mercado de games.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://kill-lipe.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Visitar projeto <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://github.com/killLipe17/kill-lipe"
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
