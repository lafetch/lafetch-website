import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function Categories() {
  return (
    <div className="p-20 py-32 flex justify-around items-center h-screen max-w-8xl">
      <div className="flex-1 flex justify-center items-center flex-col gap-6 h-full">
        <div className="flex flex-col justify-center items-start gap-6 h-full ">
          <Image
            src="/western.png"
            alt="Categories"
            width={400}
            height={400}
            className="object-cover h-full"
          />
          <h1 className={`${primary.className} text-5xl`}>Westernwear</h1>
          <h3 className={`${secondary.className} uppercase opacity-60`}>
            FOR MEN, WOMEN AND KIDS
          </h3>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col gap-6 h-full">
        <div className="flex flex-col justify-center items-start gap-6 h-full">
          <Image
            src="/indian.png"
            alt="Categories"
            width={400}
            height={400}
            className="object-cover h-full"
          />
          <h1 className={`${primary.className} text-5xl `}>Indianwear</h1>
          <h3 className={`${secondary.className} uppercase opacity-60`}>
            FOR MEN, WOMEN AND KIDS
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
