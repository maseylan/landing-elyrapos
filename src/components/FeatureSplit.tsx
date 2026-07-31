import Image from "next/image";
import { FEATURES } from "@/lib/site";

export default function FeatureSplit() {
  return (
    <section id="layanan" className="space-y-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-20 px-4 lg:px-6">
        {FEATURES.map((f) => (
          <div
            key={f.eyebrow}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${f.reversed ? "lg:[direction:rtl]" : ""}`}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg lg:[direction:ltr]">
              <Image
                src={f.image}
                alt={f.title}
                width={1280}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:[direction:ltr]">
              <p className="text-sm font-bold uppercase tracking-wide text-brand">{f.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-snug text-ink sm:text-3xl lg:text-4xl">
                {f.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
              <a href={f.link.href} className="mt-6 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-dark">
                {f.link.label}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
