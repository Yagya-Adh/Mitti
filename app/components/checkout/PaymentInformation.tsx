"use client";
import React from "react";
import CardHeading from "./CardHead";

const PaymentInformation = () => {
  return (
    <div className="flex flex-col my-10 border border-mitti-borderColor">
      <CardHeading Title="Payment Info" isRequire={true} />

      <form className="p-4 text-xl text-mitti-secondaryTextColor font-serif">
        <div className="flex flex-col py-2">
          <label htmlFor="">Card Number *</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="text"
          />
        </div>

        <div className="flex items-center">
          <div className="flex flex-col py-2 mx-1 w-3/6">
            <label htmlFor=""> Expiration Date *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>

          <div className="flex flex-col py-2 mx-1 w-3/6">
            <label htmlFor="">Security Code *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="">Billing Address Same As Shipping</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="checkbox"
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
