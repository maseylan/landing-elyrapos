import { PRICING_PER, PRICING_PLANS } from "@/lib/site";

export type Plan = (typeof PRICING_PLANS)[number];

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-6 text-center shadow-lg ${
        plan.popular ? "shadow-xl ring-2 ring-mint" : "shadow-lg"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint px-4 py-1 text-xs font-bold text-ink">
          Popular
        </span>
      )}
      <p className="font-bold text-ink">{plan.name}</p>
      <p className="mt-2 text-3xl font-extrabold text-ink">{plan.price}</p>
      <p className="mt-1 text-xs text-muted">{PRICING_PER}</p>
      <p className="mt-4 min-h-12 text-sm font-semibold text-muted">{plan.desc}</p>
      <a
        href={plan.cta.href}
        target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`mt-5 block w-full rounded-lg py-3 text-sm font-bold transition-colors ${
          plan.popular ? "bg-brand text-white hover:bg-brand-dark" : "border border-brand text-brand hover:bg-mint-soft"
        }`}
      >
        {plan.cta.label}
      </a>
    </div>
  );
}
