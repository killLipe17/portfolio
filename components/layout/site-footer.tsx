export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-9 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-foreground">
            LIPEXP <span className="text-accent">STUDIO</span>
          </strong>

          <p className="mt-1">
            Web Design & Development • por Fellipe Leite
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a
            className="social-link"
            href="https://www.instagram.com/lipexpstudio/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

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
        </div>

        <div className="md:text-right">
          <p>Level up your business.</p>

          <p className="mt-1 text-xs">
            Desenvolvido por Fellipe Leite.
          </p>
        </div>
      </div>
    </footer>
  );
}