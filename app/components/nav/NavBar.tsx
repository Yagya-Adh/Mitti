"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface Iroutes {
  id: number;
  path: string;
  routeName: string;
}

const routes: Iroutes[] = [
  { id: 1, path: "/", routeName: "Home" },
  { id: 2, path: "/about", routeName: "About" },
  { id: 3, path: "/blog", routeName: "Blog" },
  { id: 4, path: "/contact-us", routeName: "Contact-Us" },
  { id: 5, path: "/shop", routeName: "Shop" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bg-mitti-darkBodyColor sticky top-0 z-20 shadow-md">
        <div className="flex flex-row items-center justify-between  max-w-screen-2xl mx-auto ">
          <div
            className="py-5 flex items-center lg:hidden"
            onClick={handleOpenNavbar}
          >
            <Bars3Icon className="size-8" />
          </div>
          <Link href="/">
            <Image
              src="/assets/images/mainLogo.svg"
              height={120}
              width={120}
              alt="main_logo_"
              className=""
            />
          </Link>

          <ul className="items-center font-serif hidden lg:flex">
            {routes?.map((list) => (
              <Link href={list.path} key={list.id}>
                <li className="text-xl p-4 py-7 border-b-4 border-b-transparent hover:border-b-mitti-secondaryTextColor">
                  {list.routeName}
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center justify-between font-mono">
            <Link href={"/login"}>
              <h2 className="flex items-center px-4">
                <UserIcon className="size-6  hover:[transform:rotateY(180deg)] transition-all ease-in-out duration-500" />
                <span className="px-1">LOGIN</span>
              </h2>
            </Link>

            <Link href={"/"}>
              <h4 className="flex items-center px-4 ">
                {/* [perspective:100px][transform-style:perserve-3d] group-hover:[transform:rotateY(180deg)] or, hover:-rotateY-180 */}
                <ShoppingCartIcon className="size-6 hover:[transform:rotateY(180deg)] transition-all ease-in-out duration-500" />
                <span className="px-1">ITEMS</span>
              </h4>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`${
          !open
            ? " -translate-y-96 transition-all ease-in-out duration-500 bg-none"
            : "translate-y-1 transition-all ease-in-out duration-500 py-10 bg-mitti-darkBodyColor rounded-2xl"
        } `}
      >
        <ul className="flex flex-col px-10 font-serif lg:hidden">
          {routes?.map((list) => (
            <Link href={list.path} key={list.id}>
              <li className="text-xl p-4 py-5 border-b-transparent hover:border-b hover:border-mitti-secondaryTextColor">
                {list.routeName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
