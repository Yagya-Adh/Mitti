"use client";
import Image, { StaticImageData } from "next/image";
import aBrandImage from "/public/assets/images/home/latestArticle/aCompany.svg";
import xBrandImage from "/public/assets/images/home/latestArticle/companyX.svg";
import mBrandImage from "/public/assets/images/home/latestArticle/mountainCompany.svg";
import faceBrandImage from "/public/assets/images/home/latestArticle/faceCompany.svg";
import leafBrandImage from "/public/assets/images/home/latestArticle/leafCompany.svg";
import nineBrandImage from "/public/assets/images/home/latestArticle/nineCompany.svg";
import rBrandImage from "/public/assets/images/home/latestArticle/rCompany.svg";
import yourBrandImage from "/public/assets/images/home/latestArticle/yourCompany.svg";
import Marquee from "react-fast-marquee";

interface IData {
  id: number;
  brandImage: StaticImageData;
}
const data: IData[] = [
  { id: 1, brandImage: aBrandImage },
  { id: 2, brandImage: xBrandImage },
  { id: 3, brandImage: mBrandImage },
  { id: 4, brandImage: faceBrandImage },
  { id: 5, brandImage: rBrandImage },
  { id: 6, brandImage: leafBrandImage },
  { id: 7, brandImage: nineBrandImage },
  { id: 8, brandImage: yourBrandImage },
];
const BrandMarquee = () => {
  return (
    <Marquee>
      <div className="flex items-center py-4">
        {data?.map((list) => (
          <Image
            key={list.id}
            src={list.brandImage}
            alt="brand_"
            height={160}
            width={160}
            className="hover:-translate-y-3 ease-in-out duration-500 transition-all mx-10"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default BrandMarquee;
