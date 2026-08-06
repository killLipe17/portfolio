import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Guiart Games e Colecionáveis",
  description:
    "Estudo de caso da Guiart Games e Colecionáveis, site para loja com catálogo, carrinho, pedidos pelo WhatsApp e painel administrativo.",
};

const technologies = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Supabase Storage",
  "Git",
  "GitHub",
  "Vercel",
];

const mainFeatures = [
  "Página inicial responsiva e identidade visual personalizada",
  "Catálogo de produtos com busca, filtros e ordenação",
  "Sugestões de busca diretamente no cabeçalho",
  "Páginas individuais para os produtos",
  "Carrinho e finalização do pedido pelo WhatsApp",
  "Painel administrativo protegido",
  "Cadastro e edição de produtos e categorias",
  "Controle de estoque e gerenciamento de pedidos",
  "Configurações gerais da loja",
  "Upload e gerenciamento de várias imagens",
  "Escolha da imagem de capa dos produtos",
  "Rotação e exclusão de fotografias",
  "Integração com WhatsApp, Instagram e TikTok",
];

const challenges = [
  {
    number: "01",
    title: "Organização do catálogo",
    description:
      "Estruturar produtos, categorias, plataformas, busca e ordenação de maneira clara para facilitar a navegação dos clientes.",
  },
  {
    number: "02",
    title: "Fluxo de pedidos",
    description:
      "Criar um carrinho funcional que organizasse os itens escolhidos e encaminhasse o pedido para atendimento pelo WhatsApp.",
  },
  {
    number: "03",
    title: "Administração da loja",
    description:
      "Centralizar o cadastro de produtos, categorias, estoque, pedidos e configurações em uma área administrativa protegida.",
  },
  {
    number: "04",
    title: "Gerenciamento de imagens",
    description:
      "Permitir o envio de várias fotografias, escolha da capa, rotação e exclusão sem depender de alterações diretas no código.",
  },
];

const solutions = [
  {
    title: "Aplicação com Next.js e TypeScript",
    description:
      "A interface e as funcionalidades foram organizadas com uma estrutura moderna, tipada e preparada para crescer.",
  },
  {
    title: "Banco de dados com Prisma e PostgreSQL",
    description:
      "Produtos, categorias, pedidos, estoque e configurações foram estruturados em um banco de dados relacional.",
  },
  {
    title: "Supabase para dados e imagens",
    description:
      "O Supabase foi utilizado para hospedar o banco de dados e o Supabase Storage para armazenar as imagens dos produtos.",
  },
  {
    title: "Publicação automatizada",
    description:
      "O projeto foi versionado no GitHub e publicado na Vercel, permitindo novos deploys a partir das atualizações enviadas ao repositório.",
  },
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function GuiartGamesPage() {
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
            <span
              className="font-mono text-lg text-accent"
              aria-hidden="true"
            >
              ←
            </span>
            Voltar ao portfólio
          </Link>

          <a
            href="https://guiart-web-nine.vercel.app/"
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
                Versão 1.0 publicada
              </span>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              Site para loja e sistema administrativo
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Guiart Games e Colecionáveis
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Plataforma desenvolvida para apresentar o catálogo de uma loja de
              games, consoles e colecionáveis, organizar produtos e estoque e
              facilitar o envio de pedidos pelo WhatsApp.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://guiart-web-nine.vercel.app/"
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
                src="/projects/guiart-games/guiart-desktop.webp"
                alt="Página inicial da Guiart Games e Colecionáveis em um computador"
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
                  src="/projects/guiart-games/guiart-mobile.webp"
                  alt="Versão para celular da Guiart Games e Colecionáveis"
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
                Um projeto criado para uma operação comercial real.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                A Guiart Games e Colecionáveis precisava de uma presença
                digital capaz de apresentar seus produtos e facilitar o contato
                com clientes interessados em games, consoles e itens
                colecionáveis.
              </p>

              <p>
                O projeto foi desenvolvido para reunir a apresentação da loja,
                o catálogo de produtos, o carrinho e o gerenciamento interno em
                uma única aplicação.
              </p>

              <p>
                A versão 1.0 foi concluída e publicada com uma estrutura
                preparada para cadastrar produtos, controlar estoque, organizar
                pedidos e atualizar o conteúdo da loja.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Objetivo</p>

                <h2 className="section-title">
                  Apresentar produtos e simplificar o atendimento.
                </h2>
              </div>

              <p className="section-description">
                A proposta foi criar uma experiência clara para o cliente e, ao
                mesmo tempo, oferecer ferramentas para organizar as atividades
                internas da loja.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">01</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Apresentar a marca
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Criar uma identidade visual própria e uma página inicial
                  responsiva para apresentar a loja.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">02</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Organizar o catálogo
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Permitir que os clientes encontrem produtos por busca,
                  categoria, plataforma e ordenação.
                </p>
              </article>

              <article className="bg-surface p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">03</span>

                <h3 className="mt-8 text-xl font-semibold">
                  Facilitar os pedidos
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  Organizar os itens no carrinho e encaminhar o pedido para
                  atendimento pelo WhatsApp.
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
                  Funcionalidades presentes na versão publicada.
                </h2>
              </div>

              <p className="section-description">
                O projeto combina uma experiência pública para os clientes com
                uma área administrativa para a organização da loja.
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
                  Pontos centrais trabalhados durante o desenvolvimento.
                </h2>
              </div>

              <p className="section-description">
                A aplicação precisava manter a navegação simples para os
                clientes sem limitar as ferramentas disponíveis para a
                administração.
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
                  Uma estrutura completa do front-end à publicação.
                </h2>
              </div>

              <p className="section-description">
                As tecnologias foram escolhidas para atender às funcionalidades
                da loja sem adicionar complexidade sem necessidade.
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
                <p className="section-eyebrow">Resultado</p>

                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Uma versão 1.0 completa e publicada.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  A Guiart Games possui uma presença digital própria, catálogo
                  organizado, fluxo de pedidos pelo WhatsApp e ferramentas para
                  administrar produtos, imagens, estoque e pedidos.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="https://guiart-web-nine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Visitar Guiart Games
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