"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  { id: 1, span: "col-span-2", image: "/assets/images/gallery/gallery1.avif" },
  {
    id: 2,
    span: "col-span-2",
    image: "/assets/images/gallery/gallery4.avif",
  },
  {
    id: 3,
    span: "col-span-4 row-span-6",
    image: "/assets/images/gallery/gallery3.avif",
  },
  {
    id: 4,
    span: "col-span-4 row-span-6",
    image: "/assets/images/gallery/gallery4.avif",
  },
  { id: 5, span: "col-span-2", image: "/assets/images/gallery/gallery5.avif" },
  { id: 6, span: "col-span-2", image: "/assets/images/gallery/gallery6.avif" },
  { id: 7, span: "col-span-2", image: "/assets/images/gallery/gallery7.avif" },
];

const GalleryImageGroup = () => {
  const [popUp, setPopUp] = useState<number | null>(null);

  const floatHandle = (popID: number) => {
    setPopUp(popID);
  };

  const resetFloatHandle = () => {
    setPopUp(null);
  };

  return (
    <div className="grid grid-cols-8 gap-4 py-20">
      {data?.map((list) => (
        <div
          className={`${list.span} relative overflow-hidden`}
          key={list.id}
          onMouseEnter={() => floatHandle(list.id)}
          onMouseLeave={resetFloatHandle}
        >
          <Image
            src={list.image}
            alt={`gallery_image_${list.id}`}
            width={400}
            height={400}
            className="w-full h-full object-cover group"
          />
          {popUp === list.id && (
            <div className="absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center ease-linear transition-opacity duration-500">
              <Image
                src="/assets/images/gallery/gallery2.svg"
                width={400}
                height={400}
                alt="gallery_image_hover"
                className=" size-10 hover:size-48 transition-all ease-linear duration-500"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryImageGroup;
