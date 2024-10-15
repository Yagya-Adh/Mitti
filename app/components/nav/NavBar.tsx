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
      <div className="px-10 max-w-screen-2xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image src={homeLogo} alt="main_logo_" className="" />
          </Link>

          <ul className="flex items-center">
            {routes?.map((list) => (
              <Link href={list.path} key={list.id}>
                <li className="font-bold p-4">{list.routeName}</li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <h2 className="flex items-center">
              <UserIcon className="size-8" />
              LOGIN
            </h2>

            <h4 className="flex items-center">
              <ShoppingCartIcon className="size-8" />
              ITEMS
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
