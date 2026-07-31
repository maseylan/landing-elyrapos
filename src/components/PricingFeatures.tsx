"use client";

import { useState } from "react";
import PlanCard from "@/components/PlanCard";
import { PRICING_FEATURES, PRICING_PLANS, PRICING_PER } from "@/lib/site";

function Cell({ value, popular }: { value: string; popular: boolean }) {
  const wrap = `flex h-full w-full items-center justify-center p-3 ${popular ? "bg-mint-soft/60" : ""}`;
  if (value === "check") {
    return (
      <div className={wrap}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-mint">
          <path d="m1 6 5 5L16 1" />
        </svg>
      </div>
    );
  }
  if (value === "x") {
    return (
      <div className={wrap}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-muted/40">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </div>
    );
  }
  return (
    <div className={wrap}>
      <p className="text-center text-xs font-semibold leading-snug text-muted">{value}</p>
    </div>
  );
}

export default function PricingFeatures() {
  const [openPlan, setOpenPlan] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">Fitur</h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-16 hidden overflow-hidden rounded-2xl border border-line lg:block">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div />
            {PRICING_PLANS.map((plan) => (
              <div key={plan.name} className={`px-4 py-6 text-center ${plan.popular ? "bg-mint-soft/60" : ""}`}>
                <p className="font-bold text-ink">{plan.name}</p>
                <p className="mt-1 text-xl font-extrabold text-ink">{plan.price}</p>
                <p className="text-xs text-muted">{PRICING_PER}</p>
                <a
                  href={plan.cta.href}
                  target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`mt-3 inline-block rounded-lg px-5 py-2 text-xs font-bold transition-colors ${
                    plan.popular ? "bg-brand text-white hover:bg-brand-dark" : "border border-brand text-brand hover:bg-mint-soft"
                  }`}
                >
                  {plan.cta.label}
                </a>
              </div>
            ))}

            {PRICING_FEATURES.map((group) => (
              <div key={group.title} className="col-span-4 grid grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-4 border-t border-line bg-mint-soft/40 px-4 py-3 font-bold text-brand">
                  {group.title}
                </p>
                {group.rows.map((row) => (
                  <div key={row.name} className="col-span-4 grid grid-cols-[1.5fr_1fr_1fr_1fr] border-t border-line">
                    <p className="flex items-center px-4 py-3 text-sm font-semibold text-ink">{row.name}</p>
                    {row.values.map((v, i) => (
                      <Cell key={i} value={v} popular={i === 1} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-4 lg:hidden">
          {PRICING_PLANS.map((plan, i) => {
            const isOpen = openPlan === i;
            return (
              <div key={plan.name} className="overflow-hidden rounded-xl border border-line">
                <button
                  onClick={() => setOpenPlan(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-bold text-ink">{plan.name}</span>
                    <span className="text-sm font-bold text-brand">{plan.price}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    {plan.popular && <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">Popular</span>}
                    <svg className={`h-4 w-4 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <ul className="border-t border-line">
                    {PRICING_FEATURES.flatMap((g) => g.rows).map((row) => (
                      <li key={row.name} className="flex items-center justify-between gap-3 px-5 py-3">
                        <span className="text-sm text-ink">{row.name}</span>
                        <span className="shrink-0">
                          <Cell value={row.values[i]} popular={false} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
