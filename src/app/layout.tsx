import type { Metadata } from "next";
import Script from "next/script";
import { ReactLenis } from "../libs/lenis";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutWrapper from "@/components/LayoutWrapper";
import Footer from "@/components/Footer";
import GATracker from "./components/GATracker"; //

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        <head>
          <link rel="icon" href="/favicon.png" />
          {/* ✅ Google Analytics Scripts */}
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
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7WEZF6YEB9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7WEZF6YEB9');
</script>
        <body className="relative">
          <GATracker /> {/* 🆕 Track route changes */}
          <Navbar />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </body>
      </html>
    </ReactLenis>
  );
}
