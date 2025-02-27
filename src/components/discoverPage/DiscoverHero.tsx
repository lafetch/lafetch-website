"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

gsap.registerPlugin(ScrollTrigger);

function DiscoverHero() {
  const DiscoverBannerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: DiscoverBannerRef.current,
              start: "top top", // Aligns the top of the trigger to the top of the viewport
              end: "bottom bottom", // Ends when the bottom of the trigger aligns with the bottom of the viewport
              scrub: 1,
            },
          });

          timeline
            .to(".discover-bg", {
              height: "100vh",
              duration: 1,
              ease: "power1.inOut",
            })
            .to(
              ".text-1",
              {
                x: "0",
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              ".text-2",
              {
                y: "0",
                duration: 1,
                opacity: 1,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              ".text-3",
              {
                x: "0",
                duration: 1,
                opacity: 1,
                ease: "power1.inOut",
              },
              "<"
            );
        }, DiscoverBannerRef);

        return () => ctx.revert();
      }
    },
    { scope: DiscoverBannerRef }
  );

  return (
    <section
      id="discover-banner-wrapper"
      className="relative h-[200vh] "
      ref={DiscoverBannerRef}
    >
      {/* Sticky Section */}
      <div
        id="banner"
        className="p-20 py-28 flex justify-center gap-14 items-center h-screen max-w-8xl sticky top-0 overflow-hidden"
      >
        <Image
          src="/discover-hero.png"
          alt="discover background Image"
          priority={true}
          width={2000}
          height={2000}
          className="h-2/3 object-contain discover-bg absolute "
        />
        <div
          className={`flex text-5xl w-full h-full justify-center items-center absolute top-0 left-0 z-10 gap-6 ${primary.className}`}
        >
          <h1 className="text-1 -translate-x-[200%] opacity-0">Effortless</h1>
          <h1 className="text-2 -translate-y-[70vh] opacity-0">Elegance</h1>
          <h1 className="text-3 translate-x-[200%] opacity-0">Delivered</h1>
        </div>
      </div>
    </section>
  );
}

export default DiscoverHero;
