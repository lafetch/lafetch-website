import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const primary = localFont({
  src: "./../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

const secondary = localFont({
  src: "./../app/fonts/KonnectRegular.otf",
});

function MobilePage() {
  return (
    <div
      className={`relative h-[100dvh] overflow-hidden flex flex-col justify-center items-center p-10 gap-8 ${secondary.className}`}
    >
      <Image
        src="/mobile-bg.png"
        alt="qr"
        width={1000}
        height={1000}
        className="w-full h-[100dvh] object-cover absolute top-0 left-0 z-0"
      />

      <h1
        className={`text-center text-white text-5xl leading-[4rem]  z-10 ${primary.className} `}
      >
        Fetch Your <br /> Fashion
      </h1>
      <h3 className="text-center z-10 leading-loose">
        curating the best collection of homegrown brands for you at your
        doorstep
      </h3>
      <h3 className="text-center z-10 leading-loose pt-4">
        Lafetch Quick delivering in 30 mins in Delhi & gurgaon
      </h3>
      <Link
        href="https://onelink.to/q7u8yf"
        className="py-3 px-6 bg-[#BCA7FF]/80 rounded-3xl z-10 border border-white"
      >
        Download the App
      </Link>
    </div>
  );
}

export default MobilePage;
