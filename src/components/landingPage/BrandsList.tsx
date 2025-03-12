"use client";
import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

export default function HorizontalSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Download app to fetch from",
      subtitle: "",
      showQR: true,
    },
    {
      title: "",
      subtitle: "",
      showQR: false,
    },
    {
      title: "STAY TUNED",
      subtitle: "we're adding more for you to love",
      showQR: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  // Create an array of logo numbers from 1 to 41.
  const logos = Array.from({ length: 40 }, (_, i) => i + 1);

  // Divide logos into chunks for each slide:
  // Slide 0: first 12 logos (grid: 6 cols x 2 rows)
  // Slide 1: next 18 logos (grid: 6 cols x 3 rows)
  // Slide 2: remaining logos (should be 11 logos)
  const logoChunks = [
    logos.slice(0, 12),
    logos.slice(12, 12 + 18),
    logos.slice(12 + 18),
  ];

  return (
    <div className="h-screen bg-black p-10 2xl:p-20">
      <div className="relative w-full max-w-8xl mx-auto bg-black text-white overflow-hidden h-full">
        <div
          className="relative flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 p-8 h-full ${primary.className}`}
            >
              <div className="flex flex-col h-full justify-around">
                {slide.showQR && (
                  <div className="pl-10 flex gap-4 items-start mb-8 ">
                    <div className="rounded-lg size-36">
                      <Image
                        src="/white QR_1.png"
                        alt="qr"
                        width={200}
                        height={200}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col justify-between items-center h-full w-1/3">
                      <h2 className="text-5xl 2xl:text-6xl font-medium">
                        {slide.title}
                      </h2>
                      <p className="text-lg mt-2">{slide.subtitle}</p>
                    </div>
                  </div>
                )}

                {!slide.showQR && slide.title && (
                  <div className="text-right mb-8 w-1/2 self-end flex flex-col items-end gap-6">
                    <div className="text-sm tracking-[1rem]">{slide.title}</div>
                    <div className="text-5xl 2xl:text-6xl">
                      {slide.subtitle}
                    </div>
                  </div>
                )}

                {/* Logos grid - different grid layout based on the slide */}
                <div
                  className={`grid gap-8 mb-8 justify-self-center h-full p-10 ${
                    index === 1
                      ? "grid-cols-6 grid-rows-3"
                      : "grid-cols-6 grid-rows-2"
                  }`}
                >
                  {logoChunks[index].map((logo) => (
                    <div
                      key={logo}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={`/brand-logos/${logo}.png`}
                        alt={`Logo ${logo}`}
                        width={150}
                        height={150}
                        className="object-contain size-24 2xl:size-32 rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render the left button */}
        {currentSlide !== 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            aria-label="Previous slide"
          >
            <Image
              src="/arrow-left.svg"
              width={72}
              height={49}
              alt="left arrow"
              className="h-16"
            />
          </button>
        )}

        {/* Conditionally render the right button */}
        {currentSlide !== slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            aria-label="Next slide"
          >
            <Image
              src="/arrow-right.svg"
              width={72}
              height={49}
              alt="right arrow"
              className="h-16"
            />
          </button>
        )}
      </div>
    </div>
  );
}
