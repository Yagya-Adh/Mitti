"use client";
import React from "react";
import Image from "next/image";
import iconData from "@/iconsList.json";
interface Iicons {
  id: number;
  icon: string;
  name: string;
}

const icons: Iicons[] = iconData;

interface IsocialList {
  ishover: boolean;
  item: number;
}
const SocialList = ({ ishover, item }: IsocialList) => {
  return (
    <div className="flex items-center py-4">
      {icons?.slice(0, item).map((listing) => (
        <div className="" key={listing.id}>
          <Image
            src={listing.icon}
            alt={listing.name}
            height={10}
            width={10}
            className={`border rounded-full borde-2 border-mitti-paragraphColor size-10 p-2 mx-1 ${
              ishover
                ? "hover:bg-mitti-secondaryTextColor transition-all ease-in-out duration-300 "
                : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialList;
