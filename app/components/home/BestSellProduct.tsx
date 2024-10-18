"use client";

import React from "react";
import SectionHeading from "../heading/SectionHeading";
import ImagePriceCard from "../card/ImagePriceCard";

const BestSellProduct = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <SectionHeading
        title="Best Seller Products"
        describe="Visit our shop to see amazing creations from our designers."
        buttonName="All Products"
      />
      <ImagePriceCard varriant="image-price-card" />
    </div>
  );
};

export default BestSellProduct;
