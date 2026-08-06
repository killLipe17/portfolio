import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Celeste F7",
  description:
    "Estudo de caso do Celeste F7, site institucional esportivo desenvolvido para apresentar a história, jogos, elenco, títulos, patrocinadores e informações do time.",
};

const technologies = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS",
  "App Router",
  "Dados locais",
  "Git",
  "GitHub",
  "Vercel",
];

const mainFeatures = [
  "Página inicial responsiva com identidade esportiva própria",
  "Apresentação da história e das informações institucionais do time",
  "Organização de jogos e resultados",
  "Área destinada ao elenco",
  "Apresentação de títulos e conquistas",
  "Galeria de imagens",
  "Espaço para patrocinadores",
  "Integração com o Instagram do time",
  "Informações sobre o campo",
  "Endereço e orientações sobre os jogos",
  "Estrutura preparada para receber novos conteúdos",
  "Publicação automática pela Vercel",
];

const challenges = [
  {
    number: "01",
    title: "Preservar a história do time",
    description:
      "Organizar informações acumuladas desde a fundação do Celeste F7 e transformá-las em uma apresentação digital clara e acessível.",
  },
  {
    number: "02",
    title: "Estruturar conteúdos esportivos",
    description:
      "Preparar áreas para elenco, jogos, resultados, títulos e galeria sem depender de um sistema complexo na primeira versão.",
  },
  {
    number: "03",
    title: "Criar uma identidade própria",
    description:
      "Desenvolver uma aparência esportiva moderna que representasse o time sem copiar o visual de outros projetos.",
  },
  {
    number: "04",
    title: "Permitir evolução futura",
    description:
      "Construir uma estrutura simples, mas preparada para receber novas partidas, jogadores, imagens, patrocinadores e conquistas.",
  },
];

const solutions = [
  {
    title: "Arquitetura com Next.js e TypeScript",
    description:
      "O projeto foi estruturado com componentes reutilizáveis e tipagem para manter o código organizado e facilitar futuras atualizações.",
  },
  {
    title: "Conteúdo organizado em dados locais",
    description:
      "As informações da versão inicial podem ser mantidas em arquivos TypeScript ou JSON, evitando banco de dados antes de existir uma necessidade real.",
  },
  {
    title: "Interface responsiva",
    description:
      "O layout foi desenvolvido para preservar a leitura e a identidade visual em computadores, tablets e celulares.",
  },
  {
    title: "Publicação e versionamento",
    description:
      "O código é versionado no GitHub e publicado na Vercel, permitindo que novas atualizações sejam disponibilizadas por meio do fluxo de Git.",
  },
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function CelesteF7Page() {
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

          <a
            href="https://celeste-f7.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Visitar projeto
            <span aria-hidden="true">↗</span>
          </a>
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
              Site institucional esportivo
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Celeste F7
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Site institucional desenvolvido para apresentar a história do
              Celeste F7, organizar informações sobre jogos, elenco, títulos,
              patrocinadores, redes sociais e localização do time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://celeste-f7.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
              >
                Acessar site publicado
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
              <p>
                O Celeste F7 é um time de futebol society fundado em 7 de
                janeiro de 2007, na cidade de São Paulo.
              </p>

              <p>
                O projeto foi criado para reunir sua história, informações
                esportivas, localização, redes sociais e conteúdos relacionados
                ao time em uma única presença digital.
              </p>

              <p>
                O site já está publicado e possui uma estrutura preparada para
                receber novos dados conforme o elenco, os jogos, os resultados
                e a galeria forem atualizados.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Informações do projeto</p>

                <h2 className="section-title">
                  Conteúdo baseado na identidade real do Celeste F7.
                </h2>
              </div>

              <p className="section-description">
                A página apresenta informações institucionais e esportivas
                confirmadas sobre o time e sua rotina.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Fundação</span>

                <h3 className="mt-8 text-xl font-semibold">
                  7 de janeiro de 2007
                </h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Cidade</span>

                <h3 className="mt-8 text-xl font-semibold">São Paulo/SP</h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Campo</span>

                <h3 className="mt-8 text-xl font-semibold">CDC Rola Bola</h3>
              </article>

              <article className="bg-surface p-7">
                <span className="font-mono text-xs text-accent">Jogos</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Sábados, normalmente às 10h
                </h3>
              </article>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Objetivo</p>

                <h2 className="section-title">
                  Organizar e valorizar a presença do time.
                </h2>
              </div>

              <p className="section-description">
                O site foi planejado para funcionar como ponto central de
                informações para jogadores, torcedores, patrocinadores e
                pessoas interessadas em conhecer o Celeste F7.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">01</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Preservar a história
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Registrar a trajetória do time e apresentar suas principais
                  informações institucionais.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">02</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Organizar informações
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Preparar áreas para elenco, jogos, resultados, títulos,
                  galeria e patrocinadores.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">03</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Facilitar o contato
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Reunir Instagram, endereço do campo e informações sobre os
                  jogos em uma navegação acessível.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Principais recursos</p>

                <h2 className="section-title">
                  Estrutura disponível na versão publicada.
                </h2>
              </div>

              <p className="section-description">
                O projeto foi criado para crescer conforme novas informações e
                materiais forem disponibilizados pelo time.
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
                O principal cuidado foi organizar conteúdos diferentes sem
                tornar a primeira versão complexa ou difícil de atualizar.
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
                A versão inicial prioriza desempenho, manutenção simples e
                facilidade para adicionar novos conteúdos no futuro.
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
                  O Celeste F7 possui uma presença digital própria, responsiva
                  e organizada. Novos jogadores, resultados, imagens, títulos e
                  patrocinadores poderão ser adicionados conforme o conteúdo
                  for confirmado.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="https://celeste-f7.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Visitar Celeste F7
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