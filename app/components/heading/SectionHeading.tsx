"use clinet";
import React from "react";
import Button from "../button/Button";
interface IPropsSection {
  title: string;
  describe?: string;
  buttonName: string;
  varriant: "default" | "flex-col";
}
const SectionHeading = ({
  title,
  describe,
  buttonName,
  varriant,
}: IPropsSection) =>
  varriant == "flex-col" ? (
    <section
      className={`     
     flex 
     flex-col 
     py-4
    `}
    >
      <div className="text-mitti-secondaryTextColor">
        <h2 className="text-4xl font-serif max-w-sm capitalize text-black">
          {title}
        </h2>
        <p>{describe && describe}</p>
      </div>
      <div>
        <Button buttonName={buttonName} variant="button-underline" />
      </div>
    </section>
  ) : varriant == "default" ? (
    <section
      className={`     
       flex 
       justify-between 
       items-center 
       py-4
    `}
    >
      <div className="text-mitti-secondaryTextColor">
        <h2 className="text-4xl font-serif max-w-sm capitalize">{title}</h2>
        <p>{describe && describe}</p>
      </div>
      <Button buttonName={buttonName} variant="button-underline" />
    </section>
  ) : null;

export default SectionHeading;
