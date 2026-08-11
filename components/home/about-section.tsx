export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing border-t border-border">
      <div className="section-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-eyebrow">Por trás da LIPEXP</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Desenvolvimento web com visão de produto e identidade.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            Sou Fellipe Santos Leite, desenvolvedor web formado em Análise e
            Desenvolvimento de Sistemas pela UNINOVE e criador da LIPEXP
            Studio.
          </p>

          <p>
            Desenvolvo sites para negócios, profissionais e projetos que
            precisam transformar uma ideia em uma presença digital moderna,
            funcional e bem apresentada.
          </p>

          <p>
            Na LIPEXP, acompanho cada projeto do planejamento à publicação,
            passando por identidade visual, interface, desenvolvimento,
            responsividade, integrações e testes. O objetivo é criar soluções
            que sejam úteis para quem administra e simples para quem utiliza.
          </p>

          <p>
            Além dos projetos freelance, sigo ampliando minha experiência por
            meio de projetos reais e estou aberto a oportunidades profissionais
            em desenvolvimento web.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface/40 p-4">
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Formação
              </span>
              <strong className="mt-2 block text-sm font-medium text-foreground">
                ADS — UNINOVE
              </strong>
            </div>

            <div className="rounded-xl border border-border bg-surface/40 p-4">
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Localização
              </span>
              <strong className="mt-2 block text-sm font-medium text-foreground">
                São Paulo / SP
              </strong>
            </div>

            <div className="rounded-xl border border-border bg-surface/40 p-4">
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Disponibilidade
              </span>
              <strong className="mt-2 block text-sm font-medium text-foreground">
                Freelance + oportunidades
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}