import { ARCHITECTURE_LAYERS } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";
import { ChevronDown } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-glow)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built with safety{" "}
            <span className="gradient-text">before execution.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Every database is an adapter. New adapters implement a common interface.
            Safety and validation sit before execution. Semantic context improves
            accuracy over time.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="flex flex-col items-center space-y-0">
          {ARCHITECTURE_LAYERS.map((layer, idx) => (
            <div key={layer.label} className="flex flex-col items-center w-full max-w-sm">
              <div
                className={`glass glass-hover w-full rounded-xl p-4 flex items-center gap-3 transition-all group ${
                  layer.color === "primary"
                    ? "hover:border-primary/30"
                    : "hover:border-accent/30"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    layer.color === "primary"
                      ? "bg-primary/5 border-primary/10 group-hover:bg-primary/10"
                      : "bg-accent/5 border-accent/10 group-hover:bg-accent/10"
                  }`}
                >
                  <DynamicIcon
                    name={layer.icon}
                    className={`h-4 w-4 ${
                      layer.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  />
                </div>
                <span className="text-sm font-medium text-text">
                  {layer.label}
                </span>
                <span className="ml-auto text-[10px] font-mono text-text-dim">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              {idx < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="h-3 w-px bg-border" />
                  <ChevronDown className="h-3 w-3 text-text-dim" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
