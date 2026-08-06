export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Voltar ao início"
        >
          <span className="flex size-10 items-center justify-center rounded-md border border-border bg-surface font-mono text-sm font-bold text-accent transition group-hover:border-accent">
            FL
          </span>

          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Fellipe Leite
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm text-muted md:flex"
          aria-label="Navegação principal"
        >
          <a className="nav-link" href="#sobre">
            Sobre
          </a>

          <a className="nav-link" href="#projetos">
            Projetos
          </a>

          <a className="nav-link" href="#servicos">
            Serviços
          </a>

          <a className="nav-link" href="#habilidades">
            Habilidades
          </a>
        </nav>

        <a
          href="https://wa.me/5511914442908"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-accent/50 px-4 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
}