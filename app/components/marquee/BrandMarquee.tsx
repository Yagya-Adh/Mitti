"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface IData {
  id: number;
  brandImage: string;
}
const data: IData[] = [
  { id: 1, brandImage: "/assets/images/home/latestArticle/aCompany.svg" },
  { id: 2, brandImage: "/assets/images/home/latestArticle/companyX.svg" },
  {
    id: 3,
    brandImage: "/assets/images/home/latestArticle/mountainCompany.svg",
  },
  { id: 4, brandImage: "/assets/images/home/latestArticle/faceCompany.svg" },
  { id: 5, brandImage: "/assets/images/home/latestArticle/rCompany.svg" },
  { id: 6, brandImage: "/assets/images/home/latestArticle/leafCompany.svg" },
  { id: 7, brandImage: "/assets/images/home/latestArticle/nineCompany.svg" },
  { id: 8, brandImage: "/assets/images/home/latestArticle/yourCompany.svg" },
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
