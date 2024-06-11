import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between  border-8 border-solid border-red-700 mb-4 w-full">
      <div>
        <a className="mr-10 text-red-700 font-extrabold text-5xl" href="/">
          Navbar
        </a>
      </div>
      <div className="mx-auto m-2 border-8 border-solid border-yellow-400">
        <div className="relative">
          <input
            className="border border-black rounded-lg pl-8 pr-10 py-2 w-full"
            type="text"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <span className="text-sm font-bold  text-gray-600">lisbon</span>
          </div>
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            <span className="text-sm text-gray-600 mr-16">12/12/2020</span>
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h1 className="text-yellow-400 text-5xl font-extrabold mr-64">Search</h1>
    </nav>
  );
};

export default Navbar;
