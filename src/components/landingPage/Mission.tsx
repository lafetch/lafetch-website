import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function Mission() {
  return (
    <div className="px-20 py-32 h-full flex justify-center items-center">
      <div className="flex-1 w-full h-full flex flex-col justify-between items-start gap-20">
        <h1 className={`${primary.className} text-5xl 2xl:text-6xl `}>
          On a <span className="text-[#BCA7FF]">mission</span> to help you find
          your fit with ease.
        </h1>
        <Image
          src="/mission_1.jpg"
          alt="Mission"
          width={400}
          height={400}
          className="object-cover h-full"
          priority
        />
      </div>
      <div className="flex-1 w-full h-full flex justify-end ">
        <Image
          src="/mission_2.jpg"
          alt="Mission"
          width={1000}
          height={1000}
          className="object-cover h-full opacity-75 w-2/3"
          priority
        />
      </div>
    </div>
  );
}

export default Mission;
