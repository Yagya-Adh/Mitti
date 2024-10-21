"use client";
import Image from "next/image";
import MainImageBanner from "@/app/components/banner/MainImageBanner";
import Button from "@/app/components/button/Button";
import allproductDetails from "@/products.json";

const data = allproductDetails;

import React from "react";

const SingleProduct = () => {
  return (
    <main>
      {data?.map((list) => (
        <div key={list.id}>
          <MainImageBanner Title={list.title} />

          <section className="grid grid-cols-10 gap-10  items-start relative bg-mitti-bodyColor">
            <aside className="row-span-10 col-span-6 grid grid-cols-6 items-center">
              <h2 className="col-span-1 p-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus eum praesentium maiores doloribus, vitae ea. Iusto quo
                sunt ad pariatur tempore odio quidem, nihil laboriosam aliquam
                incidunt blanditiis reiciendis esse?
              </h2>
              <div className="col-span-5">
                <Image
                  src={list.image}
                  alt={list.title}
                  width={600}
                  height={1000}
                  className=""
                />
              </div>
            </aside>

            <aside className="flex flex-col sticky top-14 text-mitti-secondaryTextColor py-10 col-span-3">
              <h5>{list.starts}</h5>

              <h1 className="font-serif text-3xl text-black">{list.title}</h1>

              <p className="">{list.description}</p>
              <h3 className="">${list.price} USD</h3>

              <form className="flex flex-col">
                <label>Quantity</label>
                <div className="flex w-full">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="focus:outline-none  border-transparent w-1/4 px-1 py-2"
                  />
                </div>
                <Button variant="button-default" buttonName="Add to Cart" />
              </form>
            </aside>
          </section>
        </div>
      ))}
    </main>
  );
};

export default SingleProduct;
