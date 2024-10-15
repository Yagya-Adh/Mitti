"use client";
import Link from "next/link";
import Image from "next/image";
import homeLogo from "@/app/assets/images/mainLogo.svg";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

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
  { id: 4, path: "/shop", routeName: "Shop" },
];

const NavBar = () => {
  return (
    <nav className="bg-mitti-darkBodyColor">
      <div className="flex flex-row items-center justify-between px-10 max-w-screen-2xl mx-auto ">
        <Link href="/">
          <Image src={homeLogo} alt="main_logo_" className="" />
        </Link>

        <ul className="flex items-center font-serif">
          {routes?.map((list) => (
            <Link href={list.path} key={list.id}>
              <li className="text-xl p-4 py-5 border-b-4 border-b-transparent hover:border-b-mitti-secondaryTextColor">
                {list.routeName}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center justify-between font-mono">
          <h2 className="flex items-center px-4">
            <UserIcon className="size-6 transform  hover:rotate-12" />
            <span className="px-1">LOGIN</span>
          </h2>

          <h4 className="flex items-center px-4">
            <ShoppingCartIcon className="size-6 " />
            <span className="px-1">ITEMS</span>
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
