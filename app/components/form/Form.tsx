"use client";

const Form = () => {
  return (
    <>
      <div className="w-full mx-auto  max-w-screen-2xl flex flex-col justify-center items-center p-10">
        <form className="w-1/2 ">
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
                className="w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
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
                className="w-full focus:outline-none border hover:border-black duration-500 transition-all ease-in-out py-2"
              />
            </div>

            <button className="hover:bg-black bg-mitti-secondaryTextColor text-white text-xl text-center font-bold font-serif py-2 my-2">
              Log In
            </button>

            <div className="flex justify-between items-center">
              <h4>Don&apos;t have an account?</h4>

              <button className="font-bold underline text-black">
                Sign Up
              </button>
            </div>
          </div>
          <h3 className="text-mitti-paragraphColor underline text-xl text-center py-4">
            Forgot your password?
          </h3>
        </form>
      </div>
    </>
  );
};

export default Form;
