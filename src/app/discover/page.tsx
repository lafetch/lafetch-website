import ComingSoon from "@/components/ComingSoon";
import MobilePage from "@/components/MobilePage";
import React from "react";

function page() {
  return (
    <>
      <div className="hidden lg:block">
        <ComingSoon />
      </div>
      <div className="lg:hidden">
        <MobilePage />
      </div>
    </>
  );
}

export default page;
