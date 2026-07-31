import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingFeatures from "@/components/PricingFeatures";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Harga - Elyra POS",
  description:
    "Pilihan paket langganan Elyra POS: Basic, Pro, dan Enterprise. Tanpa biaya tersembunyi. Bandingkan fitur setiap paket dan jadwalkan demo.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <section className="pt-20 lg:pt-24">
          <h1 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Pilih Paket Sesuai Kebutuhan Usaha Anda
          </h1>
        </section>
        <PricingFeatures />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
