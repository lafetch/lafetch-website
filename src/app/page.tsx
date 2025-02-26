import Footer from "@/components/Footer";
import AppPlugin from "@/components/landingPage/AppPlugin";
import BottomVideoSection from "@/components/landingPage/BottomVideoSection";
import BrandsList from "@/components/landingPage/BrandsList";
import Categories from "@/components/aboutPage/Categories";
import FeaturesParallax from "@/components/landingPage/FeaturesParallax";
import HeroSection from "@/components/landingPage/HeroSection";
import Mission from "@/components/landingPage/Mission";
import VideoSection from "@/components/landingPage/VideoSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <VideoSection />
      <AppPlugin />
      <Mission />
      <FeaturesParallax />
      <BrandsList />
      <BottomVideoSection />
      <Footer />
    </main>
  );
}
