"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [loading, setLoading] = useState(true);

  // Only run the loading timer once
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="md:hidden">{children}</div>

      <div className="hidden md:block">{loading ? <Loader /> : children}</div>
    </>
  );
}

export default LayoutWrapper;
