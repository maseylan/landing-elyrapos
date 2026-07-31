import Image from "next/image";
import { SITE } from "@/lib/site";

export default function FaqHero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Temukan jawaban untuk setiap pertanyaan Anda
          </h1>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-mint px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-white"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
