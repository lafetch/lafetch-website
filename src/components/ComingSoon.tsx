import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
const primary = localFont({
  src: "./../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

function ComingSoon() {
  return (
    <div className="h-screen flex justify-center relative overflow-hidden items-center flex-col gap-6">
      <h1
        className={`text-6xl text-center ${primary.className} leading-relaxed`}
      >
        {" "}
        ⁠⁠We’re Cracking The <br /> Code To Effortless Style
      </h1>
      <Link
        href="/"
        className={`${primary.className} py-2 px-6 bg-[#BCA7FF] rounded-3xl text-white cursor-pointer text-xl z-40`}
      >
        Back to Home
      </Link>
      <Image
        src="/coming-soon.svg"
        alt="coming soon"
        width={500}
        height={500}
        className="h-full w-full absolute top-0 left-0"
      />
      <div className="w-[120%] h-24 absolute bottom-10 bg-[#E9E9E9] -rotate-[8deg] flex justify-around items-center text-black font-black text-5xl">
        <Image
          src="/coming-soon-top.svg"
          alt="arrow left"
          width={72}
          height={49}
          className="w-1/2 rotate-6"
        />
      </div>
      <div className="w-[100%] h-24 absolute -bottom-72 -right-72 bg-[#E9E9E9] -rotate-45 flex justify-around items-center text-black font-black text-5xl blur-lg">
        <h1>TOP SECRET</h1>
        <h1>TOP SECRET</h1>
        <h1>TOP SECRET</h1>
        <h1>TOP SECRET</h1>
      </div>
    </div>
  );
}

export default ComingSoon;
