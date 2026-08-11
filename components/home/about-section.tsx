export function AboutSection() {
  return (
    <section id="sobre" className="section-spacing border-t border-border">
      <div className="section-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-eyebrow">Por trás da LIPEXP</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Tecnologia, criatividade e projetos que resolvem problemas.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            Sou Fellipe Santos Leite, desenvolvedor web formado em Análise e
            Desenvolvimento de Sistemas pela UNINOVE e responsável pela
            LIPEXP Studio.
          </p>

          <p>
            Tecnologia e games sempre fizeram parte dos meus interesses, e foi
            no desenvolvimento web que encontrei uma forma de transformar
            ideias em experiências digitais úteis, modernas e bem organizadas.
          </p>

          <p>
            Na LIPEXP, cuido dos projetos desde o planejamento e identidade
            visual até o desenvolvimento, testes e publicação, buscando criar
            soluções que façam sentido para cada negócio, profissional ou
            projeto.
          </p>

          <p>
            Ao mesmo tempo, continuo evoluindo tecnicamente por meio de
            projetos reais e aberto a oportunidades profissionais na área de
            desenvolvimento web.
          </p>
        </div>
      </div>
    </section>
  );
}