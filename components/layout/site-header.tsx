import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="LIPEXP Studio - Início"
        >
<div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-accent/30 bg-black shadow-[0_0_20px_rgba(132,204,22,0.12)] transition group-hover:border-accent/60">            <Image
              src="/lipexp-logo.png"
              alt="Logo LIPEXP Studio"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold tracking-wide text-foreground">
              LIPEXP{" "}
              <span className="text-accent">
                STUDIO
              </span>
            </span>

            <span className="text-[11px] text-muted">
              por Fellipe Leite
            </span>
          </div>
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
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}