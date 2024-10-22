"use client";
import ImagePriceCard from "../card/ImagePriceCard";
import SectionHeading from "../heading/SectionHeading";
import GalleryImageGroup from "./GalleryImageGroup";

const GalleryBody = () => {
  return (
    <div className="max-w-screen-2xl px-4 mx-auto">
      <GalleryImageGroup />
      <SectionHeading
        varriant="default"
        title="Latest New Articles & News Blog"
        buttonName="Discover More"
      />
      <ImagePriceCard varriant="image-card" />
    </div>
  );
};

export default GalleryBody;
