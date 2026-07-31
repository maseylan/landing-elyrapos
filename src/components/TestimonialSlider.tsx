"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/site";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-mint-soft py-16 lg:py-24" aria-label="Testimoni">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <div key={index} className="animate-fade-up">
          <Image
            src={t.photo}
            alt={t.name}
            width={96}
            height={96}
            className="mx-auto h-24 w-24 rounded-full object-cover shadow-md"
          />
          <blockquote className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-ink sm:text-xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="mt-5 font-bold text-brand">{t.name}</p>
          <p className="text-sm text-muted">{t.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimoni ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-brand" : "w-2.5 bg-brand/30 hover:bg-brand/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
