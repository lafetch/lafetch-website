"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../../app/fonts/AlmarenaNeueDisplay-Regular.otf",
});
const secondary = localFont({
  src: "./../../app/fonts/KonnectRegular.otf",
});

export default function Page() {
  const [activeForm, setActiveForm] = useState<"customer" | "brand">(
    "customer"
  );
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <div
      className={`flex flex-col lg:flex-row h-screen justify-center items-center bg-gray-100 m-0 ${secondary.className}`}
    >
      {/* Left column - Contact Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
        <div className="mb-2 2xl:mb-6 flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => {
              setActiveForm("customer");
              setSubmitMessage("");
            }}
            className={`py-2 px-6 rounded-3xl  font-medium ${
              activeForm === "customer"
                ? "bg-[#BCA7FF] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveForm("brand");
              setSubmitMessage("");
            }}
            className={`py-2 px-6  rounded-3xl  font-medium ${
              activeForm === "brand"
                ? "bg-[#BCA7FF] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Brand
          </button>
        </div>
        <div className="max-w-md mx-auto mt-4 2xl:mt-10">
          <h2
            className={`text-5xl font-extrabold text-gray-900 mb-2 2xl:mb-6 ${primary.className}`}
          >
            Contact Us
          </h2>
          <p className="text-gray-600 mb-2 2xl:mb-6">
            We&apos;d love to hear from you. Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <ContactForm
            activeForm={activeForm}
            setSubmitMessage={setSubmitMessage}
          />
          {submitMessage && (
            <p className="mt-2 text-sm text-green-600">{submitMessage}</p>
          )}
        </div>
      </div>
      {/* Right column - Image */}
      <div className="w-full lg:w-1/2 relative hidden lg:block overflow-hidden h-full">
        <Image
          src="/western.png"
          alt="Contact us"
          objectFit="cover"
          width={500}
          height={500}
          className="inset-0 w-full h-full z-40 object-cover"
          priority
        />
      </div>
    </div>
  );
}
