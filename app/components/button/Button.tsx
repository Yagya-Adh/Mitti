"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface IPropsButton {
  buttonName: string;
  variant: string | "button-underline";
}
const Button = ({ buttonName, variant }: IPropsButton) =>
  variant == "button-underline" ? (
    <button className="font-bold text-xl font-serif text-mitti-paragraphColor border-b-2  border-mitti-paragraphColor relative flex items-center">
      <span className="pe-8">{buttonName}</span>
      <div className="absolute right-0">
        <ArrowRightIcon className="size-6 -rotate-45 hover:rotate-0 transition-all ease-in-out duration-500" />
      </div>
    </button>
  ) : null;

export default Button;
