import React from "react";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

function CuratedForYou() {
  return (
    <section
      className={`bg-black text-white py-12 px-4 min-h-screen ${secondary.className} mb-10`}
    >
      <div className="px-20 mx-auto h-full">
        {/* Heading */}
        <h2 className={`text-8xl text-[#BCA7FF] mb-10  ${primary.className}`}>
          Curated for you
        </h2>

        {/* Each row: label, line, description */}
        <div className="flex flex-col justify-between h-2/3 text-2xl">
          {/* Row 1 */}
          <div>
            <div className="flex items-center justify-between p-10 w-full">
              <p className="uppercase font-semibold tracking-wide flex-1">
                CURATED WITH CARE
              </p>
              <p className="self-start flex-1">
                Handpicked collections, just for you.
              </p>
            </div>
            <hr className="mt-2 border-gray-600" />
          </div>

          {/* Row 2 */}
          <div>
            <div className="flex items-center justify-between p-10 w-full">
              <p className="uppercase font-semibold tracking-wide flex-1">
                Authenticity First
              </p>
              <p className="self-start flex-1">
                Curating genuine, high-quality pieces with heart.
              </p>
            </div>
            <hr className="mt-2 border-gray-600" />
          </div>

          {/* Row 3 */}
          <div>
            <div className="flex items-center justify-between p-10 w-full">
              <p className="uppercase font-semibold tracking-wide flex-1">
                Fast And Reliable
              </p>
              <p className="self-start flex-1">
                Quick delivery, always on time.
              </p>
            </div>
            <hr className="mt-2 border-gray-600" />
          </div>

          {/* Row 4 */}
          <div>
            <div className="flex items-center justify-between p-10 w-full">
              <p className="uppercase font-semibold tracking-wide flex-1">
                Made For Every You
              </p>
              <p className="self-start flex-1">
                Change your mind? You can exchange twice.
              </p>
            </div>
            <hr className="mt-2 border-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CuratedForYou;
