"use client";
import React from "react";
import Image from "next/image";
import MainImageBanner from "@/app/components/banner/MainImageBanner";
import singleData from "@/singleDetailsData.json";

interface IsingleData {
  id: number;
  title: string;
  description: string;
}

const singleDetailsData: IsingleData[] = singleData;

const BlogDetails = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <MainImageBanner Title="Cozy Corners: Natural Texture and Warmth" />
      <section className="mx-auto max-w-screen-2xl px-10">
        <Image
          src={"/assets/images/blog/cozyCorn.webp"}
          alt="blog-details"
          width={1600}
          height={200}
          className="py-5 px-10"
        />
      </section>
      <DateTime />
    </div>
  );
};

export default BlogDetails;

const DateTime = () => {
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto px-20">
        <SingleDetails />
      </div>
    </>
  );
};

const SingleDetails = () => {
  return (
    <>
      <section className="flex justify-between border-b border-b-mitti-secondaryTextColor py-4">
        <h2 className="">
          <span className="font-bold">Date:</span> September 5, 2024
        </h2>

        <h4 className="">
          <span className="font-bold">Share On:</span>
        </h4>
      </section>
      <div className="py-20">
        {singleDetailsData?.map((list) => (
          <section className="flex flex-col py-4" key={list.id}>
            <p className="font-sans text-mitti-paragraphColor">
              <b>{list.title}</b> {list.description}
            </p>
          </section>
        ))}
        <div className="flex justify-end font-serif text-mitti-secondaryTextColor">
          @ Taylor Smith
        </div>
      </div>
    </>
  );
};
