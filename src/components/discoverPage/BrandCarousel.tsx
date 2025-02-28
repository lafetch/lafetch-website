"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

// interface BrandImage {
//   id: number;
//   src: string;
//   alt: string;
//   link: string;
// }

const brands = [
  {
    id: 1,
    src: "/brand-logos/4.png",
    alt: "brand 1",
    name: "Belavous",
  },
  {
    id: 2,
    src: "/brand-logos/15.png",
    alt: "brand 2",
    name: "Gryfnn",
  },
  {
    id: 3,
    src: "/brand-logos/17.png",
    alt: "brand 3",
    name: "Lavenir",
  },
  {
    id: 4,
    src: "/brand-logos/10.png",
    alt: "brand 4",
    name: "EN-EM",
  },
  {
    id: 5,
    src: "/brand-logos/37.png",
    alt: "brand 5",
    name: "The_Tan_Clan",
  },
  {
    id: 6,
    src: "/brand-logos/41.png",
    alt: "brand 6",
    name: "Vyakti_India",
  },
];

export default function BrandCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300; // Adjust based on your image width + gap

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const newPosition = scrollPosition + scrollAmount;
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const newPosition = Math.max(scrollPosition - scrollAmount, 0);
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-around bg-black text-white  py-32 px-24 select-none ${primary.className}`}
    >
      <h2 className="text-8xl mb-8 pb-10">Discover more</h2>
      {/* Relative container to position arrows */}
      <div className="relative h-full">
        {/* Left Arrow */}
        {scrollPosition > 0 && (
          <button
            onClick={scrollLeft}
            className="absolute -left-14 top-1/2 -translate-y-1/2  p-3 rounded-full   transition-all z-10"
            aria-label="Scroll left"
          >
            <Image
              src="/arrow-left.svg"
              width={100}
              height={100}
              alt="left arrow"
              className="w-16 h-16 xl:w-28 xl:h-24"
            />
          </button>
        )}

        <div className="container mx-auto px-10 xl:px-20 ">
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="pl-40 flex overflow-x-auto scrollbar-hide gap-4 pb-4 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/discover/${brand.name.toLowerCase()}`}
                  className="flex-shrink-0 w-60 h-60 xl:w-[300px] xl:h-[400px] relative"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -right-14 top-1/2 -translate-y-1/2  p-3 rounded-full text-white  transition-all z-10"
          aria-label="Scroll right"
        >
          <Image
            src="/arrow-right.svg"
            width={100}
            height={100}
            alt="right arrow"
            className="w-16 h-16 xl:w-28 xl:h-24"
          />
        </button>
      </div>
    </div>
  );
}
