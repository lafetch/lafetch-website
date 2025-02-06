import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const secondary = localFont({
  src: "./../app/fonts/KonnectRegular.otf",
});

const links = [
  { name: "WORLD", href: "/world" },
  { name: "SPOTLIGHT", href: "/spotlight" },
  { name: "GET IN TOUCH", href: "/contact" },
];

function Navbar() {
  return (
    <div className="fixed top-0 px-20 py-6 flex justify-between items-center w-full z-50">
      <Link href="/" className="text-2xl text-white hover:text-gray-300">
        <Image
          src="/logo.svg"
          height={40}
          width={100}
          className="object-cover"
          alt="Logo"
        />
      </Link>

      <div className="flex gap-10 items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-xl text-white hover:text-gray-300 ${secondary.className}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
