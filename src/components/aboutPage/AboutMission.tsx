import React from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

function AboutMission() {
  return (
    <section className="flex h-screen justify-center items-center gap-10 flex-col">
      <h1
        className={`${primary.className} text-5xl w-2/3 leading-relaxed text-center`}
      >
        Our mission is to{" "}
        <span className="text-[#BCA7FF]">empower home-grown fashion</span>{" "}
        brands by giving them the platform and support they need to thrive,
        while{" "}
        <span className="text-[#BCA7FF]">
          offering shoppers a curated collection
        </span>{" "}
        of unique, high-quality styles.
      </h1>
      <button
        className={`${primary.className} bg-[#BCA7FF] py-4 px-8 text-2xl rounded-full`}
      >
        DISCOVER BRANDS
      </button>
    </section>
  );
}

export default AboutMission;
