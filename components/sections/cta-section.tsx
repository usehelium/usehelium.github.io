import { ArrowRight, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { GITHUB_URL, DOCS_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-glow)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="glass rounded-2xl px-8 py-14 md:px-14 md:py-20 border border-border hover:border-primary/30 transition-colors">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Start asking your database{" "}
              <span className="gradient-text">questions.</span>
            </h2>
            <p className="mx-auto max-w-lg text-text-secondary mb-10">
              Open-source, self-hostable, and built for teams that need fast,
              trusted answers. Connect any database. Extend through adapters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GITHUB_URL}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-bg hover:bg-primary-hover transition-all glow-primary"
              >
                <GithubIcon className="h-4.5 w-4.5" />
                Star on GitHub
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={DOCS_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-medium text-text-secondary hover:text-text hover:border-border-hover transition-all"
              >
                <BookOpen className="h-4.5 w-4.5" />
                Read Docs
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-text-dim">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                MIT Licensed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Adapter-first
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Self-hostable
              </span>
            </div>
          </div>
      </div>
    </section>
  );
}
