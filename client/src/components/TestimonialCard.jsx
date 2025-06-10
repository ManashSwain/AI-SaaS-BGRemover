import React from "react";

const TestimonialCard = () => {
  return (
    <>
      <div className="bg-yellow-400 py-8">
        <h1 className=" text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-4xl lg:text-5xl">
          They love us. You will too.
        </h1>
        <figure className="max-w-screen-md mx-auto text-center my-12">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
              <cite className="pe-3 font-medium text-gray-900">
                Michael Gough
              </cite>
              <cite className="ps-3 text-sm text-gray-200">CEO at Google</cite>
            </div>
          </figcaption>
        </figure>
        <div className="text-center">
          <a
            href="#"
            class="inline-flex font-medium text-xl items-center text-blue-600 hover:underline"
          >
            Read Success Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
