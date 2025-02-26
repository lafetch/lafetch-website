"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Word from "../Word";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const BannerRef = useRef<HTMLDivElement | null>(null);

  const paragraph =
    "We’re on a quest to create a one stop shop by constantly collaborating with home grown brands where every find tells a story, and it’s all just a click away.";

  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: BannerRef.current,
              start: "top top", // Aligns the top of the trigger to the top of the viewport
              end: "bottom bottom", // Ends when the bottom of the trigger aligns with the bottom of the viewport
              scrub: 1,
            },
          });

          timeline.to(".description-text-word", {
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: "power1.inOut",
          });

          const timeline2 = gsap.timeline({
            scrollTrigger: {
              trigger: BannerRef.current,
              start: "top top", // Aligns the top of the trigger to the top of the viewport
              end: "bottom -20%", // Ends when the bottom of the trigger aligns with the bottom of the viewport
              scrub: 1,
            },
          });
          timeline2
            .to(".welcome", {
              transform: "translateX(300%)",
              duration: 2,
            })
            .to(
              ".welcome-lafetch",
              {
                transform: "translateX(300%)",
                duration: 2,
              },
              "<"
            )
            .to(
              ".banner-image",
              {
                width: "100%",
                duration: 1,
                opacity: 0,
                height: "100%",
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              ".banner-image-2",
              {
                width: "100%",
                duration: 1,
                height: "100%",
                opacity: 1,
                ease: "power1.inOut",
              },
              "<"
            );
        }, BannerRef);

        return () => ctx.revert();
      }
    },
    { scope: BannerRef }
  );

  return (
    <section
      id="banner-wrapper"
      className="relative h-[250vh] "
      ref={BannerRef}
    >
      {/* Sticky Section */}
      <div
        id="banner"
        className="p-20 py-28 flex justify-between gap-10 items-center h-screen max-w-8xl sticky top-0 overflow-hidden"
      >
        <div className="flex-1 w-full h-full flex justify-start items-start relative text-nowrap">
          <h1
            className={`md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl relative welcome ${primary.className}`}
          >
            Welcome to <br />
            <span className="welcome-lafetch inline-block">
              <Image
                src="/logo-hero.svg"
                alt="Lafetch Logo"
                priority={true}
                loading="eager"
                width={350}
                height={300}
                className="  object-cover"
              />
            </span>
          </h1>
          <div
            className="absolute bottom-0 left-0 w-full h-full flex justify-start items-end
          pr-10 "
          >
            <Image
              src="/hero-image-1.png"
              alt="Lafetch Logo"
              priority={true}
              loading="eager"
              width={400}
              height={400}
              className="lg:size-40 2xl:size-56 banner-image object-cover"
            />
            <Image
              src="/hero-image-2.png"
              alt="Lafetch Logo"
              priority={true}
              loading="eager"
              width={400}
              height={400}
              className="absolute lg:size-40 2xl:size-56 banner-image-2 object-contain opacity-0 bg-white"
            />
          </div>
        </div>
        <div
          className={` flex justify-start items-end h-full ${secondary.className} flex-1 w-full`}
        >
          <Word value={paragraph} />
          {/* Replace the h1 if needed */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

{
  /* <h1 className="pl-14 text-2xl opacity-30 relative h-fit w-fit">
          We’re on a quest to create a one stop shop by constantly collaborating
          with home grown brands where every find tells a story, and it’s all
          just a click away.{" "}
          <span className="pl-14 absolute bottom-0 left-0 w-fit h-fit">
            We’re on a quest to create a one stop shop by constantly
            collaborating with home grown brands where every find tells a story,
            and it’s all just a click away.
          </span>
        </h1> */
}
