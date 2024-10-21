"use client";
import Image from "next/image";
import React from "react";

interface IpictureProps {
  key: number;
  text: string;
  image: string;
}
const PictureCard = ({ image, text, key }: IpictureProps) => {
  return (
    <aside key={key} className=" relative py-4">
      <Image
        src={image}
        alt="main_images_"
        width={1000}
        height={1000}
        className="relative w-full h-full "
      />
      <div className="absolute bottom-10 left-7">
        <h1 className="font-serif text-7xl text-white max-w-xl">{text}</h1>
      </div>
    </aside>
  );
};

export default PictureCard;
