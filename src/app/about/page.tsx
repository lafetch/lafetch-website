import AboutHero from "@/components/aboutPage/AboutHero";
import AboutMission from "@/components/aboutPage/AboutMission";
import BottomSection from "@/components/aboutPage/BottomSection";
import Categories from "@/components/aboutPage/Categories";
import FeaturesSection from "@/components/aboutPage/FeaturesSection";
import ValuesSection from "@/components/aboutPage/OurValues";
import VideoSection from "@/components/aboutPage/VideoSection";

import React from "react";

function page() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <Categories />
      <VideoSection />
      <ValuesSection />
      <FeaturesSection />
      <BottomSection />
    </>
  );
}

export default page;
