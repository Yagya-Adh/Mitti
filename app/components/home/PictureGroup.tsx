"use client";
import PictureCard from "../card/PictureCard";
import expImage from "@/app/assets/images/home/betterPrice.webp";
import expTwoImage from "@/app/assets/images/home/elevateYour.webp";

const data = [
  { id: 1, image: expImage, text: "Better price, Great furniture" },
  { id: 2, image: expTwoImage, text: "Elevate Your Style with Mitti" },
];

const PictureGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 px-4">
      {data?.map((list) => (
        <PictureCard key={list.id} image={list.image} text={list.text} />
      ))}
    </div>
  );
};

export default PictureGroup;
