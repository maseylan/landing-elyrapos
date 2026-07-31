import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import VideoSection from "@/components/VideoSection";
import FeatureSplit from "@/components/FeatureSplit";
import FullBanner from "@/components/FullBanner";
import MerchantSlider from "@/components/MerchantSlider";
import StatsSection from "@/components/StatsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import SEOArticle from "@/components/SEOArticle";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />

        <VideoSection />
        <FeatureSplit />
        <FullBanner />
        <MerchantSlider />
        <StatsSection />

        <section className="py-16 text-center lg:py-24">
          <div className="mx-auto h-1 w-16 rounded-full bg-mint" />
          <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Lebih dari 45 Ribu Pebisnis Memakai Elyra POS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Puluhan ribu pelaku usaha menjalankan transaksi hariannya dengan Elyra POS agar operasionalnya selalu tertata.
          </p>
        </section>

        <TestimonialSlider />
        <FAQAccordion />
        <SEOArticle />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
