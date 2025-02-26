"use client";
import React from "react";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function AboutHero() {
  return (
    <section id="banner-wrapper" className="relative h-screen ">
      <div
        id="banner"
        className="p-20 py-32 flex justify-between gap-10 items-center h-screen max-w-8xl sticky top-0 overflow-hidden"
      >
        <div className=" w-[45vw] h-full flex justify-start items-start relative text-nowrap">
          <h1
            className={`text-8xl 2xl:text-[165px] relative  ${primary.className}`}
          >
            About Us
          </h1>
        </div>
        <div
          className={` flex justify-start items-end h-full ${secondary.className}  w-[55vw]`}
        >
          <h1 className=" text-2xl leading-loose">
            We’re a fashion marketplace that celebrates home-grown brands and
            effortless style. Every piece is carefully curated to bring you the
            best, with quick delivery and an easy shopping experience. And if
            you ever change your mind, our flexible exchange options have you
            covered.
          </h1>
          {/* Replace the h1 if needed */}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
