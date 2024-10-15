"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCard = () => {
  return (
    <div className="bg-mitti-secondaryTextColor text-white">
      <Marquee>
        <ul>
          <li>
            free delivery to home from $100.00 instant discount code 50% off
            mitti50
          </li>
          <li>
            free delivery to home from $100.00 instant discount code 50% off
            mitti50
          </li>

          <li>
            instant discount code 50% off mitti50 free delivery to home from
            $100.00 instant discount code 50% off mitti50
          </li>
        </ul>
      </Marquee>
    </div>
  );
};

export default MarqueeCard;
