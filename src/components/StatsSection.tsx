import { STATS } from "@/lib/site";

export default function StatsSection() {
  return (
    <section className="bg-brand py-14 text-white lg:py-20" aria-label="Statistik">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4 lg:px-6">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm font-semibold text-white/75">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
