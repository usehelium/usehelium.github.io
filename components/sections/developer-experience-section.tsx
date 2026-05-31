import { DX_ITEMS } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";
import { Terminal } from "lucide-react";

export function DeveloperExperienceSection() {
  return (
    <section id="developer-experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            <Terminal className="h-3 w-3" />
            Developer experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Engineers deserve{" "}
            <span className="gradient-text">clean infrastructure.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Helium is built with the same standards you expect from the tools you
            already trust.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DX_ITEMS.map((item) => (
            <div
              key={item.title}
              className="glass glass-hover rounded-xl p-5 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-muted border border-border group-hover:border-border-hover transition-colors">
                  <DynamicIcon
                    name={item.icon}
                    className="h-4 w-4 text-text-secondary"
                  />
                </div>
                {"roadmap" in item && item.roadmap && (
                  <span className="inline-flex items-center rounded-md border border-border bg-bg-elevated px-2 py-0.5 text-[10px] font-mono text-text-dim">
                    Roadmap
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-text mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
