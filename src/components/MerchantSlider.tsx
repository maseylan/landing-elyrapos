"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MERCHANTS } from "@/lib/site";

export default function MerchantSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % MERCHANTS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden lg:h-[500px]" aria-label="Dibuat untuk beragam jenis usaha">
      {MERCHANTS.map((m, i) => (
        <div
          key={m.name}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={m.image} alt={m.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                Dibuat untuk Beragam Jenis Usaha
              </h2>
              <p className="mt-3 max-w-md text-white/80">
                Setiap usaha punya cara kerjanya sendiri. Elyra POS menyesuaikan fitur dengan kebutuhan operasional Anda.
              </p>
            </div>
            <ul className="space-y-2 text-lg font-bold text-white">
              {MERCHANTS.map((m, i) => (
                <li key={m.name}>
                  <Link
                    href={m.href}
                    onClick={() => setIndex(i)}
                    className={`relative block py-2 pr-8 transition-colors ${i === index ? "text-mint" : "text-white/60 hover:text-white"}`}
                  >
                    {m.name}
                    {i === index && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-mint" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
