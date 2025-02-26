"use client";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

import CountUp from "./CountUp"; // Ensure CountUp.tsx is in the same folder

const data = [
  { to: 100, label: "Styles" },
  { to: 20, label: "Categories" },
  { to: 100, label: "Brands" },
];

const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});

function AppPlugin() {
  // const [index, cycleIndex] = useCycle(0, 1, 2); // Loop through the 3 states
  // const [key, setKey] = useState(0); // Force re-render CountUp
  // const animationDuration = 3; // Animation duration (in seconds)
  // const delayBetween = 3; // Delay before next animation (in seconds)

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     cycleIndex(); // Move to next index
  //     setKey((prev) => prev + 1); // Force re-render
  //   }, (animationDuration + delayBetween) * 1000); // Total wait time = animation + delay

  //   return () => clearTimeout(timeout);
  // }, [index]);
  return (
    <section className="bg-[#F4F4F4] p-20 2xl:pb-40 flex justify-between items-center h-screen max-w-8xl text-black">
      <div className="flex-1 flex justify-center items-center flex-col gap-10 overflow-hidden  w-1/2">
        <div className="flex  justify-around items-center w-full">
          {data.map((item, index) => (
            <div
              className="flex flex-col gap-2 justify-around items-center"
              key={index}
            >
              <div className="">
                <CountUp
                  // Ensures animation restarts each time
                  from={0}
                  to={item.to}
                  separator=","
                  direction="up"
                  duration={2}
                  className={`text-6xl xl:text-7xl 2xl:text-8xl ${primary.className} font-bold`}
                />
                <span
                  className={`text-6xl xl:text-7xl 2xl:text-8xl ${primary.className} font-bold`}
                >
                  +
                </span>
              </div>
              <h3 className={`uppercase ${primary.className} text-2xl`}>
                {data[index].label}
              </h3>
            </div>
          ))}
        </div>

        <button
          className={`${primary.className} border text-white bg-[#BCA7FF] rounded-3xl px-8 py-3 text-xl 2xl:text-2xl mt-10`}
        >
          DOWNLOAD NOW
        </button>
        <Image
          src="/lavender_QR.png"
          alt="App Plugin"
          width={500}
          height={500}
          className="flex-1 w-40 h-40"
        />
      </div>
      <Image
        src="/app-plugin.png"
        alt="App Plugin"
        width={767}
        height={506}
        className="flex-1 w-1/2"
      />
    </section>
  );
}

export default AppPlugin;
