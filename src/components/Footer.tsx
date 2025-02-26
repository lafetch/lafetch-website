import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="hidden lg:flex flex-col justify-around items-center bg-black text-white p-10 xl:p-20 py-16">
      <div className="pb-20 flex justify-between items-start  w-full">
        <div className="h-full w-2/5 flex flex-col justify-between items-start">
          <Image
            src="/logo.svg"
            alt="Lavender"
            width={100}
            height={100}
            className="w-56 "
          />
        </div>

        <div className="h-full w-1/5 flex flex-col justify-start items-start gap-2">
          <h1 className="font-bold mb-4">WELCOME TO LAFETCH</h1>
          <h1>HOME</h1>
          <h1>ABOUT US</h1>
          <h1>DISCOVER NOW</h1>
          <h1>LAFETCH QUICK</h1>
        </div>
        <div className="h-full w-1/5 flex flex-col justify-start items-start gap-2">
          <h1 className="font-bold mb-4">ANNOUNCEMENTS</h1>
          <h1>WHAT’S NEW</h1>
          <h1>NEWSLETTERS</h1>
          <h1>PRODUCT BLOG</h1>
          <h1>BRAND BLOG</h1>
        </div>
        <div className="h-full w-1/5 flex flex-col justify-start items-start gap-2">
          <h1 className="font-bold mb-4">CONTACT US</h1>
          <h1>WHATSAPP</h1>
          <h1>INSTAGRAM</h1>
          <h1>EMAIL</h1>
        </div>
      </div>
      <div className="flex justify-between items-center w-full text-gray-400 text-sm">
        <h1 className="flex-1">
          ©{new Date().getFullYear()} Powered By and All Right Reserved to AS10
          TECHRETAIL PRIVATE LIMITED
        </h1>
        <div className="flex gap-2 2xl:gap-6 flex-1">
          <Link href="/privacy-policy">Privacy Policy</Link>•
          <Link href="/terms-and-conditions">Terms And Conditions</Link>•
          <Link href="/shipping-policy"> Shipping Policy </Link>•
          <Link href="/cancellation-policy"> Cancellation Policy </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
