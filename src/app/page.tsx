import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import VideoSection from "@/components/VideoSection";
import FeatureSplit from "@/components/FeatureSplit";
import FullBanner from "@/components/FullBanner";
import MerchantSlider from "@/components/MerchantSlider";
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

        <FAQAccordion />
        <SEOArticle />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
