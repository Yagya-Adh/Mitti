"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "../heading/SectionHeading";

const autoSlideImageData = [
  {
    id: 1,
    image: "/assets/images/home/autoslide/chairTable.webp",
    imageTwo: "/assets/images/home/autoslide/chairTable.webp",
  },
  {
    id: 2,
    image: "/assets/images/home/autoslide/chairTable.webp",
    imageTwo: "/assets/images/home/autoslide/chairTable.webp",
  },
  {
    id: 3,
    image: "/assets/images/home/autoslide/chairTable.webp",
    imageTwo: "/assets/images/home/autoslide/chairTable.webp",
  },
];

const AutoSlide = () => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="grid col-span-3">
          <AutoSiderImageGroup />
        </aside>
        <aside className="col-span-1 flex items-center">
          <SectionHeading
            varriant="flex-col"
            title="the finest art for the finest furniture"
            describe=" Learn more about our mission, values, and commitment to providing
        high-quality furniture and exceptional customer service. Discover why
        customers choose us for their furnishing needs."
            buttonName="Discover More"
          />
        </aside>
      </div>
    </section>
  );
};

export default AutoSlide;

const AutoSiderImageGroup = () => {
  return (
    <section className="relative overflow-hidden w-full h-[600px]">
      <div className="infinite-slider flex">
        {autoSlideImageData.concat(autoSlideImageData).map((list, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full grid grid-cols-2 gap-x-4"
          >
            <Image src={list.image} alt="image_" width={600} height={600} />
            <Image src={list.imageTwo} alt="image_" width={600} height={600} />
          </div>
        ))}
      </div>
    </section>
  );
};
