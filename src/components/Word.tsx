import React from "react";

function Word({ value }: { value: string }) {
  const words = value.split(" ");

  return (
    <div className="relative h-fit">
      <p className="flex flex-wrap w-full  ">
        {words.map((word, index) => (
          <span
            className="pr-2 text-2xl 2xl:text-3xl pb-2 description-text-word opacity-0"
            key={index}
          >
            {word}
          </span>
        ))}
      </p>
      <p className="flex flex-wrap w-full absolute top-0 opacity-30">
        {words.map((word, index) => (
          <span className="pr-2 text-2xl 2xl:text-3xl pb-2" key={index}>
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Word;
