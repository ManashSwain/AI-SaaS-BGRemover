import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="flex justify-evenly items-center px-28 py-8 bg-yellow-400">
        <div className="flex flex-col w-[40vw]">
             <h1 className="mb-4   text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-4xl lg:text-5xl">
            Get Updates
          </h1>
          <p className="text-gray-700">
            Sign up for our mailing list to receive news and updates about remove.bg products and services.
          </p>
        </div>
        <form className="max-w-md mx-auto w-[60vw]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
             
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CallToAction;
