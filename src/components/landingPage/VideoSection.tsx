"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
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
      <h1 className={`text-8xl ${primary.className}`}>Fetch your fashion</h1>
      <h1
        className={`text-2xl pt-6 ${secondary.className} flex items-center gap-3 `}
      >
        WITH JUST{" "}
        <Image
          src="/white_QR.png"
          alt="Lavender"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        A SINGLE SCAN
      </h1>
    </div>
  );
}

export default VideoSection;
