import React from "react";

const Steps = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 px-4">
        <h1 className=" text-center mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-4xl lg:text-5xl ">
          Steps to remove background in seconds
        </h1>
        <div className=" px-32 py-8 my-6 flex  justify-between sm:flex-wrap">
          {/* card 1  */}

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 lucide lucide-upload-icon lucide-upload"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Upload image
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500">
              Choose any image from your device or drag and drop.
            </p>
          </div>

          {/* card 2  */}

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mb-2 lucide lucide-brush-cleaning-icon lucide-brush-cleaning"><path d="m16 22-1-4"/><path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"/><path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z"/><path d="m8 22 1-4"/></svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                Remove background
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500">
              Automatically erase the background in seconds.
            </p>
          </div>

          {/* card 3  */}

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mb-2 lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Download image
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500">
              Save your new background-free image instantly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
