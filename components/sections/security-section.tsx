import { SECURITY_PRINCIPLES } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";
import { Shield } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary-glow)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
            <Shield className="h-3 w-3" />
            Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Designed for safety.{" "}
            <span className="gradient-text">Not an afterthought.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Business users need answers, but engineering teams need safety.
            Helium is designed so both can coexist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_PRINCIPLES.map((item) => (
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
                {!item.available && (
                  <span className="inline-flex items-center rounded-md border border-border bg-bg-elevated px-2 py-0.5 text-[10px] font-mono text-text-dim">
                    Roadmap
                  </span>
                )}
                {item.available && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-success/20 bg-success/5 px-2 py-0.5 text-[10px] font-mono text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Active
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
