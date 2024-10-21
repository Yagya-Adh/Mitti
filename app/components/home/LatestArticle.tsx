"use client";

import BrandMarquee from "../marquee/BrandMarquee";
import SectionHeading from "../heading/SectionHeading";
import ImagePriceCard from "../card/ImagePriceCard";

const LatestArticle = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          varriant="default"
          title="Latest New Articles & News Blog"
          buttonName="Discover More"
        />
        <ImagePriceCard varriant="image-card" />
      </div>
      <BrandMarquee />
    </>
  );
};

export default LatestArticle;
