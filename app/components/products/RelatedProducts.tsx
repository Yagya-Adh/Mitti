"use client";

import ImagePriceCard from "../card/ImagePriceCard";

const RelatedProducts = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <div className="mx-auto max-w-screen-2xl px-4 py-4">
        <h5 className="font-serif text-4xl text-center text-black">
          RELATED PRODUCT
        </h5>
        <ImagePriceCard varriant="image-price-card" />
      </div>
    </div>
  );
};

export default RelatedProducts;
