"use client";
import React from "react";
import BrandMarquee from "../components/marquee/BrandMarquee";
import GalleryBody from "../components/gallery/GalleryBody";
import MainImageBanner from "../components/banner/MainImageBanner";

const Gallery = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <MainImageBanner Title={"Gallery"} />
      <GalleryBody />
      <BrandMarquee />
    </div>
  );
};

export default Gallery;
