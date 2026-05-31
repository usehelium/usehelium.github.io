import { USE_CASES } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Use cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for every team{" "}
            <span className="gradient-text">that needs answers.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Different roles, same need: fast, trusted answers from the database
            without waiting on analysts or query experts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((uc) => (
            <div
              key={uc.role}
              className="glass glass-hover rounded-xl p-5 transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-muted border border-border group-hover:border-primary/20 group-hover:bg-primary/5 mb-3 transition-colors">
                <DynamicIcon
                  name={uc.icon}
                  className="h-4 w-4 text-text-dim group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="text-sm font-semibold text-text mb-2">
                {uc.role}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed italic">
                &ldquo;{uc.question}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
