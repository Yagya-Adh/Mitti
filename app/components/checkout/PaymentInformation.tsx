"use client";
import React from "react";
import CardHeading from "./CardHead";

const PaymentInformation = () => {
  return (
    <div className="flex flex-col my-10 border border-mitti-secondaryTextColor">
      <CardHeading Title="Payment Info" isRequire={true} />

      <form className="p-4">
        <div className="flex flex-col">
          <label htmlFor="">Card Number *</label>
          <input
            className="focus:outline-none border border-black p-2"
            type="text"
          />
        </div>

        <div className="flex items-center">
          <div className="flex flex-col mx-1">
            <label htmlFor=""> Expiration Date *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>

          <div className="flex flex-col mx-1">
            <label htmlFor="">Security Code *</label>
            <input
              className="focus:outline-none border border-black p-2"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col">
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
