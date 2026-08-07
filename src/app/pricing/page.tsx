import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingFeatures from "@/components/PricingFeatures";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Harga - Elyra POS",
  description:
    "Pilihan paket langganan Elyra POS: Free dan Enterprise. Tanpa biaya tersembunyi. Bandingkan fitur setiap paket dan jadwalkan demo.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingFeatures />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
