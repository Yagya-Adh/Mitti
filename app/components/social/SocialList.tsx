"use client";
import React from "react";
import Image from "next/image";
import facebook from "/public/assets/icons/facebook-svgrepo-com.svg";
import instagram from "/public/assets/icons/instagram-svgrepo-com.svg";
import linkedin from "/public/assets/icons/linkedin-svgrepo-com.svg";
import pinterest from "/public/assets/icons/pinterest-svgrepo-com.svg";
import youtube from "/public/assets/icons/youtube-play-svgrepo-com.svg";
const icons = [
  { id: 1, icon: facebook, name: "facebook" },
  { id: 2, icon: instagram, name: "Instagram" },
  { id: 3, icon: linkedin, name: "Linkein" },
  { id: 4, icon: pinterest, name: "Pinterest" },
  { id: 5, icon: youtube, name: "Youtube" },
];
interface IsocialList {
  ishover: boolean;
  item: number;
}
const SocialList = ({ ishover, item }: IsocialList) => {
  return (
    <div className="flex items-center py-5">
      {icons?.slice(0, item).map((listing) => (
        <div className="" key={listing.id}>
          <Image
            src={listing.icon}
            alt={listing.name}
            height={10}
            width={10}
            className={`border rounded-full borde-2 border-mitti-paragraphColor size-10 p-2 mx-1 ${
              ishover ? "hover:bg-mitti-secondaryTextColor " : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialList;
