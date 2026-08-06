import { PRICING_PER, PRICING_PLANS } from "@/lib/site";

export type Plan = (typeof PRICING_PLANS)[number];

export default function PlanCard({ plan }: { plan: Plan }) {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 text-center transition-all duration-300 ${
        isPopular
          ? "bg-brand text-white shadow-xl border border-brand-dark/20 lg:-translate-y-2"
          : "border border-line bg-white text-ink shadow-sm hover:shadow-md"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3.5 py-0.5 text-xs font-medium text-white border border-white/25 backdrop-blur-sm">
          Popular
        </span>
      )}
      <div>
        <p className={`font-bold ${isPopular ? "text-white" : "text-ink"}`}>{plan.name}</p>
        <p className={`mt-2 text-3xl sm:text-4xl font-extrabold ${isPopular ? "text-white" : "text-ink"}`}>
          {plan.price}
        </p>
        <p className={`mt-1 text-xs ${isPopular ? "text-white/80" : "text-muted"}`}>{PRICING_PER}</p>
        <p className={`mt-4 min-h-12 text-sm ${isPopular ? "text-white/90" : "text-muted"}`}>
          {plan.desc}
        </p>
      </div>
      <a
        href={plan.cta.href}
        target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`mt-6 block w-full rounded-xl py-3 text-sm font-bold transition-colors ${
          isPopular
            ? "bg-white text-brand hover:bg-slate-100 shadow-sm"
            : "border border-brand text-brand hover:bg-brand hover:text-white"
        }`}
      >
        {plan.cta.label}
      </a>
    </div>
  );
}
