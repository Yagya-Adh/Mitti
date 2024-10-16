"use client";

import Image, { StaticImageData } from "next/image";
import BrandMarquee from "../marquee/BrandMarquee";
import SectionHeading from "../heading/SectionHeading";
import Button from "../button/Button";
import softImage from "@/app/assets/images/blog/softTextile.webp";
import transformImage from "@/app/assets/images/blog/transformLiving.webp";
import sereneImage from "@/app/assets/images/blog/sereneBathroom.webp";

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
const LatestArticle = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-10">
        <SectionHeading
          title="Latest New Articles & News Blog"
          buttonName="Discover More"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestNewData?.map((list) => (
            <div className="flex flex-col py-10 " key={list.id}>
              <div className="overflow-hidden h-['200px'] w-['100px']">
                <Image
                  src={list.image}
                  className="hover:scale-125 ease-in-out transition-all duration-700  h-full w-full"
                  alt="latest_"
                />
              </div>
              <h1 className="text-mitti-paragraphColor font-serif text-2xl py-2">
                {list.title}
              </h1>
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
      <BrandMarquee />
    </>
  );
};

export default LatestArticle;
