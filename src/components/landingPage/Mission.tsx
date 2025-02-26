import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

function Mission() {
  return (
    <div className="px-20 py-32 h-full flex justify-center items-center">
      <div className="flex-1 w-full h-full flex flex-col justify-between items-start gap-20">
        <h1 className={`${primary.className} text-5xl 2xl:text-6xl `}>
          On a <span className="text-[#BCA7FF]">mission</span> to help you find
          your fit with ease.
        </h1>
        <div className="relative">
          <Image
            src="/mission_1.jpg"
            alt="Mission"
            width={400}
            height={400}
            className="object-cover h-full"
            priority
          />
          <h1
            className={`${primary.className} text-[#BCA7FF] absolute bottom-14 -right-24 -rotate-90 left text-3xl`}
          >
            Menswear
          </h1>
        </div>
      </div>
      <div className="flex-1 w-full h-full flex justify-end pr-14">
        <div className="relative  w-2/3">
          <Image
            src="/mission_2.jpg"
            alt="Mission"
            width={1000}
            height={1000}
            className="object-cover h-full opacity-75"
            priority
          />
          <h1
            className={`${primary.className} absolute text-[#BCA7FF] bottom-20 -right-32 -rotate-90 left text-3xl`}
          >
            Womenswear
          </h1>
          <Image
            src="/lavender_QR.png"
            alt="Mission"
            width={94}
            height={94}
            className="object-cover absolute bottom-0 left-0"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
