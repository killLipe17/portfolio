import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "SagaTrack",
  description:
    "Estudo de caso do SagaTrack, aplicativo mobile em React Native e Expo para maratonas cinematográficas com missões, quizzes, XP, níveis e conquistas.",
  alternates: {
    canonical: "/projetos/sagatrack",
  },
  openGraph: {
    type: "website",
    url: "/projetos/sagatrack",
    title: "SagaTrack | LIPEXP Studio",
    description:
      "Aplicativo mobile com React Native, Expo, TMDB API, gamificação, persistência local e distribuição Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SagaTrack | LIPEXP Studio",
    description:
      "Primeiro aplicativo mobile completo da LIPEXP Studio, do conceito ao teste fechado na Google Play.",
  },
};

const technologies = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "React",
  "Expo Image",
  "Expo Status Bar",
  "React Native Safe Area Context",
  "React Native View Shot",
  "Expo Sharing",
  "React Context API",
  "AsyncStorage",
  "TMDB API",
  "EAS",
  "EAS Build",
  "Android App Bundle",
  "Google Play Console",
  "Git",
  "GitHub",
];

const projectFacts = [
  { label: "Tipo", value: "Projeto autoral" },
  { label: "Minha atuação", value: "Produto + UX/UI + desenvolvimento" },
  { label: "Plataforma", value: "Android / React Native" },
  { label: "Distribuição", value: "Teste fechado • Google Play" },
];

const objectives = [
  {
    title: "Ir além do checklist",
    description:
      "Transformar o acompanhamento de filmes em uma jornada com objetivos, recompensas e sensação constante de evolução.",
  },
  {
    title: "Criar progressão",
    description:
      "Conectar filmes assistidos, quizzes, XP, níveis, missões, conquistas e temas dentro de um único sistema.",
  },
  {
    title: "Construir um app real",
    description:
      "Projetar uma experiência mobile completa e levá-la do desenvolvimento local até um Android App Bundle distribuído em teste fechado.",
  },
];

const mainFeatures = [
  {
    title: "38 filmes",
    description:
      "Catálogo organizado por ordem de lançamento e cronológica, com status de conclusão e informações de cada título.",
  },
  {
    title: "7 missões",
    description:
      "Jornadas com objetivos diferentes permitem acompanhar a maratona por caminhos e metas específicas.",
  },
  {
    title: "114 perguntas",
    description:
      "Quizzes pós-filme adicionam uma camada interativa à experiência e participam do sistema de progressão.",
  },
  {
    title: "XP e níveis",
    description:
      "Filmes e atividades geram experiência, permitindo que o perfil acompanhe a evolução do usuário ao longo da jornada.",
  },
  {
    title: "Conquistas e temas",
    description:
      "Troféus de diferentes raridades e temas visuais desbloqueáveis criam recompensas além do simples progresso percentual.",
  },
  {
    title: "Compartilhamento nativo",
    description:
      "O aplicativo gera cards e imagens que podem ser compartilhados através dos recursos nativos do Android.",
  },
];

const challenges = [
  {
    title: "Primeiro projeto mobile",
    description:
      "Adaptar conhecimentos de React e TypeScript para navegação, layout, estados e comportamento específicos de aplicações móveis.",
  },
  {
    title: "Gamificação conectada",
    description:
      "Manter XP, níveis, quizzes, missões, troféus e filmes sincronizados como partes do mesmo sistema de progressão.",
  },
  {
    title: "Persistência sem conta",
    description:
      "Salvar a jornada do usuário no próprio dispositivo sem exigir login, autenticação ou infraestrutura remota.",
  },
  {
    title: "Distribuição Android",
    description:
      "Preparar credenciais, builds, APKs, AAB, declarações e configurações necessárias para levar o app ao Google Play Console.",
  },
];

const solutions = [
  {
    title: "Expo Router",
    description:
      "A navegação foi estruturada com rotas por arquivos e páginas dinâmicas para filmes, missões e experiências específicas.",
  },
  {
    title: "Context API",
    description:
      "Estados globais centralizam dados de progresso, temas e evolução, evitando duplicação de lógica entre as telas.",
  },
  {
    title: "AsyncStorage",
    description:
      "Filmes assistidos, missões, XP, quizzes e conquistas permanecem persistentes localmente mesmo após fechar o aplicativo.",
  },
  {
    title: "Camada de serviço TMDB",
    description:
      "A integração externa fica isolada em um serviço responsável por dados, pôsteres, backdrops e URLs de imagens.",
  },
  {
    title: "Recursos nativos",
    description:
      "View Shot e Expo Sharing permitem transformar momentos da jornada em cards gerados e compartilhados pelo próprio usuário.",
  },
  {
    title: "EAS e Google Play",
    description:
      "O fluxo de distribuição utiliza EAS Build para gerar artefatos Android e preparar a versão publicada no teste fechado.",
  },
];

const gamificationFlow = [
  { number: "01", title: "Assistir", description: "O usuário conclui um filme da jornada." },
  { number: "02", title: "Registrar", description: "O progresso é salvo e a etapa gera experiência." },
  { number: "03", title: "Interagir", description: "Quizzes e missões ampliam a experiência pós-filme." },
  { number: "04", title: "Evoluir", description: "XP alimenta níveis e estatísticas do perfil." },
  { number: "05", title: "Desbloquear", description: "Conquistas e temas recompensam marcos especiais." },
];

const architecture = [
  {
    title: "Navegação",
    value: "Expo Router",
    description: "Rotas por arquivos e páginas dinâmicas.",
  },
  {
    title: "Estado global",
    value: "Context API",
    description: "Progresso, temas e evolução compartilhados.",
  },
  {
    title: "Persistência",
    value: "AsyncStorage",
    description: "Dados mantidos localmente no dispositivo.",
  },
  {
    title: "Dados externos",
    value: "TMDB API",
    description: "Metadados e imagens através de camada própria.",
  },
];

const screenshots = [
  {
    src: "/projects/sagatrack/sagatrack-home-v2.jpg",
    alt: "Home do SagaTrack com painel de jornada e contagem regressiva",
    label: "Home",
  },
  {
    src: "/projects/sagatrack/sagatrack-movies-v2.jpg",
    alt: "Catálogo do SagaTrack com filmes em ordem de lançamento",
    label: "Filmes",
  },
  {
    src: "/projects/sagatrack/sagatrack-detail-v2.jpg",
    alt: "Tela de detalhes de Homem de Ferro no SagaTrack",
    label: "Detalhes",
  },
  {
    src: "/projects/sagatrack/sagatrack-missions-v2.jpg",
    alt: "Tela de missões do SagaTrack",
    label: "Missões",
  },
  {
    src: "/projects/sagatrack/sagatrack-profile-v2.jpg",
    alt: "Perfil do SagaTrack com XP, nível e estatísticas",
    label: "Perfil",
  },
];

const publicationSteps = [
  "Package Android configurado como com.lipexpstudio.sagatrack",
  "Credenciais de assinatura Android configuradas",
  "Ambientes e builds de produção preparados no EAS",
  "APKs gerados para testes em dispositivos reais",
  "Android App Bundle (AAB) gerado para distribuição",
  "Versão 1.0.0 enviada para teste fechado na Google Play",
];

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function SagaTrackPage() {
  const overviewParagraphs = [
    "SagaTrack é um aplicativo mobile criado para transformar maratonas cinematográficas em uma experiência interativa e gamificada.",
    "A jornada combina catálogo, missões, quizzes, XP, níveis, conquistas, temas visuais e estatísticas em uma experiência pensada especificamente para dispositivos móveis.",
    "O projeto também representa minha primeira aplicação mobile completa, incluindo arquitetura, UX/UI, desenvolvimento, integração com serviço externo, persistência local, recursos nativos e preparação para distribuição Android.",
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

          <Link
            href="/politica-de-privacidade/sagatrack"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Privacidade <span aria-hidden="true">→</span>
          </Link>
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
                Teste fechado • Google Play
              </span>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              Aplicativo mobile / Entretenimento & gamificação
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              SagaTrack
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Meu primeiro aplicativo mobile completo, desenvolvido desde o
              conceito, arquitetura e experiência do usuário até a geração do
              Android App Bundle e publicação em teste fechado na Google Play.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/politica-de-privacidade/sagatrack"
                className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
              >
                Política de Privacidade <span aria-hidden="true">→</span>
              </Link>

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
                src="/projects/sagatrack/sagatrack-cover.png"
                alt="Banner do SagaTrack, aplicativo mobile desenvolvido pela LIPEXP Studio"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.02]"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-eyebrow">Visão geral</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Uma maratona de filmes transformada em jornada.
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
                  Do produto ao aplicativo instalado em dispositivos reais.
                </h2>
              </div>

              <p className="section-description">
                Projeto independente desenvolvido integralmente por Fellipe
                Leite / LIPEXP Studio, reunindo produto, UX/UI, arquitetura,
                desenvolvimento e distribuição Android.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {projectFacts.map((fact) => (
                <article key={fact.label} className="bg-surface p-7">
                  <span className="font-mono text-xs text-accent">
                    {fact.label}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">{fact.value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Experiência mobile</p>
                <h2 className="section-title">
                  Uma interface construída para acompanhar a jornada.
                </h2>
              </div>

              <p className="section-description">
                Home, catálogo, detalhes, missões e perfil trabalham juntos para
                transformar progresso em uma experiência visual contínua.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {screenshots.map((screenshot) => (
                <figure key={screenshot.src}>
                  <div className="relative aspect-[710/1536] overflow-hidden rounded-[1.4rem] border border-border bg-surface shadow-xl shadow-black/30">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {screenshot.label}
                  </figcaption>
                </figure>
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
                  Criar algo que incentivasse o usuário a continuar.
                </h2>
              </div>

              <p className="section-description">
                A proposta nunca foi apenas registrar filmes concluídos, mas
                construir uma experiência com motivação, objetivos e recompensas.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {objectives.map((objective, index) => (
                <article key={objective.title} className="bg-surface p-7 sm:p-9">
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">{objective.title}</h3>
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
                  Conteúdo, progressão e recompensas no mesmo sistema.
                </h2>
              </div>

              <p className="section-description">
                A primeira versão combina acompanhamento de filmes e
                gamificação sem exigir cadastro ou conta de usuário.
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
                <p className="section-eyebrow">Gamificação</p>
                <h2 className="section-title">
                  Cada filme alimenta uma jornada maior.
                </h2>
              </div>

              <p className="section-description">
                A progressão conecta ações simples a recompensas que permanecem
                visíveis no perfil do usuário.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {gamificationFlow.map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <span className="font-mono text-xs text-accent">{step.number}</span>
                  <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
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
                  Aprender mobile enquanto construía um produto real.
                </h2>
              </div>

              <p className="section-description">
                O projeto trouxe problemas novos em navegação, persistência,
                recursos nativos e distribuição que não existiam nos meus
                projetos web anteriores.
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
                <p className="section-eyebrow">Arquitetura</p>
                <h2 className="section-title">
                  Responsabilidades separadas para permitir evolução.
                </h2>
              </div>

              <p className="section-description">
                Telas, componentes, contextos, dados, serviços, hooks, tipos e
                utilitários foram organizados de forma modular.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {architecture.map((item) => (
                <article key={item.title} className="bg-surface p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {item.title}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{item.value}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
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
                  Uma base simples onde precisava ser simples.
                </h2>
              </div>

              <p className="section-description">
                A arquitetura evita infraestrutura desnecessária na primeira
                versão, mas mantém separação suficiente para futuras evoluções.
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
                  <p className="leading-7 text-muted">{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Privacidade</p>
                <h2 className="section-title">Progresso local, sem exigir conta.</h2>
              </div>

              <p className="section-description">
                A primeira versão foi projetada sem login, anúncios, assinatura,
                compras internas ou rastreamento publicitário.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {[
                ["Conta", "Não requer login"],
                ["Progresso", "Salvo no dispositivo"],
                ["Publicidade", "Sem anúncios"],
                ["Dados de filmes", "TMDB API"],
              ].map(([label, value]) => (
                <article
                  key={label}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <span className="font-mono text-xs text-accent">{label}</span>
                  <p className="mt-5 font-medium text-foreground">{value}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/politica-de-privacidade/sagatrack"
                className="inline-flex items-center gap-2 font-semibold text-accent transition hover:text-accent-strong"
              >
                Ler Política de Privacidade do SagaTrack
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-spacing border-t border-border">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">Publicação Android</p>
                <h2 className="section-title">
                  Do projeto local ao teste fechado na Google Play.
                </h2>
              </div>

              <p className="section-description">
                O desenvolvimento também incluiu as etapas necessárias para
                preparar, assinar, empacotar e distribuir a primeira versão.
              </p>
            </div>

            <div className="mt-14 divide-y divide-border border-y border-border">
              {publicationSteps.map((step, index) => (
                <div
                  key={step}
                  className="grid gap-4 py-6 sm:grid-cols-[80px_1fr] sm:px-4"
                >
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-7 text-foreground">{step}</p>
                </div>
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
                  Versão 1.0.0 em teste fechado na Google Play.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                  O SagaTrack evoluiu de uma ideia de checklist para um
                  aplicativo mobile completo, com identidade própria,
                  gamificação, integração externa, persistência local, recursos
                  nativos e um fluxo real de distribuição Android.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/politica-de-privacidade/sagatrack"
                    className={`${buttonBase} bg-accent text-black hover:bg-accent-strong`}
                  >
                    Política de Privacidade
                    <span aria-hidden="true">→</span>
                  </Link>

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
