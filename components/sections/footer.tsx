import { FOOTER_SECTIONS, GITHUB_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-primary font-mono font-semibold text-sm">
                  He
                </span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-text">
                Helium
              </span>
            </a>
            <p className="text-xs text-text-dim leading-relaxed">
              Open-source analyst layer
              <br />
              for your database.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-text-secondary hover:text-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {year} Helium. MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-dim hover:text-text-secondary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
