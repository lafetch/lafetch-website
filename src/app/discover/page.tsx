import BrandCarousel from "@/components/discoverPage/BrandCarousel";
import CuratedForYou from "@/components/discoverPage/CuratedForYou";
import DiscoverHero from "@/components/discoverPage/DiscoverHero";

// import Marquee from "@/components/Marquee/Marque";

import MobilePage from "@/components/MobilePage";
import React from "react";

function page() {
  // const images = [
  //   "/brand-logos/1.png",
  //   "/brand-logos/2.png",
  //   "/brand-logos/3.png",
  //   "/brand-logos/4.png",
  //   "/brand-logos/5.png",
  //   "/brand-logos/6.png",
  //   "/brand-logos/7.png",
  //   "/brand-logos/8.png",
  //   "/brand-logos/9.png",
  //   "/brand-logos/10.png",
  //   "/brand-logos/11.png",
  //   "/brand-logos/12.png",
  //   "/brand-logos/13.png",
  //   "/brand-logos/14.png",
  //   "/brand-logos/15.png",
  //   "/brand-logos/16.png",
  //   "/brand-logos/17.png",
  //   "/brand-logos/18.png",
  //   "/brand-logos/19.png",
  //   "/brand-logos/20.png",
  //   "/brand-logos/21.png",
  // ];
  // const images2 = [
  //   "/brand-logos/22.png",
  //   "/brand-logos/23.png",
  //   "/brand-logos/24.png",
  //   "/brand-logos/25.png",
  //   "/brand-logos/26.png",
  //   "/brand-logos/27.png",
  //   "/brand-logos/28.png",
  //   "/brand-logos/29.png",
  //   "/brand-logos/30.png",
  //   "/brand-logos/31.png",
  //   "/brand-logos/32.png",
  //   "/brand-logos/33.png",
  //   "/brand-logos/34.png",
  //   "/brand-logos/35.png",
  //   "/brand-logos/36.png",
  //   "/brand-logos/37.png",
  //   "/brand-logos/38.png",
  //   "/brand-logos/39.png",

  //   "/brand-logos/40.png",
  //   "/brand-logos/41.png",
  // ];
  return (
    <>
      <div className="hidden lg:block">
        {/* <ComingSoon /> */}
        <DiscoverHero />
        {/* <div className="w-full h-full flex flex-col gap-2 py-10 ">
          <Marquee images={images} />
          <Marquee images={images2} />
        </div> */}

        <BrandCarousel />

        <CuratedForYou />
      </div>
      <div className="lg:hidden">
        <MobilePage />
      </div>
    </>
  );
}

export default page;
