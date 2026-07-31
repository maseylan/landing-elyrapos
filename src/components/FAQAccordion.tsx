"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/site";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          Masih ada pertanyaan? Baca jawabannya di sini
        </h2>
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="overflow-hidden rounded-xl border border-line">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-bold text-ink">{item.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform ${isOpen ? "rotate-45 bg-brand text-white" : "bg-mint-soft text-brand"}`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="border-t border-line px-5 py-4 leading-relaxed text-muted">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
