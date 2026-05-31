"use client";

import { useState } from "react";
import { FEATURES, type FeatureStatus } from "@/lib/constants";
import { DynamicIcon } from "@/components/dynamic-icon";

const STATUS_CONFIG: Record<
  FeatureStatus,
  { label: string; dotClass: string; badgeClass: string }
> = {
  available: {
    label: "Available",
    dotClass: "bg-success",
    badgeClass: "border-success/20 bg-success/5 text-success",
  },
  next: {
    label: "Coming next",
    dotClass: "bg-warning",
    badgeClass: "border-warning/20 bg-warning/5 text-warning",
  },
  planned: {
    label: "Roadmap",
    dotClass: "bg-text-dim",
    badgeClass: "border-border bg-bg-elevated text-text-dim",
  },
};

const TABS: { key: FeatureStatus | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "available", label: "Available now" },
  { key: "next", label: "Coming next" },
  { key: "planned", label: "Roadmap" },
];

export function FeaturesSection() {
  const [active, setActive] = useState<FeatureStatus | "all">("all");

  const filtered =
    active === "all"
      ? FEATURES
      : FEATURES.filter((f) => f.status === active);

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-glow)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ask in English. Review the query.{" "}
            <span className="gradient-text">Trust the answer.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Generated queries should be visible, explainable, and reviewable.
            Helium is building the full analyst stack, one layer at a time.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-1 mb-10 bg-bg-elevated/50 backdrop-blur-sm rounded-lg border border-border p-1 w-fit mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
                active === tab.key
                  ? "bg-bg-muted text-text"
                  : "text-text-dim hover:text-text-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((feature) => {
            const cfg = STATUS_CONFIG[feature.status];
            return (
              <div
                key={feature.title}
                className="glass glass-hover rounded-xl p-5 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-muted border border-border group-hover:border-border-hover transition-colors">
                    <DynamicIcon
                      name={feature.icon}
                      className="h-4 w-4 text-text-secondary group-hover:text-text transition-colors"
                    />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-mono ${cfg.badgeClass}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${cfg.dotClass}`}
                    />
                    {cfg.label}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-text mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
