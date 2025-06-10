import React from "react";

const BlogCard = () => {
  return (
    <>
    <div className="bg-yellow-400 py-12 px-4">
        <div className="  flex justify-between items-center px-28">
             <h1 className="mb-4   text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-4xl lg:text-5xl">
            Blogs
          </h1>
          <p className="flex items-center font-bold text-gray-700">See other articles
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </p>
          
        </div>
        <div className="flex justify-evenly mt-8">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
      >
        <h5 className="mb-2 text-md font-normal  tracking-tight text-gray-500 ">
          May 09, 2025
        </h5>
        <p className=" font-bold text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
      >
       <h5 className="mb-2 text-md font-normal  tracking-tight text-gray-500 ">
          May 09, 2025
        </h5>
        <p className=" font-bold text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 "
      >
       <h5 className="mb-2 text-md font-normal  tracking-tight text-gray-500 ">
          May 09, 2025
        </h5>
        <p className=" font-bold text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
      </div>
      </div>
    </>
  );
};

export default BlogCard;
