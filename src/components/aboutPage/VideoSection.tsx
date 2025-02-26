"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="h-screen flex flex-col justify-center items-end relative">
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
      <h1 className={`text-6xl ${primary.className} w-1/2 text-end m-20 mb-0`}>
        Why We Focus on <br /> Home-Grown Brands
      </h1>
      <h1
        className={`text-2xl pt-6 ${secondary.className} flex items-center gap-3 w-1/3 leading-relaxed text-end m-20 mt-0`}
      >
        We believe that every brand has a story, and home-grown brands are the
        heart of innovation and creativity. By supporting them, we help nurture
        new talent and bring unique styles to the forefront.
      </h1>
    </div>
  );
}

export default VideoSection;
