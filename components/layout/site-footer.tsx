export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-9 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-foreground">Fellipe Leite</strong>

          <p className="mt-1">Desenvolvedor Web • São Paulo/SP</p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            className="social-link"
            href="https://github.com/killLipe17"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/fellipe-leite-4412a3377/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="social-link"
            href="https://www.youtube.com/@killlipe_"
            target="_blank"
            rel="noreferrer"
          >
            KILL LIPE
          </a>

          <a
            className="social-link"
            href="https://www.instagram.com/canalkl_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <p>Desenvolvido por Fellipe Leite.</p>
      </div>
    </footer>
  );
}