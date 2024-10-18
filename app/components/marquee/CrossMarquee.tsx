"use client";

import React from "react";
import MarqueeCard from "./MarqueeCard";

const CrossMarquee = () => {
  return (
    <div className="overflow-hidden py-10 flex flex-col justify-center items-center">
      <div className="bg-gradient-to-t from-white ">
        <div className="z-10 rotate-3 pt-10">
          <MarqueeCard variant="light-mitti" />
        </div>

        <div className="z-20 -rotate-3 pb-10">
          <MarqueeCard variant="dark-mitti" />
        </div>
      </div>
    </div>
  );
};

export default CrossMarquee;
