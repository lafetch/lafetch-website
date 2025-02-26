"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import localFont from "next/font/local";

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function FeaturesParallax() {
  const ParallaxImages = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".parallax-one",
            start: "top 10%", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline.to(".parallax-img", {
          y: -300,

          ease: "power1.inOut",
        });
        const timeline2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".parallax-two",
            start: "top 10%", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline2.to(".parallax-img-2", {
          y: -300,

          ease: "power1.inOut",
        });
        const timeline3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".parallax-three",
            start: "top 10%", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline3.to(".parallax-img-3", {
          y: -300,

          ease: "power1.inOut",
        });
      }, ParallaxImages);

      return () => ctx.revert();
    },
    { scope: ParallaxImages }
  );
  return (
    <div
      className="h-full flex flex-col justify-center items-center"
      ref={ParallaxImages}
    >
      <div className="relative h-screen w-full parallax-one">
        <div className="sticky top-0 h-fit 2xl:h-1/3 bg-black text-white flex w-full justify-between items-start p-20  z-30 ">
          <h1 className={`flex-1 ${primary.className} text-6xl 2xl:text-7xl`}>
            Homegrown <br /> fashion
          </h1>
          <h3
            className={`flex-1 ${secondary.className} text-lg 2xl:text-xl 2xl:leading-8`}
          >
            LAFETCH is a cutting-edge online fashion e-commerce app, connecting
            shoppers to a curated selection of homegrown brands. Every product
            is 100% authentic, ensuring quality and trust in every detail.
          </h3>
        </div>
        <Image
          src="/features_1.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className=" w-full h-full object-cover relative  z-0 parallax-img  opacity-60 object-top"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="relative h-screen w-full parallax-two">
        <div className="sticky top-0 h-fit 2xl:h-1/3 bg-black text-white flex w-full justify-between items-start p-20  z-30 ">
          <h1 className={`flex-1 ${primary.className} text-6xl 2xl:text-7xl`}>
            Quick <br /> Deliveries
          </h1>
          <h3
            className={`flex-1 ${secondary.className} text-lg 2xl:text-xl 2xl:leading-8`}
          >
            Fast, reliable, and hassle-free delivery because waiting shouldn’t
            stand in the way of enjoying what you love! <br /> <br /> Get your
            orders in Delhi NCR delivered within 2 hours with express delivery!
          </h3>
        </div>
        <Image
          src="/features_2.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className=" w-full h-full object-cover relative  z-0 parallax-img-2  opacity-60 object-top"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="relative h-screen w-full parallax-three">
        <div className="sticky top-0 h-fit 2xl:h-1/3 bg-black text-white flex w-full justify-between items-start p-20 z-30 ">
          <h1 className={`flex-1 ${primary.className} text-6xl 2xl:text-7xl`}>
            Hassle free <br /> Exchange{" "}
          </h1>
          <h3
            className={`flex-1 ${secondary.className} text-lg 2xl:text-xl 2xl:leading-8`}
          >
            Enjoy easy exchanges with up to two easy returns, ensuring you
            always find the perfect fit without any stress.
          </h3>
        </div>
        <Image
          src="/features_3.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className=" w-full h-full object-cover relative  z-0 parallax-img-3  opacity-60 object-top"
          priority={true}
          loading="eager"
        />
      </div>
      <div className="h-full bg-black text-white flex w-full justify-between items-center px-20 2xl:px-32 p-10 2xl:p-20 z-30 ">
        <div className="flex justify-between flex-col items-center gap-8 h-full">
          <Image
            src="/symbol_1.svg"
            alt="homegrown"
            width={120}
            height={100}
            className="object-cover  "
          />
          <h1>100% AUTHENTIC</h1>
        </div>
        <div className="flex justify-between flex-col items-center gap-8 h-full">
          <Image
            src="/symbol_2.svg"
            alt="homegrown"
            width={70}
            height={100}
            className="object-cover  "
          />
          <h1 className="text-center">
            30 MINUTE DELIVERY <br /> IN DELHI NCR
          </h1>
        </div>
        <div className="flex justify-between flex-col items-center gap-8 h-full">
          <Image
            src="/symbol_4.svg"
            alt="homegrown"
            width={120}
            height={100}
            className="object-cover  "
          />
          <h1 className="text-center">
            FAST DELIVERIES <br />
            PAN INDIA{" "}
          </h1>
        </div>
        <div className="flex justify-center flex-col items-center gap-8">
          <Image
            src="/symbol_3.svg"
            alt="homegrown"
            width={120}
            height={100}
            className="object-cover "
          />
          <h1>HASSLE FREE EXCHANGE</h1>
        </div>
      </div>
    </div>
  );
}

export default FeaturesParallax;
