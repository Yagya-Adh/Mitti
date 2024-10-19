"use client";
import React from "react";
import CardHeading from "./CardHead";

const CustomerInformation = () => {
  return (
    <div className="flex flex-col my-10 border border-mitti-secondaryTextColor">
      <CardHeading Title="Customer Info" isRequire={true} />

      <div className="flex flex-col p-4">
        <label htmlFor="email">Email *</label>
        <input
          type="text"
          id="email"
          className="focus:outline-none border border-black p-2"
        />
      </div>
    </div>
  );
};

export default CustomerInformation;
