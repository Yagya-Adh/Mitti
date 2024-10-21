"use client";

import React from "react";

const ShippingInforamtion = ({ title, listData }) => {
  return (
    <div className="flex flex-col font-sans text-center md:text-start py-5">
      <h3 className="text-3xl text-start text-black font-serif py-2">
        {title}
      </h3>

      <p className="font-sans">{listData.slug}</p>
      <h2 className="font-bold">Estimated Shipping Time</h2>
      <span> {listData.estimatedTime}</span>

      <p>
        Read more information about our <b> shipping and delivery</b>
      </p>
    </div>
  );
};

export default ShippingInforamtion;
