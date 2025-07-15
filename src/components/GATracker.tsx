"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GATracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-7WEZF6YEB9", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
