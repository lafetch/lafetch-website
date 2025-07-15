import type { Metadata } from "next";
import Script from "next/script";
import { ReactLenis } from "../libs/lenis";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutWrapper from "@/components/LayoutWrapper";
import Footer from "@/components/Footer";
import GATracker from "./components/GATracker";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7WEZF6YEB9"; // fallback if not set in env



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
          {GA_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script id="gtag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `}
              </Script>
            </>
          )}
        </head>
        <body className="relative">
          <GATracker /> {/* ✅ Route tracking */}
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </body>
      </html>
    </ReactLenis>
  );
}

