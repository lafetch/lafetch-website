import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

const categories = [
  {
    title: "Resortwear",
    subtitle: "FOR MEN AND WOMEN",

    imageSrc: "/mission_1.jpg",
  },
  {
    title: "Streetwear",
    subtitle: "FOR MEN AND WOMEN",
    imageSrc: "/mission_1.jpg",
  },
  {
    title: "Formalwear",
    subtitle: "FOR MEN AND WOMEN",
    imageSrc: "/mission_1.jpg",
  },
  {
    title: "Ethnicwear",
    subtitle: "FOR MEN AND WOMEN",
    imageSrc: "/mission_1.jpg",
  },
  {
    title: "Loungewear",
    subtitle: "FOR MEN AND WOMEN",
    imageSrc: "/mission_1.jpg",
  },
  {
    title: "Essentials",
    subtitle: "FOOTWEAR AND ACCESSORIES",
    imageSrc: "/mission_1.jpg",
  },
];

function Categories() {
  return (
    <div
      className={`bg-black min-h-screen flex items-center justify-center p-10 px-32 ${primary.className}`}
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-x-1 gap-y-10 max-w-8xl w-full">
        {categories.map((cat, i) => (
          <div className="flex flex-col justify-center item-center gap-4">
            <div
              key={i}
              className={`relative overflow-hidden  text-white h-32 md:h-36 lg:h-44 
             `}
            >
              {/* Background Image */}
              <Image
                src={cat.imageSrc}
                alt={cat.title}
                fill
                className="object-cover object-center"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text Overlay */}
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <h2
                className={`text-4xl md:text-5xl  tracking-wide ${primary.className} pt-6 pb-6`}
              >
                {cat.title}
              </h2>
              <p className="text-xs md:text-sm mt-1">{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
