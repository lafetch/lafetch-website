"use client";
import { useState } from "react";

export default function ContactForm({ activeForm, setSubmitMessage }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Customer form state
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  // Brand form state
  const [brandName, setBrandName] = useState("");
  const [brandEmail, setBrandEmail] = useState("");
  const [brandUrl, setBrandUrl] = useState("");
  const [brandType, setBrandType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.target);
    // Append additional fields required by Web3Forms
    formData.append("formType", activeForm);
    formData.append("apikey", "cfb32157-4da4-42b7-b018-9480ffeef2a9");
    formData.append("subject", "New Submission from your Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitMessage("Thank you for your message. We'll be in touch soon!");
      } else {
        setSubmitMessage(data.message || "Something went wrong.");
      }
    } catch (e) {
      setSubmitMessage("An error occurred while submitting the form.");
      console.log(e);
    }
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black ">
      {activeForm === "customer" ? (
        <>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm  "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={customerMessage}
              onChange={(e) => setCustomerMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  resize-none"
            ></textarea>
          </div>
        </>
      ) : (
        <>
          <div>
            <label
              htmlFor="brandName"
              className="block text-sm font-medium text-gray-700"
            >
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              id="brandName"
              required
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="mt-1 block w-full  p-2 rounded-md border-gray-300 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={brandEmail}
              onChange={(e) => setBrandEmail(e.target.value)}
              className="mt-1 block w-full  p-2 rounded-md border-gray-300 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="brandUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Brand URL
            </label>
            <input
              type="text"
              name="brandUrl"
              id="brandUrl"
              required
              value={brandUrl}
              onChange={(e) => setBrandUrl(e.target.value)}
              className="mt-1 block w-full  p-2 rounded-md border-gray-300 shadow-sm "
            />
          </div>
          <div>
            <label
              htmlFor="brandType"
              className="block text-sm font-medium text-gray-700"
            >
              Brand Type
            </label>
            <input
              type="text"
              name="brandType"
              id="brandType"
              required
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
              className="mt-1 block w-full rounded-md  p-2 border-gray-300 shadow-sm "
            />
          </div>
        </>
      )}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#BCA7FF] hover:bg-[#9879fd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
