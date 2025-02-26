import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function FeaturesSection() {
  return (
    <section
      className={`flex h-screen border-t border-gray-400 ${secondary.className}`}
    >
      <div className="h-screen w-[45vw] border-r border-gray-400 ">
        <Image
          src="/features_about.png"
          width={1000}
          height={1000}
          alt=""
          className="w-full h-[40%] object-cover border-b border-gray-400"
        />
        <div className="h-[60%] w-full p-10 2xl:p-20 flex flex-col justify-center items-center gap-10">
          <h1
            className={`text-6xl 2xl:text-7xl text-[#BCA7FF] self-start ${primary.className}`}
          >
            Homegrown fashion
          </h1>
          <h1 className="2xl:text-xl 2xl:leading-loose text-lg">
            LAFETCH is a cutting-edge online fashion e-commerce app, connecting
            shoppers to a curated selection of branded clothing, bold
            accessories, and unique goods. With a focus on promoting Indian-made
            brands, we ensure every product is 100% authentic, delivering
            quality and style you can trust.
          </h1>
        </div>
      </div>
      <div className="h-screen w-[55vw]">
        <div className="w-full h-1/2 p-10 2xl:p-20 flex flex-col justify-center items-center gap-10">
          <h1
            className={`text-6xl 2xl:text-7xl text-[#BCA7FF] self-start ${primary.className}`}
          >
            Hassle free <br />
            Exchange{" "}
          </h1>
          <h1 className="2xl:text-xl 2xl:leading-loose text-lg">
            Enjoy hassle-free exchanges with up to two easy returns, ensuring
            you always find the perfect fit without any stress. We’re here to
            make your shopping experience smooth and simple.
          </h1>
        </div>
        <div className="w-full h-1/2 p-10 2xl:p-20 flex flex-col justify-center items-center gap-10 border-t">
          <h1
            className={`text-6xl 2xl:text-7xl text-[#BCA7FF] self-start ${primary.className}`}
          >
            Quick <br /> Deliveries
          </h1>
          <h1 className="2xl:text-xl 2xl:leading-loose text-lg">
            Fast, reliable, and hassle-free – our express delivery gets your
            curated treasures to you in no time. Because waiting shouldn’t stand
            in the way of enjoying what you love! If you’re in Delhi NCR, get
            your order delivered in just 2 hours though express delivery
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
