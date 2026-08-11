const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "Design responsivo",
  "Integração com APIs",
];

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="section-spacing border-t border-border"
    >
      <div className="section-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-eyebrow">Stack & tecnologia</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Tecnologias aplicadas nos projetos da LIPEXP.
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-muted">
            Ferramentas e tecnologias com as quais Fellipe já trabalhou na
            formação e no desenvolvimento de projetos reais, da interface à
            publicação.
          </p>
        </div>

        <div className="flex content-start flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-muted transition hover:border-accent/50 hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}