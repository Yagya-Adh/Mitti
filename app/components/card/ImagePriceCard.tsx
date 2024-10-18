"use client";
// import React, { useState } from "react";
import Button from "../button/Button";
import Image, { StaticImageData } from "next/image";
// import { Rating } from "@smastrom/react-rating";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import softImage from "/public/assets/images/blog/softTextile.webp";
// import cozyChair from "/public/assets/images/allProducts/cozy_reading_chair.webp";
import transformImage from "/public/assets/images/blog/transformLiving.webp";
import sereneImage from "/public/assets/images/blog/sereneBathroom.webp";

interface Icard {
  varriant: "image-card" | "image-price-card";
}

interface IlatestNewData {
  id: number;
  title: string;
  image: StaticImageData;
}

const latestNewData: IlatestNewData[] = [
  { id: 1, title: "Soft Textiles in Minimalist Spaces", image: softImage },
  {
    id: 2,
    title: "Transform Living Space with Handmade Pottery",
    image: transformImage,
  },
  {
    id: 3,
    title: "Serene Bathroom: The Beauty of Functional Art",
    image: sereneImage,
  },
];
interface IbestSellerProductsData {
  id: number;
  title: string;
  price?: number | null;
  actualPrice?: number | null;
  image: string | StaticImageData;
  sale?: boolean | null;
}
const bestSellerProductsData: IbestSellerProductsData[] = [
  {
    id: 1,
    title: "Cozy Reading Chair",
    price: 350.0,
    actualPrice: null,
    image: "/assets/images/allProducts/cozy_reading_chair.webp",
    sale: false,
  },
  {
    id: 2,
    title: "Aalto Vase",
    price: 90.0,
    actualPrice: 199.0,
    image: softImage,
    sale: true,
  },
  {
    id: 3,
    title: "Wooden Rocking Chair",
    price: 220.0,
    actualPrice: null,
    image: softImage,
    sale: true,
  },
  {
    id: 4,
    title: "Modern Floor Lamp",
    price: 180.0,
    actualPrice: 199.0,
    image: softImage,
    sale: false,
  },
  {
    id: 5,
    title: "Urna Ceramic Vase",
    price: 95.0,
    actualPrice: null,
    image: softImage,
    sale: true,
  },
  {
    id: 6,
    title: "Decorative Wall",
    price: 75.0,
    actualPrice: null,
    image: softImage,
    sale: true,
  },
  {
    id: 7,
    title: "Terracotta Plant Pots",
    price: 35.0,
    actualPrice: 99.0,
    image: softImage,
    sale: true,
  },
];

const ImagePriceCard = ({ varriant }: Icard) => {
  // const [rating, setRating] = useState({ review: "", rating: 0 });
  /* 
  const handleStars = (selectStar) => {
    setRating((prevState) => ({ ...prevState, rating: selectStar }));
  };
   */
  return varriant === "image-card" ? (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {latestNewData?.map((list) => (
          <div className="flex flex-col py-10" key={list.id}>
            <div className="overflow-hidden">
              <Image
                src={list.image}
                height={250}
                width={250}
                className="hover:scale-125 ease-in-out transition-all duration-700 h-full w-full"
                alt="latest_"
              />
              {/* star */}
            </div>
            <h2 className="text-mitti-paragraphColor font-serif text-2xl py-2">
              {list.title}
            </h2>

            <div className="py-2">
              <Button
                buttonName="Read More"
                variant="button-underline"
                size="text-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : varriant === "image-price-card" ? (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {bestSellerProductsData?.map((list) => (
          <div className="flex flex-col py-10 " key={list.id}>
            <div className="overflow-hidden relative flex flex-col justify-center items-center">
              <div className="w-full z-20  bg-transparent relative">
                {list.sale && (
                  <div className="absolute top-4 left-4">
                    <button className="z-20 px-2 py-1 bg-mitti-secondaryTextColor text-center text-white">
                      {"Sale"}
                    </button>
                  </div>
                )}
              </div>

              <div className="hidden group-hover:absolute hover:top-14 z-40  group:flex">
                <ShoppingCartIcon className="size-24 bg-white border-2 border-black rounded-full p-2" />
              </div>
              <Image
                src={list.image}
                width={250}
                height={250}
                className="hover:bg-black group z-10 hover:scale-125 ease-in-out transition-all duration-700 h-full w-full"
                alt="latest_"
              />

              {/*  <div className="z-40 absolute">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating.rating}
                  onChange={() => handleStars(2)}
                  className="size-10"
                />
              </div> */}
            </div>
            <h1 className="text-mitti-paragraphColor font-bold font-serif  py-2">
              {list.title}
            </h1>{" "}
            <h3 className="flex items-center text-mitti-secondaryTextColor font-bold font-serif">
              {"$ " + list.price + ".00 USD"}{" "}
              <span className="ms-4  line-through	">
                {"$" + list.actualPrice == null
                  ? list.actualPrice + ".00 USD"
                  : ""}
              </span>{" "}
            </h3>
            {/* <div className="py-2">
              <Button
              buttonName="Read More"
              variant="button-underline"
                size="text-sm"
                />
                </div> */}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default ImagePriceCard;
