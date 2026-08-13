import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — SagaTrack",
  description:
    "Política de Privacidade do SagaTrack, aplicativo desenvolvido pela LIPEXP Studio.",

  alternates: {
    canonical: "/politica-de-privacidade/sagatrack",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/politica-de-privacidade/sagatrack",
    title: "Política de Privacidade — SagaTrack",
    description:
      "Informações sobre privacidade, armazenamento local e uso de dados no aplicativo SagaTrack.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade — SagaTrack",
    description:
      "Informações sobre privacidade e uso de dados no aplicativo SagaTrack.",
  },
};

const privacySummary = [
  {
    label: "Conta",
    value: "Não requer cadastro",
  },
  {
    label: "Dados pessoais",
    value: "Não coletados pela LIPEXP",
  },
  {
    label: "Progresso",
    value: "Salvo localmente",
  },
  {
    label: "Publicidade",
    value: "Sem anúncios ou rastreamento",
  },
];

export default function SagaTrackPrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="background-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[750px]"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="font-semibold tracking-[-0.02em] transition hover:opacity-80"
          >
            LIPEXP <span className="text-accent">STUDIO</span>
          </Link>

          <Link
            href="/"
            className="text-sm text-muted transition hover:text-accent"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-4xl">
            <p className="section-eyebrow">SagaTrack • Privacidade</p>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Política de Privacidade — SagaTrack
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              Esta Política de Privacidade explica de forma simples como o
              SagaTrack trata informações e dados durante o uso do aplicativo.
            </p>

            <p className="mt-5 font-mono text-sm text-muted">
              Última atualização:{" "}
              <time dateTime="2026-08-13">13 de agosto de 2026</time>
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {privacySummary.map((item) => (
              <article key={item.label} className="bg-surface p-6">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </span>

                <p className="mt-4 font-medium text-foreground">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <article className="border-t border-border">
          <div className="section-container max-w-4xl py-16 sm:py-20">
            <div className="space-y-14">
              <section>
                <p className="section-eyebrow">01 • Sobre esta política</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Sobre o SagaTrack
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    O SagaTrack é um aplicativo de entretenimento desenvolvido
                    pela LIPEXP Studio para acompanhar filmes do MCU, marcar
                    filmes como assistidos, participar de quizzes, acompanhar
                    missões, XP, conquistas e o progresso dentro do aplicativo.
                  </p>

                  <p>
                    O aplicativo não exige criação de conta ou login para ser
                    utilizado.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">02 • Dados pessoais</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Dados que não coletamos
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    A LIPEXP Studio não solicita, recebe ou armazena em seus
                    servidores dados pessoais como nome, endereço de e-mail,
                    número de telefone ou endereço residencial através do
                    SagaTrack.
                  </p>

                  <p>
                    O aplicativo também não possui sistema de contas,
                    assinatura, compras dentro do aplicativo ou publicidade.
                  </p>

                  <p>
                    Atualmente, o SagaTrack não utiliza ferramentas de
                    analytics, rastreamento de publicidade ou criação de
                    perfis de usuários para fins comerciais.
                  </p>

                  <p>
                    A LIPEXP Studio não vende dados de usuários.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">03 • Armazenamento local</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Seu progresso permanece no dispositivo
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    Informações relacionadas ao uso do SagaTrack, como filmes
                    marcados como assistidos, progresso, XP, conquistas,
                    missões e resultados de quizzes, podem ser armazenadas
                    localmente no dispositivo do usuário.
                  </p>

                  <p>
                    Esses dados são utilizados exclusivamente para manter o
                    funcionamento e a experiência do aplicativo e não são
                    enviados para servidores da LIPEXP Studio.
                  </p>

                  <p>
                    Como não existe uma conta vinculada ao usuário, esse
                    progresso não é sincronizado com outros dispositivos.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">04 • TMDB</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Uso de informações de terceiros
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    O SagaTrack utiliza a API do The Movie Database (TMDB) para
                    acessar informações e imagens relacionadas aos filmes
                    exibidos no aplicativo.
                  </p>

                  <p>
                    A TMDB é um serviço de terceiros e possui seus próprios
                    termos, políticas e práticas de privacidade. A LIPEXP
                    Studio não controla as práticas de tratamento de dados
                    realizadas pela TMDB.
                  </p>

                  <p>
                    O uso da TMDB pelo SagaTrack tem como finalidade fornecer
                    conteúdo relacionado aos filmes e não é utilizado pela
                    LIPEXP Studio para publicidade ou criação de perfis de
                    usuários.
                  </p>

                  <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex font-medium text-accent transition hover:text-accent-strong"
                  >
                    Conhecer a TMDB <span aria-hidden="true">↗</span>
                  </a>

                  <div className="rounded-xl border border-border bg-surface p-5 text-sm leading-7 text-muted">
                    This product uses the TMDB API but is not endorsed or
                    certified by TMDB.
                  </div>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">05 • Compartilhamento</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Compartilhamento iniciado pelo usuário
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    O SagaTrack pode permitir que o usuário compartilhe cards,
                    imagens ou outros conteúdos gerados no aplicativo através
                    dos recursos nativos de compartilhamento disponíveis no
                    dispositivo.
                  </p>

                  <p>
                    Esse compartilhamento ocorre somente quando o próprio
                    usuário inicia a ação e escolhe o aplicativo ou serviço de
                    destino.
                  </p>

                  <p>
                    A LIPEXP Studio não recebe nem mantém em seus servidores
                    uma cópia do conteúdo compartilhado através desse recurso.
                    Após o envio, o tratamento do conteúdo também poderá estar
                    sujeito às políticas do aplicativo ou serviço escolhido
                    pelo usuário.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">06 • Publicidade e pagamentos</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Sem anúncios, assinaturas ou compras
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    A versão atual do SagaTrack não exibe anúncios, não utiliza
                    identificadores para publicidade e não possui compras
                    dentro do aplicativo ou assinaturas.
                  </p>

                  <p>
                    O aplicativo também não utiliza os dados de progresso para
                    marketing ou publicidade personalizada.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">07 • Segurança</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Segurança e privacidade
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    O SagaTrack foi desenvolvido buscando limitar o tratamento
                    de dados ao necessário para suas funcionalidades.
                  </p>

                  <p>
                    Como o progresso é armazenado localmente e não existe conta
                    ou banco de dados de usuários mantido pela LIPEXP Studio, a
                    LIPEXP Studio não mantém uma base remota com o histórico
                    pessoal de uso do aplicativo.
                  </p>

                  <p>
                    As consultas externas utilizadas para obter informações da
                    TMDB são realizadas através de conexões HTTPS.
                  </p>

                  <p>
                    A proteção das informações armazenadas localmente também
                    depende dos recursos de segurança do sistema operacional e
                    do próprio dispositivo do usuário.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">08 • Retenção e exclusão</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Controle dos dados locais
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    Como o SagaTrack não possui contas de usuário e o progresso
                    não é armazenado nos servidores da LIPEXP Studio, não há
                    dados de conta ou histórico pessoal mantidos remotamente
                    para exclusão.
                  </p>

                  <p>
                    Os dados locais permanecem no dispositivo enquanto os dados
                    do aplicativo forem mantidos pelo usuário.
                  </p>

                  <p>
                    O usuário pode remover essas informações apagando os dados
                    do SagaTrack nas configurações do dispositivo ou
                    desinstalando o aplicativo. Como não existe sincronização
                    em nuvem na versão atual, informações removidas dessa forma
                    podem não ser recuperáveis.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">09 • Alterações</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Atualizações desta política
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    Esta Política de Privacidade poderá ser atualizada conforme
                    o SagaTrack receber novos recursos ou houver mudanças na
                    forma como o aplicativo trata informações.
                  </p>

                  <p>
                    Quando ocorrer uma alteração relevante, a data de última
                    atualização exibida no início desta página será revisada.
                  </p>

                  <p>
                    Caso recursos futuros envolvam novas formas de coleta,
                    armazenamento ou compartilhamento de dados, esta política e
                    as declarações correspondentes nas lojas de aplicativos
                    serão atualizadas.
                  </p>
                </div>
              </section>

              <section>
                <p className="section-eyebrow">10 • Contato</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                  Dúvidas sobre privacidade
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-muted">
                  <p>
                    Para dúvidas sobre esta Política de Privacidade ou sobre o
                    tratamento de informações no SagaTrack, entre em contato
                    com a LIPEXP Studio.
                  </p>

                  <div className="rounded-xl border border-border bg-surface p-6">
                    <p>
                      <strong className="text-foreground">Aplicativo:</strong>{" "}
                      SagaTrack
                    </p>

                    <p className="mt-2">
                      <strong className="text-foreground">
                        Desenvolvedor:
                      </strong>{" "}
                      LIPEXP Studio
                    </p>

                    <p className="mt-2">
                      <strong className="text-foreground">
                        Responsável:
                      </strong>{" "}
                      Fellipe Leite
                    </p>

                    <p className="mt-2">
                      <strong className="text-foreground">E-mail:</strong>{" "}
                      <a
                        href="mailto:lipexpstudio@gmail.com"
                        className="text-accent transition hover:text-accent-strong"
                      >
                        lipexpstudio@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}