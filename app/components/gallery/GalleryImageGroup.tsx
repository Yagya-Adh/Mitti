"use client";
import Image from "next/image";
import React from "react";

// const hoverImage = "/assets/images/gallery/gallery2.svg";

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
  return (
    <div className="grid grid-cols-8 gap-4 py-20">
      {data?.map((list) => (
        <div className={`${list.span}`} key={list.id}>
          <Image
            src={list.image}
            width={400}
            height={400}
            alt={"gallery_"}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImageGroup;
