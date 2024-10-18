"use client";

import Image from "next/image";
import Link from "next/link";
import keyLockIcon from "/public/assets/icons/Key_lock.svg";
interface Iform {
  variant:
    | string
    | "login"
    | "sign-up"
    | "reset-password"
    | "update-password"
    | "access-denied"
    | "page-protected"
    | "page-not-found";
}
const Form = ({ variant }: Iform) =>
  variant == "login" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("you are logged in!")} className="w-1/2 ">
          <div className="flex flex-col bg-mitti-darkBodyColor py-5 p-10 w-full">
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">Log In</h1>
              <span className="capitalize  font-mono text-sm">
                Fill in your log-in details below.
              </span>
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="eamil"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <button className="hover:bg-black bg-mitti-secondaryTextColor text-white text-xl text-center font-bold font-serif py-2 my-2">
              Log In
            </button>

            <div className="flex justify-between items-center">
              <h4>Don&apos;t have an account?</h4>

              <Link
                href={"/sign-up"}
                className="font-bold underline text-black"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <h3 className="text-mitti-paragraphColor underline text-xl text-center py-4">
            Forgot your password?
          </h3>
        </form>
      </div>
    </>
  ) : variant == "sign-up" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("sign up ")} className="w-1/2 ">
          <div className="flex flex-col bg-mitti-darkBodyColor py-5 p-10 w-full">
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">Sign Up</h1>
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="eamil"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="password"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <div className="flex py-4 items-start">
              <input type="checkbox" className="mt-1" />
              <span className="capitalize text-mitti-secondaryTextColor ms-2">
                By creating an account, I agree to this website&apos;s{" "}
                <b className="text-black">privacy policy</b>
                and
                <b className="text-black">terms of service</b>
              </span>
            </div>
            <div className="flex py-4">
              <input type="checkbox" className="" />
              <span className="capitalize text-mitti-secondaryTextColor ms-2">
                I consent to receive marketing emails.
              </span>
            </div>

            <Link
              href={"/login"}
              className="hover:bg-black bg-mitti-secondaryTextColor text-white text-xl text-center font-bold font-serif py-2 my-2"
            >
              Log In
            </Link>

            <div className="flex justify-between items-center">
              <h4>Already have an account?</h4>

              <button className="font-bold underline text-black">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </>
  ) : variant == "reset-password" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("sign up ")} className="w-1/2 ">
          <div className="flex flex-col bg-mitti-darkBodyColor py-5 p-10 w-full">
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">
                Reset Password
              </h1>
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="resetPassword"
              >
                Reset Password
              </label>
              <input
                type="text"
                id="resetPassword"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <Link
              href={"/login"}
              className="hover:bg-black bg-mitti-secondaryTextColor text-white text-xl text-center font-bold font-serif py-2 my-2"
            >
              Log In
            </Link>
          </div>

          <div>
            <Link
              href={"/login"}
              className=" capitalize underline flex justify-center items-center font-serif text-xl py-5 text-mitti-paragraphColor"
            >
              back to login
            </Link>
          </div>
        </form>
      </div>
    </>
  ) : variant == "update-password" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("sign up ")} className="w-1/2 ">
          <div className="flex flex-col bg-mitti-darkBodyColor py-5 p-10 w-full">
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">
                Update Password
              </h1>

              <p>
                Please enter your new password in the field below. Make sure you
                are not using your current password.
              </p>
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="text"
                id="newPassword"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <Link
              href={"/login"}
              className="hover:bg-black bg-mitti-secondaryTextColor text-white text-xl text-center font-bold font-serif py-2 my-2"
            >
              Update Password
            </Link>
          </div>
          <div>
            <Link
              href={"/login"}
              className=" capitalize underline flex justify-center items-center font-serif text-xl py-5 text-mitti-paragraphColor"
            >
              back to login
            </Link>
          </div>
        </form>
      </div>
    </>
  ) : variant == "access-denied" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("sign up ")} className="w-1/2 ">
          <div className="flex flex-col justify-center items-center bg-mitti-darkBodyColor p-10 w-full">
            <Image src={keyLockIcon} alt="iconDenied_" className="size-24" />
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">
                Access Denied
              </h1>

              <p>
                A site membership is required to view this page. Please{" "}
                <b className=" underline capitalize">Sign up</b>
                or <b className=" underline capitalize">Log in</b>.
              </p>
            </div>
          </div>
          <div>
            <Link
              href={"/login"}
              className=" capitalize underline flex justify-center items-center font-serif text-xl py-5 text-mitti-paragraphColor"
            >
              back to login
            </Link>
          </div>
        </form>
      </div>
    </>
  ) : variant == "page-protected" ? (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form onSubmit={() => alert("sign up ")} className="w-1/2 ">
          <div className="flex flex-col bg-mitti-darkBodyColor py-5 p-10 w-full">
            <div className=" text-center">
              <h1 className="text-4xl font-serif font-bold py-4">
                Protected Page
              </h1>
            </div>
            <div className="py-2">
              <label
                className="font-bold text-mitti-paragraphColor"
                htmlFor="pageProtected"
              >
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="text"
                id="pageProtected"
                className="ps-4 w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>
          </div>

          <div>
            <Link
              href={"/login"}
              className=" capitalize underline flex justify-center items-center font-serif text-xl py-5 text-mitti-paragraphColor"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </>
  ) : variant == "page-not-found" ? (
    <>
      <div className="bg-mitti-bodyColorTwo">
        <div className="mx-auto  max-w-screen-2xl flex flex-col justify-center items-center h-screen">
          <h1 className="text-9xl text-center py-4 scale-150 font-halant font-extrabold">
            404
          </h1>
          <h1 className="text-2xl text-center font-serif font-bold py-4">
            Page Not Found
          </h1>
          <p>
            The page you are looking for doesn&apos;t exist or has been moved
          </p>

          <div className="flex items-center justify-center">
            <Link
              href={"/"}
              className="text-center bg-mitti-secondaryTextColor hover:bg-black text-white capitalize  flex justify-center items-center font-serif text-xl mx-1 my-5 px-5 py-2"
            >
              Go Home
            </Link>

            <Link
              href={"/contact-us"}
              className="text-center border border-mitti-secondaryTextColor text-mitti-secondaryTextColor hover:bg-mitti-secondaryTextColor hover:text-white capitalize  flex justify-center items-center font-serif text-xl mx-1 my-5 px-5 py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : null;

export default Form;
