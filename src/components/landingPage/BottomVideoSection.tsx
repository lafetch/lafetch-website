"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import Link from "next/link";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function BottomVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="h-screen flex flex-col justify-end items-end relative">
      <div className="h-full  object-cover -z-10 opacity-60 overflow-hidden absolute w-full">
        {/* Video Player */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover hero-video"
          autoPlay
          playsInline
          muted // Controlled by state
          loop
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Audio toggle button */}
      </div>
      <div className="p-20 pb-40 flex justify-end items-end flex-col gap-10">
        <h1 className={`text-8xl text-right ${primary.className} `}>
          Every piece <br /> has a story.
        </h1>
        <Link
          href="/discover"
          className={`border border-[#D9D9D9] rounded-full px-8 py-4 text-2xl ${secondary.className}`}
        >
          DISCOVER NOW
        </Link>
      </div>
    </div>
  );
}

export default BottomVideoSection;
