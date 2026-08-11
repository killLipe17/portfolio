const skillGroups = [
  {
    number: "01",
    title: "Front-end",
    description: "Interfaces, componentes e aplicações web modernas.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Back-end & dados",
    description: "Persistência de dados, serviços e integrações.",
    skills: [
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Integração com APIs",
    ],
  },
  {
    number: "03",
    title: "Ferramentas & deploy",
    description: "Versionamento, repositórios e publicação dos projetos.",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    number: "04",
    title: "Interface",
    description: "Experiências adaptadas para diferentes dispositivos.",
    skills: ["Design responsivo"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Stack & tecnologia</p>

            <h2 className="section-title">
              Tecnologias aplicadas em projetos reais.
            </h2>
          </div>

          <p className="section-description">
            Ferramentas e conhecimentos utilizados do desenvolvimento da
            interface à integração de dados, versionamento e publicação.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="rounded-xl border border-border bg-surface/30 p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-accent">
                    {group.number}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <span
                  className="font-mono text-xs text-muted"
                  aria-label={`${group.skills.length} habilidades`}
                >
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 max-w-md leading-7 text-muted">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background/40 px-3 py-2 font-mono text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}