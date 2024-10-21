"use client";

import React from "react";
import ImagePriceCard from "../components/card/ImagePriceCard";
import MainImageBanner from "../components/banner/MainImageBanner";
import FilterComponent from "../categories/filter/FilterComponent";
const AllProducts = () => {
  return (
    <>
      <MainImageBanner Title={"All Product"} />
      <FilterComponent />
      <ImagePriceCard varriant="image-card" />
    </>
  );
};

export default AllProducts;
