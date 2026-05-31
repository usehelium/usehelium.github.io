import { WORKFLOW_STEPS } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";
import { ArrowDown } from "lucide-react";

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            From question to answer,{" "}
            <span className="gradient-text">safely.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Every step is visible. Every query is reviewed before execution.
            No hidden operations.
          </p>
        </div>

        <div className="space-y-0">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div key={step.step}>
              <div className="flex items-start gap-5 group">
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-muted border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    <DynamicIcon
                      name={step.icon}
                      className="h-4 w-4 text-text-dim group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-text-dim">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="flex items-center ml-5 -mt-4 mb-0">
                  <div className="h-6 w-px bg-border ml-[19px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
