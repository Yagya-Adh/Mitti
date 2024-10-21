"use client";
import PictureCard from "../card/PictureCard";
import mainBannerImage from "@/mainbannerImages.json";
const data = mainBannerImage;

const PictureGroup = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 px-4">
      {data?.map((list) => (
        <PictureCard key={list.id} image={list.image} text={list.text} />
      ))}
    </section>
  );
};

export default PictureGroup;
