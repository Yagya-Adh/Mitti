"use client";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import dataGrid from "@/aboutGrid.json";
const data = dataGrid;

const GridImageGroup = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <GridOne />
      <GridTwo />
    </div>
  );
};

export default GridImageGroup;

const GridOne = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2  items-center">
        <div>
          <p className="text-4xl font-serif max-w-xl">
            Building Mitti: Our Goals, Dreams, Achievements, and the Road Ahead
          </p>
        </div>

        {data.slice(0, 1).map((list) => (
          <div key={list.id} className="overflow-hidden">
            <Image
              src={list.image}
              width={400}
              height={200}
              className="hover:scale-110 transition-all ease-linear duration-500"
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GridTwo = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2  items-center relative">
        {data.slice(1, 2).map((list) => (
          <div key={list.id} className="overflow-hidden">
            <Image
              src={list.image}
              width={400}
              height={200}
              className="hover:scale-110 transition-all ease-linear duration-500"
              alt="grid_image"
            />
          </div>
        ))}
        {/*  <div className="grid grid-cols-1 ">
          <p className="py-4">
            Our commitment to quality and craftsmanship ensures that you&apos;ll
            find unique items that reflect your personal style and enhance your
            home&apos;s ambiance.
          </p>
          <Button variant="button-underline" buttonName="Discover More" />
        </div> */}
        {data.slice(2, 3).map((list) => (
          <div
            key={list.id}
            className="overflow-hidden flex items-center justify-between"
          >
            <div className="hidden  lg:block items-center">
              <p className="py-4">
                Our commitment to quality and craftsmanship ensures that
                you&apos;ll find unique items that reflect your personal style
                and enhance your home&apos;s ambiance.
              </p>
              <Button variant="button-underline" buttonName="Discover More" />
            </div>
            <Image
              src={list.image}
              width={250}
              height={100}
              className="hover:scale-110  transition-all ease-linear duration-500 h-full w-full lg:w-auto"
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
