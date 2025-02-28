"use client";
import Image from "next/image";
import React from "react";

import { useParams } from "next/navigation";

function Page() {
  const params = useParams<{ brand: string }>();
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

  const brand = brands.find(
    (brand) => brand.name.toLocaleLowerCase() === params.brand
  );
  return (
    <div className="min-h-screen">
      <Image
        src={`/brand-page/${brand?.name.toLowerCase()}.jpg`}
        alt="lafetch"
        width={1024}
        height={1024}
        className="w-full object-contain"
      />
    </div>
  );
}

export default Page;
