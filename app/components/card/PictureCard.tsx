"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
interface IpictureProps {
  image: StaticImageData;
  text: string;
  key: number;
}
const PictureCard = ({ image, text, key }: IpictureProps) => {
  return (
    <div key={key} className=" relative py-4">
      <Image src={image} alt="" className="relative w-full h-full" />
      <div className="absolute bottom-10 left-7">
        <h1 className="font-serif text-7xl text-white max-w-xl">{text}</h1>
      </div>
    </div>
  );
};

export default PictureCard;
