import React from "react";
import banner from "../../assets/projects/HeroQuiz/banner.PNG";
import course from "../../assets/projects/HeroQuiz/course.PNG";
import quiz from "../../assets/projects/HeroQuiz/quizPage.PNG";
import statistics from "../../assets/projects/HeroQuiz/statices.PNG";

const HeroQuiz = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <section className="bg-gray-800 mt-24 text-gray-100">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Technology</p>
                <p className="leading-snug">
                  React.JS, React-router, Tailwind, Font Awesome, React Toastify
                  Etc
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Feature</p>
                <p className="leading-snug">
                  This project is about develop quiz website with React Router.
                  <br />
                  <br /> Hero Quiz is my frontend website. <br />
                  <br /> Host in Netlify
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  <a
                    onClick={() =>
                      openInNewTab("https://bright-sundae-0df97e.netlify.app/")
                    }
                    href="#_"
                    class="relative inline-block text-lg group m-2 "
                  >
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span class="relative font-bold ">Live Link</span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                  <a
                    onClick={() =>
                      openInNewTab("https://github.com/muktaranidas/Hero-Quiz")
                    }
                    href="#_"
                    class="relative inline-block text-lg group m-2"
                  >
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span class="relative font-bold">Clint Side</span>
                    </span>
                    <span
                      class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </p>
                {/* <p className="leading-snug"></p> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={banner}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-black text-gray-100 ">
        <div className="container  px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            {/* <span className="font-bold tracking-wider uppercase text-violet-400">
          Project Details
        </span> */}
            <h2 className="text-4xl font-bold lg:text-5xl">HeroQuiz Details</h2>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="max-w-lg p-4 shadow-md bg-black text-white">
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={quiz}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">
                      Start Quiz
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-lg p-4 shadow-md bg-black text-white">
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={course}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">
                      All Course
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-lg p-4 shadow-md bg-black text-white">
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={statistics}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">
                      Statistics
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroQuiz;
