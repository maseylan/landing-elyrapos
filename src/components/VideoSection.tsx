"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURE_VIDEO } from "@/lib/site";

// ponytail: video placeholder (embed later), no video lib

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-ink py-16 text-white lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
        <button
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-2xl"
          aria-label="Putar video demo"
        >
          <Image
            src={FEATURE_VIDEO.image}
            alt="Video demo Elyra POS"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-mint text-ink shadow-xl transition-transform group-hover:scale-110">
              <svg className="ml-1 h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-mint">Elyra POS</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
            {FEATURE_VIDEO.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">{FEATURE_VIDEO.body}</p>
          <ul className="mt-6 space-y-3">
            {FEATURE_VIDEO.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div className="w-full max-w-4xl">
            <div className="flex aspect-video items-center justify-center rounded-xl bg-white/10 text-sm text-white/60">
              Video demo akan ditambahkan di sini
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mx-auto mt-4 block text-sm font-semibold text-white/80 hover:text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
