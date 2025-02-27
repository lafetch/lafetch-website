import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="min-h-screen">
      <Image
        src="/brand.png"
        alt="lafetch"
        width={1024}
        height={1024}
        className="w-full object-contain"
      />
    </div>
  );
}

export default page;
