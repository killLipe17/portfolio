import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "KILL LIPE",
  description:
    "Estudo de caso do KILL LIPE, site institucional e media kit para canal de games, com integração à YouTube Data API, conteúdo multilíngue e contato profissional.",
};

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "YouTube Data API",
  "Resend",
  "Git",
  "GitHub",
  "Vercel",
];

const mainFeatures = [
  "Site multilíngue em PT-BR, inglês e espanhol",
  "Layout responsivo para computador, tablet e celular",
  "Integração com a YouTube Data API",
  "Métricas do canal atualizadas automaticamente",
  "Exibição dos últimos vídeos longos do canal",
  "Filtragem para evitar Shorts na área de vídeos recentes",
  "Destaque das 9 coberturas de maior alcance e uma cobertura recente",
  "Área dedicada a publishers, desenvolvedoras e equipes de PR",
  "Formulário de contato profissional integrado com Resend",
  "Apresentação das principais coberturas de jogos",
  "Identidade visual própria baseada na marca KILL LIPE",
  "Deploy e atualizações contínuas pela Vercel",
];

const challenges = [
  {
    number: "01",
    title: "Atender público e empresas",
    description:
      "Criar uma experiência que apresentasse o canal para quem acompanha os conteúdos e, ao mesmo tempo, funcionasse como material profissional para publishers, desenvolvedoras e equipes de PR.",
  },
  {
    number: "02",
    title: "Trabalhar com dados do YouTube",
    description:
      "Integrar informações atualizadas do canal e organizar vídeos e métricas sem depender de atualizações manuais para cada novo conteúdo publicado.",
  },
  {
    number: "03",
    title: "Organizar três idiomas",
    description:
      "Disponibilizar a apresentação profissional do projeto em português, inglês e espanhol mantendo consistência visual e uma navegação simples.",
  },
  {
    number: "04",
    title: "Separar conteúdo relevante",
    description:
      "Apresentar vídeos longos e coberturas importantes de forma organizada, evitando que Shorts e outros formatos interferissem nas áreas principais do site.",
  },
];

const solutions = [
  {
    title: "Arquitetura com Next.js e TypeScript",
    description:
      "O projeto utiliza componentes reutilizáveis e tipagem para manter a interface organizada e permitir a evolução das diferentes áreas do site.",
  },
  {
    title: "Integração com YouTube Data API",
    description:
      "Dados do canal são consultados por meio da API do YouTube para apresentar métricas e conteúdos atualizados de forma automatizada.",
  },
  {
    title: "Experiência multilíngue",
    description:
      "O conteúdo foi estruturado em versões PT-BR, inglês e espanhol para permitir que empresas e profissionais internacionais conheçam o canal.",
  },
  {
    title: "Contato profissional com Resend",
    description:
      "O formulário do site utiliza Resend para transformar a página em um canal direto de contato para propostas, parcerias e oportunidades profissionais.",
  },
  {
    title: "Interface responsiva",
    description:
      "A navegação e as seções foram planejadas para preservar hierarquia, leitura e identidade visual tanto no desktop quanto em dispositivos móveis.",
  },
  {
    title: "Versionamento e publicação",
    description:
      "O projeto é versionado com Git e GitHub e publicado na Vercel, facilitando atualizações e novas versões do conteúdo.",
  },
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function KillLipePage() {
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
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://kill-lipe.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Visitar projeto
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
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
              Site institucional criado para apresentar o canal, destacar
              conteúdos e coberturas, exibir métricas atualizadas e facilitar
              contatos profissionais com publishers, desenvolvedoras e equipes
              de PR.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://kill-lipe.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
              >
                Acessar site publicado
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/killLipe17/kill-lipe"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
              >
                Ver código no GitHub
                <span aria-hidden="true">↗</span>
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

        {/* VISÃO GERAL */}
        <section className="section-spacing border-t border-border">
          <div className="section-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-eyebrow">Visão geral</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Um ponto central para o canal e sua apresentação profissional.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                O KILL LIPE é um canal brasileiro de games com conteúdo voltado
                a gameplays, guias e cobertura de lançamentos.
              </p>

              <p>
                O site foi desenvolvido para reunir conteúdos do canal e,
                simultaneamente, apresentar informações profissionais para
                publishers, desenvolvedoras e equipes de relações públicas.
              </p>

              <p>
                A plataforma também utiliza dados do YouTube para manter áreas
                importantes atualizadas e possui versões em português, inglês e
                espanhol.
              </p>
            </div>
          </div>
        </section>

        {/* INFORMAÇÕES */}
        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Informações do projeto</p>

                <h2 className="section-title">
                  Conteúdo e apresentação pensados para dois públicos.
                </h2>
              </div>

              <p className="section-description">
                O site atende tanto quem acompanha o canal quanto empresas e
                profissionais interessados em conhecer o projeto.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Formato</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Site institucional + Media Kit
                </h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Idiomas</span>

                <h3 className="mt-8 text-xl font-semibold">
                  PT-BR • EN • ES
                </h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">
                  Integração
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  YouTube Data API
                </h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Contato</span>

                <h3 className="mt-8 text-xl font-semibold">
  Publishers, desenvolvedoras e PR
</h3>
              </article>
            </div>
          </div>
        </section>

        {/* OBJETIVO */}
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
                Mais do que divulgar vídeos, o projeto foi pensado para
                apresentar o KILL LIPE de maneira organizada para audiência e
                empresas do mercado de games.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">01</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Apresentar o canal
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Reunir identidade, conteúdos, coberturas e informações
                  importantes em uma experiência própria fora do YouTube.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">02</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Fortalecer contatos profissionais
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Criar uma área clara para empresas conhecerem o canal,
                  coberturas realizadas e formas de contato.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">03</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Automatizar informações
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Utilizar dados do YouTube para reduzir atualizações manuais e
                  manter métricas e conteúdos relevantes mais próximos do estado
                  atual do canal.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
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
                Recursos técnicos e editoriais foram combinados para manter o
                site útil tanto para visitantes quanto para contatos
                profissionais.
              </p>
            </div>

            <div className="mt-14 grid gap-3 md:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-muted">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESAFIOS */}
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
                O projeto precisava conciliar dados externos, diferentes
                idiomas, conteúdo editorial e apresentação profissional.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {challenges.map((challenge) => (
                <article
                  key={challenge.number}
                  className="rounded-xl border border-border bg-surface p-7 sm:p-8"
                >
                  <span className="font-mono text-sm text-accent">
                    {challenge.number}
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

        {/* SOLUÇÕES */}
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
                A arquitetura foi planejada para facilitar atualizações,
                integrações e a expansão de novas coberturas no futuro.
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

                  <h3 className="text-xl font-semibold">{solution.title}</h3>

                  <p className="leading-7 text-muted">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
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

        {/* RESULTADO */}
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
                  Um site publicado que representa o canal dentro e fora do
                  YouTube.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  O KILL LIPE agora possui uma presença digital própria para
                  reunir conteúdos, apresentar suas principais coberturas,
                  disponibilizar informações profissionais e facilitar novas
                  oportunidades no mercado de games.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://kill-lipe.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Visitar KILL LIPE
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://github.com/killLipe17/kill-lipe"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} border border-border bg-white/[0.02] text-foreground hover:border-accent hover:bg-accent/[0.06]`}
                  >
                    Ver código no GitHub
                    <span aria-hidden="true">↗</span>
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