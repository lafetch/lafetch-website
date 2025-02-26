import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

function BottomSection() {
  return (
    <section className={`h-screen flex flex-col  ${primary.className}`}>
      <Image
        src="/about_bottom.png"
        width={2000}
        height={2000}
        alt=""
        className="w-full h-1/2 object-cover"
      />
      <div className="h-1/2 w-full p-20 flex flex-col justify-between items-start">
        <h1 className="text-6xl">
          Everything from <br />
          boardroom to parties,
        </h1>
        <h1 className="self-end text-6xl">
          We’ve <span className="text-[#BCA7FF]">got you covered.</span>{" "}
        </h1>
      </div>
    </section>
  );
}

export default BottomSection;
