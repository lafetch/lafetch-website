import type { Metadata } from "next";
import { ReactLenis } from "../libs/lenis";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Lafetch",
  description:
    "We’re on a quest to create a one stop shop by constantly collaborating with home grown brands where every find tells a story, and it’s all just a click away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <link rel="icon" href="/favicon.png" />
        <body className={`relative`}>
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ReactLenis>
  );
}
