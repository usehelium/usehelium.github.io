import { TRUST_ITEMS } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-border bg-bg-elevated/30 py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <DynamicIcon name={item.icon} className="h-4 w-4 text-text-dim" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
