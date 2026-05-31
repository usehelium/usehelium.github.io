import { OPEN_SOURCE_PILLARS, GITHUB_URL } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";
import { GithubIcon } from "@/components/github-icon";
import { ChevronRight } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Open-source because the analyst layer{" "}
            <span className="gradient-text">should belong to the teams running the data.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            MIT-licensed, contributor-friendly, and built in public.
            The best data infrastructure is shaped by the people who use it.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OPEN_SOURCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="glass glass-hover rounded-xl p-5 transition-all group text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-muted border border-border group-hover:border-border-hover mx-auto mb-3 transition-colors">
                <DynamicIcon
                  name={pillar.icon}
                  className="h-4 w-4 text-text-secondary group-hover:text-text transition-colors"
                />
              </div>
              <h3 className="text-sm font-semibold text-text mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={`${GITHUB_URL}/blob/main/docs/adapters.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            Contribute an adapter
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
