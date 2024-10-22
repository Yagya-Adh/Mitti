"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface IfilterProps {
  filterClick: () => void;
}
const FilterComponent = ({ filterClick }: IfilterProps) => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto ">
        <div className="py-10 flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-3 px-3 border border-black focus:outline-none"
            />
            <MagnifyingGlassIcon className="size-12 bg-mitti-secondaryTextColor p-1 text-white" />
          </div>

          <div className="flex items-center" onClick={filterClick}>
            <Image
              src="/assets/icons/Filter.svg"
              alt="filter_"
              width={24}
              height={24}
            />
            <span className="font-bold text-xl ms-2">Filter</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterComponent;
