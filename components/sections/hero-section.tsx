import { ChevronRight, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { HERO_BADGES, GITHUB_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-radial" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float-glow" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float-glow [animation-delay:2s]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/80 backdrop-blur-sm px-4 py-1.5 text-xs text-text-secondary mb-8">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Open-source AI analyst for your database — adapter-first, self-hostable, and built for teams.
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Ask your database{" "}
          <span className="gradient-text">questions.</span>
          <br />
          Keep control of the{" "}
          <span className="gradient-text">queries.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
          Helium lets you connect your database, ask questions in plain English,
          inspect generated queries, and get trusted answers from your own data.
          Start with MySQL today, extend to any database tomorrow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={GITHUB_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-bg hover:bg-primary-hover transition-all glow-primary hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-medium text-text-secondary hover:text-text hover:border-border-hover transition-all"
          >
            <GithubIcon className="h-4.5 w-4.5" />
            Star on GitHub
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {HERO_BADGES.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium font-mono ${
                badge.variant === "primary"
                  ? "border-primary/30 bg-primary/5 text-primary"
                  : badge.variant === "accent"
                    ? "border-accent/30 bg-accent/5 text-accent"
                    : "border-border bg-bg-elevated text-text-secondary"
              }`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
