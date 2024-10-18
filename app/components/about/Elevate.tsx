"use client";
import React from "react";
import elevateImage from "/public/assets/images/about/elevate.avif";
import Image from "next/image";
import Button from "../button/Button";
const Elevate = () => {
  return (
    <div className="bg-mitti-bodyColorTwo">
      <div className="max-w-screen-2xl mx-auto px-4 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
          <Image
            src={elevateImage}
            alt="elevate_"
            height={800}
            width={800}
            className="h-full w-full "
          />
          <ElevateInformation />
        </div>
      </div>
    </div>
  );
};

export default Elevate;

const ElevateInformation = () => {
  return (
    <div className="flex flex-col  text-mitti-secondaryTextColor">
      <h1 className="text-5xl font-serif">
        Elevate Your Home with Timeless Decor and Unique Pieces
      </h1>
      <p className=" font-sans py-10">
        Our commitment to quality and craftsmanship ensures that you&apos;ll
        find unique items that reflect your personal style and enhance your
        home&apos;s ambiance. Whether you&apos;re looking for statement decor,
        handcrafted pottery, or practical yet stylish kitchen and bathroom
        accessories, we have everything you need to create a space that truly
        feels like home. Explore our collection and let us help you turn your
        house into a home filled with warmth, charm, and character.
      </p>
      <div className="">
        <Button buttonName="Discover More" variant="button-underline" />
      </div>
    </div>
  );
};
