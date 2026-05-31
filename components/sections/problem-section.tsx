import { PROBLEMS } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            The problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your database is powerful.{" "}
            <span className="text-text-secondary">
              Your team should not need to wait three days for every answer.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Dashboards answer known questions. Helium helps you explore the unknown ones.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="glass glass-hover rounded-xl p-6 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <DynamicIcon
                    name={problem.icon}
                    className="h-4 w-4 text-primary"
                  />
                </div>
                <h3 className="text-sm font-semibold text-text">
                  {problem.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
