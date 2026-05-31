import { ROADMAP } from "@/lib/constants";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const COLUMN_CONFIG = {
  now: {
    icon: CheckCircle,
    dotClass: "bg-success",
    headerClass: "text-success",
    borderClass: "border-success/20",
  },
  next: {
    icon: Clock,
    dotClass: "bg-warning",
    headerClass: "text-warning",
    borderClass: "border-warning/20",
  },
  later: {
    icon: Calendar,
    dotClass: "bg-text-dim",
    headerClass: "text-text-dim",
    borderClass: "border-border",
  },
} as const;

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-glow)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ambitious vision,{" "}
            <span className="gradient-text">honest timeline.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            We are building Helium one layer at a time. Here is what is available,
            what is next, and what is on the horizon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {(Object.keys(ROADMAP) as Array<keyof typeof ROADMAP>).map((key) => {
            const col = ROADMAP[key];
            const cfg = COLUMN_CONFIG[key];
            const Icon = cfg.icon;

            return (
              <div
                key={key}
                className={`glass rounded-xl overflow-hidden border ${cfg.borderClass}`}
              >
                <div className="px-5 py-4 border-b border-border bg-bg-elevated/30">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${cfg.headerClass}`} />
                    <h3 className={`text-base font-semibold ${cfg.headerClass}`}>
                      {col.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-dim mt-0.5">
                    {col.description}
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${cfg.dotClass}`}
                      />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
