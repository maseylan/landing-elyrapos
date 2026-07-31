import Image from "next/image";
import { FULL_BANNERS } from "@/lib/site";

export default function FullBanner() {
  const [b1, b2] = FULL_BANNERS;
  return (
    <section>
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[320px] lg:h-[480px]">
          <Image src={b1.image} alt="" fill className="object-cover" />
        </div>
        <div className="flex items-center bg-mint-soft px-6 py-14 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl lg:text-4xl">
              {b1.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{b1.body}</p>
            <a
              href={b1.link.href}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              {b1.link.label}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden lg:h-[460px]">
        <Image src={b2.image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
            <div className="max-w-xl text-white">
              <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
                {b2.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">{b2.body}</p>
              <a
                href={b2.link.href}
                target={b2.link.href.startsWith("http") ? "_blank" : undefined}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-mint px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                {b2.link.label}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
