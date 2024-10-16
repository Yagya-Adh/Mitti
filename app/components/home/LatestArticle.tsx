"use client";

import React from "react";
import BrandMarquee from "../marquee/BrandMarquee";
import SectionHeading from "../heading/SectionHeading";
import Button from "../button/Button";

const latestNewData = [
  { id: 1, title: "Soft Textiles in Minimalist Spaces", image: "" },
  { id: 2, title: "Transform Living Space with Handmade Pottery", image: "" },
  { id: 3, title: "Serene Bathroom: The Beauty of Functional Art", image: "" },
];

const LatestArticle = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-10">
        <SectionHeading title="Latest New Articles & News Blog" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestNewData?.map((list) => (
            <div key={list.id}>
              <h1 className="">{list.title}</h1>
              <Button buttonName="Read More" variant="button-outline" />
            </div>
          ))}
        </div>
      </div>
      <BrandMarquee />
    </>
  );
};

export default LatestArticle;
