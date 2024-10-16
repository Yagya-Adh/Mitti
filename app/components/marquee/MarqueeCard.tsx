"use client";

import React from "react";
import Marquee from "react-fast-marquee";

interface ImarqueeCard {
  variant: string | "default-mitti" | "light-mitti" | "dark-mitti";
}
const MarqueeCard = ({ variant }: ImarqueeCard) =>
  variant == "default-mitti" ? (
    <div className="bg-mitti-secondaryTextColor text-white">
      <Marquee>
        <ul className="flex items-center py-3">
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>

          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
        </ul>
      </Marquee>
    </div>
  ) : variant == "light-mitti" ? (
    <div className="bg-mitti-darkBodyColor text-mitti-secondaryTextColor">
      <Marquee>
        <ul className="flex items-center py-3">
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>

          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
        </ul>
      </Marquee>
    </div>
  ) : variant == "dark-mitti" ? (
    <div className="bg-mitti-secondaryTextColor text-white">
      <Marquee direction="right">
        <ul className="flex items-center py-3">
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>

          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00</li>
          <li>instant discount code 50% off mitti50</li>
          <li>free delivery to home from $100.00 instant discount code</li>
          <li>instant discount code 50% off mitti50</li>
        </ul>
      </Marquee>
    </div>
  ) : null;

export default MarqueeCard;
