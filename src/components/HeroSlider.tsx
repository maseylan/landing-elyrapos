"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, SITE } from "@/lib/site";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // ponytail: auto-play via setInterval, no slider lib
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-svh overflow-hidden" aria-label="Beranda">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={slide.image} alt="" fill priority={i === 0} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
          <div key={index} className="max-w-2xl text-white animate-fade-up">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {HERO_SLIDES[index].title}
            </h1>
            {HERO_SLIDES[index].subtitle && (
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                {HERO_SLIDES[index].subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.registerUrl}
                className="rounded-lg bg-mint px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-white"
              >
                Coba Gratis
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-white/80 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-ink"
              >
                Jadwalkan Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-mint" : "w-2.5 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
