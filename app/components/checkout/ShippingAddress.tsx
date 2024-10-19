"use client";
import React from "react";
import CardHeading from "./CardHead";
const ShippingAddress = () => {
  return (
    <div className="flex flex-col py-10 border">
      <CardHeading Title="Shipping Address" isRequire={true} />
      <form className="flex flex-col px-4 py-2">
        <div className="flex flex-col">
          <label htmlFor="">Full Name *</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="text"
          />
        </div>

        <div className="flex flex-col">
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
          <div className="flex flex-col w-1/2">
            <label htmlFor="">City *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="">State/Province</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="">Zip/Postal Code *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col">
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
