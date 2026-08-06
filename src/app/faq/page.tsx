import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqHero from "@/components/FaqHero";
import FaqTabs from "@/components/FaqTabs";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pusat Bantuan | Elyra POS",
  description:
    "Elyra POS selalu siap membantu Anda. Temukan jawaban pertanyaan umum, cara berlangganan, dan cara menggunakan aplikasi kasir Elyra POS.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <FaqHero />
        <FaqTabs />

        <section className="border-t border-line bg-mint-soft/50 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:px-6 lg:text-left">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Masih ada pertanyaan? Hubungi kami</h2>
              <p className="mt-1 text-muted">
                Tim kami siap memandu Anda mengenal Elyra POS dan langkah-langkah penggunaannya.
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
