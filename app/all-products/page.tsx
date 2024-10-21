"use client";

import React, { useState } from "react";
import ImagePriceCard from "../components/card/ImagePriceCard";
import MainImageBanner from "../components/banner/MainImageBanner";
import FilterComponent from "../categories/filter/FilterComponent";
const AllProducts = () => {
  const [open, setOpen] = useState(false);

  const filterNavBarPop = () => {
    return setOpen(!open);
  };
  return (
    <>
      <div className="bg-mitti-bodyColor relative z-10">
        <MainImageBanner Title={"All Product"} />
        <FilterComponent filterClick={filterNavBarPop} />
        <ImagePriceCard varriant="image-card" />

        {open && (
          <div className="absolute  top-0 h-screen z-40">
            <div className="bg-mitti-bodyColor h-full w-1/5 p-10">
              <h1
                className="flex justify-end text-xl"
                onClick={filterNavBarPop}
              >
                X
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              exercitationem iusto facere facilis quasi. Sed mollitia velit,
              alias facilis quisquam consectetur culpa doloribus nostrum
              possimus nobis, magni, quae aliquam itaque.
            </div>
            <div className="bg-black opacity-80 w-full"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
