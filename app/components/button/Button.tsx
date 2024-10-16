"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface IPropsButton {
  buttonName: string;
  variant: string | "button-underline";
  size?: string;
}
const Button = ({ buttonName, size, variant }: IPropsButton) =>
  variant == "button-underline" ? (
    <button
      className={`
        ${size ? size : "text-xl"}
        group
        font-bold 
         font-serif text-mitti-paragraphColor border-b-2  border-mitti-paragraphColor relative flex items-center`}
    >
      <span className={` ${size == "text-sm" ? "pe-5" : "pe-8"}`}>
        {buttonName}
      </span>
      <div className="absolute right-0">
        <ArrowRightIcon
          className={`
            ${
              size == "text-sm" ? "size-5" : "size-6"
            } -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-500`}
        />
      </div>
    </button>
  ) : null;

export default Button;
