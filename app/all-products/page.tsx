"use client";
import Link from "next/link";
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
          <div className="absolute top-0 h-screen w-1/5 z-40">
            <div className="bg-mitti-bodyColor h-full p-10">
              <span
                className="flex justify-end text-xl"
                onClick={filterNavBarPop}
              >
                X
              </span>

              <section className="py-10">
                <span className="font-serif text-3xl">Categories</span>

                <ul className="flex flex-col py-4 leading-10">
                  {navCategoryLink?.map((list) => (
                    <Link href={list.path} key={list.id}>
                      <li
                        className={`
                      max-w-sm  
                      font-serif
                      text-mitti-paragraphColor     
                      cursor-pointer
                      group  
                      `}
                      >
                        {list.name}
                        <div className="h-0.5 bg-transparent rounded-full">
                          <div className="bg-mitti-paragraphColor rounded-full h-0.5 transition-all duration-300 ease-in-out w-0 group-hover:w-full"></div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </section>
            </div>
            <div className="bg-black opacity-80 w-full"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;

const navCategoryLink = [
  { id: 1, path: "/all-products/", name: "All Products" },
  { id: 2, path: "/categories/bath-room", name: "Bathroom" },
  { id: 3, path: "/categories/home-decor", name: "Home decor" },
  { id: 4, path: "/categories/dining", name: "Dining" },
  { id: 5, path: "/categories/kitchen", name: "kitchen" },
  { id: 6, path: "/categories/pottery", name: "Pottery" },
];
