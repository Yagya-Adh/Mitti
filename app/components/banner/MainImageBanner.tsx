"use client";

import Image from "next/image";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/16/solid";
interface Imain {
  Title: string;
}
const MainImageBanner = ({ Title }: Imain) => {
  return (
    <div className="bg-mitti-darkBodyColor">
      <section className="w-full relative">
        <Image
          src="/assets/mainsection.webp"
          alt="main_banner_"
          className="w-full h-60 z-10"
          width={1000}
          height={50}
        />
        <div className="relative mx-auto max-w-screen-2xl bg-transparent">
          <div className="absolute bottom-24  z-20 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-5xl text-white">{Title}</h2>
              <div className="flex items-center text-white">
                <HomeIcon className="size-7" />
                <ChevronDoubleRightIcon className="size-7" />
                <span>{Title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainImageBanner;
