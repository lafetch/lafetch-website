import AboutHero from "@/components/aboutPage/AboutHero";
import AboutMission from "@/components/aboutPage/AboutMission";
import BottomSection from "@/components/aboutPage/BottomSection";
import Categories from "@/components/aboutPage/Categories";
import FeaturesSection from "@/components/aboutPage/FeaturesSection";
import ValuesSection from "@/components/aboutPage/OurValues";
import VideoSection from "@/components/aboutPage/VideoSection";
import MobilePage from "@/components/MobilePage";

export const metadata = {
  title: "Lafetch -About Us",
  description:
    " We’re a fashion marketplace that celebrates home-grown brands and effortless style. ",
};

import React from "react";

function page() {
  return (
    <>
      <div className="hidden lg:block">
        <AboutHero />
        <AboutMission />
        <Categories />
        <VideoSection />
        <ValuesSection />
        <FeaturesSection />
        <BottomSection />
      </div>
      <div className="lg:hidden">
        <MobilePage />
      </div>
    </>
  );
}

export default page;
