"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SectionHeading from "../heading/SectionHeading";
import CrossMarquee from "../marquee/CrossMarquee";
import latestFeaturedData from "@/featuredImageData.json";
interface IlatestNewData {
  id: number;
  title: string;
  image: string;
}
const latestNewData: IlatestNewData[] = latestFeaturedData;
const FeaturedCategories = () => {
  return (
    <>
      <FeaturedCard />
      <CrossMarquee />
    </>
  );
};

export default FeaturedCategories;

const FeaturedCard = () => {
  return (
    <section className="bg-mitti-darkBodyColor">
      <div className="mx-auto max-w-screen-2xl px-10">
        <SectionHeading
          varriant="default"
          title="Featured Categories"
          describe="Browse our curated collections for every style."
          buttonName="All Categories"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {latestNewData?.map((list) => (
            <div className="flex flex-col py-10 " key={list.id}>
              <div className="overflow-hidden h-['200px'] w-['100px']">
                <Image
                  src={list.image}
                  className="hover:scale-125 transition-all ease-linear duration-700  h-full w-full"
                  alt="latest_"
                  height={400}
                  width={400}
                />
              </div>
              <div className="group flex justify-between items-center border-b border-b-mitti-secondaryTextColor py-2">
                <h1 className="text-mitti-paragraphColor font-serif font-bold py-2">
                  {list.title}
                </h1>
                <ArrowRightIcon className="size-6 text-mitti-secondaryTextColor transition-all ease-in-out duration-500 tranform -rotate-45 group-hover:rotate-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
