"use client";
import React from "react";
import CardHeading from "./CardHead";
const ShippingAddress = () => {
  return (
    <div className="flex flex-col my-10 border border-mitti-borderColor ">
      <CardHeading Title="Shipping Address" isRequire={true} />
      <form className="flex flex-col px-4 py-2 text-mitti-secondaryTextColor font-serif">
        <div className="flex flex-col py-2">
          <label htmlFor="">Full Name *</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="text"
          />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="">Street Address *</label>
          <input
            className="focus:outline-none border border-black p-2 my-2"
            type="text"
          />
          <input
            className="focus:outline-none border border-black p-2 my-2"
            type="text"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col py-2 w-2/6 md:w-[223px]">
            <label htmlFor="">City *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 w-2/6 md:w-[223px]">
            <label htmlFor="">State/Province</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 w-2/6 md:w-[223px]">
            <label htmlFor="">Zip/Postal Code *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="">Country *</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
