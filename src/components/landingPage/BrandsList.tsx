"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import { time } from "console";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

gsap.registerPlugin(ScrollTrigger);

function BrandsList() {
  const BrandlistRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: BrandlistRef.current,
              pin: true,
              end: "+=500",
              scrub: 1,
            },
          });

          timeline.to(".horizontal-scroll", {
            x: "-100%",
            duration: 10,
            ease: "power1.inOut",
          });
        }, BrandlistRef);

        return () => ctx.revert();
      }
    },
    { scope: BrandlistRef }
  );
  return (
    <div
      className="h-screen w-full flex justify-between items-center overflow-x-hidden px-20 py-32"
      ref={BrandlistRef}
    >
      <div className="flex w-full  h-full justify-center gap-40 overflow-x-hidden">
        <h1
          className={`h-full w-full text-7xl ${primary.className} flex justify-start items-start flex-1 horizontal-scroll`}
        >
          Who all can you shop from?
        </h1>
        <div className=" w-1/2 grid grid-rows-3 grid-flow-col  items-center flex-1 horizontal-scroll">
          {Array.from({ length: 18 }).map((_, index) => (
            <h1 key={index} className="w-56">
              Logo
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsList;
