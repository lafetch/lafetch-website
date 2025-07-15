import AppPlugin from "@/components/landingPage/AppPlugin";
import BottomVideoSection from "@/components/landingPage/BottomVideoSection";
import BrandsList from "@/components/landingPage/BrandsList";
import FeaturesParallax from "@/components/landingPage/FeaturesParallax";
import HeroSection from "@/components/landingPage/HeroSection";
import Mission from "@/components/landingPage/Mission";
import VideoSection from "@/components/landingPage/VideoSection";
import MobilePage from "@/components/MobilePage";
import type { Metadata } from "next";







export const metadata: Metadata = {
  title: "Lafetch",
  description:
    "We’re on a quest to create a one stop shop by constantly collaborating with home grown brands where every find tells a story, and it’s all just a click away.",
};


export default function Home() {
  return (
    <>
      <main className="hidden lg:block">
        <HeroSection />
        <VideoSection />
        <AppPlugin />
        <Mission />
        <FeaturesParallax />
        <BrandsList />
        <BottomVideoSection />
      </main>
      <main className="lg:hidden">
        <MobilePage />
      </main>
    </>
  );
}
