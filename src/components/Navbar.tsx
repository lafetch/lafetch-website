import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const secondary = localFont({
  src: "./../app/fonts/KonnectRegular.otf",
});

const links = [
  { name: "ABOUT US", href: "/about" },
  { name: "DISCOVER", href: "/discover" },
  { name: "LF QUICK", href: "/lf-quick" },
  { name: "CONTACT US", href: "/contact-us/" },
];

function Navbar() {
  return (
    <div className=" fixed top-0 px-20 py-6 flex justify-center lg:justify-between items-center w-full z-50 mix-blend-difference">
      <Link href="/" className="text-2xl text-white hover:text-gray-300">
        <Image
          src="/logo.svg"
          height={40}
          width={100}
          className="object-cover"
          alt="Logo"
        />
      </Link>

      <div className=" hidden  lg:flex gap-10 items-center">
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
