"use client";
import Button from "../button/Button";
import Image, { StaticImageData } from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import latestProductData from "@/latestProduct.json";
import bestSellData from "@/bestSeller.json";
import { useState } from "react";
interface IlatestNewData {
  id: number;
  title: string;
  image: string;
}
const latestNewData: IlatestNewData[] = latestProductData;

interface Icard {
  varriant: "image-card" | "image-price-card";
}

interface IbestSellerProductsData {
  id: number;
  title: string;
  price?: number | null;
  actualPrice?: number | null;
  image: string | StaticImageData;
  sale?: boolean | null;
}
const bestSellerProductsData: IbestSellerProductsData[] = bestSellData;

const ImagePriceCard = ({ varriant }: Icard) => {
  // const [rating, setRating] = useState({ review: "", rating: 0 });
  /* 
  const handleStars = (selectStar) => {
    setRating((prevState) => ({ ...prevState, rating: selectStar }));
  };
   */
  const [popGrow, setPopGrow] = useState<number | null>(null);

  const handlePops = (id) => {
    setPopGrow(id);
  };

  const resethandlePops = () => {
    setPopGrow(null);
  };

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
                className="hover:scale-125 transition-all ease-linear duration-700 h-full w-full"
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
        {bestSellerProductsData?.slice(0, 4).map((list) => (
          <div
            className="flex flex-col py-10 "
            key={list.id}
            onMouseEnter={() => handlePops(list.id)}
            onMouseLeave={resethandlePops}
          >
            <div className="overflow-hidden relative flex flex-col justify-center items-center">
              <div className="w-full z-20 bg-transparent relative">
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
              <div className="relative">
                <Image
                  src={list.image}
                  width={250}
                  height={250}
                  className="hover:bg-black group z-10 hover:scale-125  transition-all ease-linear duration-700 h-full w-full"
                  alt="latest_"
                />

                {popGrow == list.id && (
                  <div className="absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center ease-linear transition-opacity duration-500">
                    <Image
                      src="/assets/images/gallery/gallery2.svg"
                      width={400}
                      height={400}
                      alt="image_hover"
                      className=" size-10 hover:size-48 transition-all ease-linear duration-500"
                    />
                  </div>
                )}
              </div>
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
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default ImagePriceCard;
