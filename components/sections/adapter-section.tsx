import { ADAPTERS, ADAPTER_INTERFACE_CODE, type AdapterStatus } from "@/lib/constants";
import { Database, CheckCircle, Clock, FlaskConical } from "lucide-react";

const STATUS_STYLES: Record<
  AdapterStatus,
  { icon: typeof CheckCircle; badgeClass: string }
> = {
  available: {
    icon: CheckCircle,
    badgeClass: "border-success/20 bg-success/5 text-success",
  },
  next: {
    icon: Clock,
    badgeClass: "border-warning/20 bg-warning/5 text-warning",
  },
  planned: {
    icon: Clock,
    badgeClass: "border-border bg-bg-elevated text-text-dim",
  },
  experimental: {
    icon: FlaskConical,
    badgeClass: "border-accent/20 bg-accent/5 text-accent",
  },
};

export function AdapterSection() {
  return (
    <section id="adapters" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Adapters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Every database is just{" "}
            <span className="gradient-text">another adapter.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Helium is designed so every database integration follows a clean contract.
            Connect to MySQL, PostgreSQL, MongoDB, and more through adapters.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Adapter Interface */}
          <div className="glass rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated/30">
              <Database className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-text-secondary font-mono">
                DatabaseAdapter Interface
              </span>
            </div>
            <div className="p-5 bg-bg-subtle/20">
              <pre className="code-block text-xs leading-relaxed overflow-x-auto">
                <code>{ADAPTER_INTERFACE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Adapter Cards */}
          <div className="grid grid-cols-2 gap-3">
            {ADAPTERS.map((adapter) => {
              const cfg = STATUS_STYLES[adapter.status];
              const StatusIcon = cfg.icon;
              return (
                <div
                  key={adapter.name}
                  className="glass glass-hover rounded-xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-muted border border-border group-hover:border-border-hover transition-colors">
                      <Database className="h-3.5 w-3.5 text-text-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-text">
                      {adapter.name}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-mono ${cfg.badgeClass}`}
                  >
                    <StatusIcon className="h-2.5 w-2.5" />
                    {adapter.statusLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
