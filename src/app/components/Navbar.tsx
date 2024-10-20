"use client";

import Link from "next/link";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    // <nav className="bg-blue-600 dark:bg-gray-900 text-white py-8 px-[100px]">
    //   <div className="container flex items-center justify-between mx-auto">
    //     {/* Title */}
    //     <div className="text-xl font-bold mr-16">Simple Blog</div>

    //     {/* Tabs */}
    //     <div className="flex space-x-8 mr-auto">
    //       <Link href="/" className="text-base hover:underline">
    //         Home
    //       </Link>
    //       <Link href="/post/single" className="text-base hover:underline">
    //         Single Post
    //       </Link>
    //       <Link href="/pages" className="text-base hover:underline">
    //         Pages
    //       </Link>
    //       <Link href="/contact" className="text-base hover:underline">
    //         Contact
    //       </Link>
    //     </div>

    //     {/* Search Field */}
    //     <div className="flex items-center space-x-4">
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="px-4 py-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none"
    //       />

    //       {/* Night Mode Toggle */}
    //       <button
    //         onClick={toggleDarkMode}
    //         className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none"
    //       >
    //         {darkMode ? (
    //           <FiSun className="text-yellow-500 w-5 h-5" />
    //         ) : (
    //           <FiMoon className="text-blue-500 w-5 h-5" />
    //         )}
    //       </button>
    //     </div>
    //   </div>
    // </nav>

    <div className="px-[350px] py-8 flex-col justify-start items-start gap-2.5 flex">
      <div className="justify-start items-start gap-[118px] inline-flex">
        <div className="w-[158px] h-9 relative"></div>
        <div className="justify-start items-center gap-[21px] flex">
          <div className="h-6 justify-center items-center gap-10 flex">
            <div className="justify-start items-center gap-1 flex">
              <Link
                href="/"
                className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal"
              >
                Home
              </Link>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal">
                Blog
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal">
                Single Post
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal">
                Pages
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal">
                Contact
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-10 flex">
            <div className="w-[166px] h-9 pl-4 pr-2 py-2 bg-zinc-100 rounded-[5px] flex justify-start items-center gap-3">
              <input
                type="text"
                placeholder="Search"
                className="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Inter'] leading-tight bg-transparent border-none outline-none"
              />
              <div className="w-4 h-4 relative" />
            </div>

            <label className="w-12 h-7 relative cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                // onChange function here
              />
              <div className="w-12 h-7 left-0 top-0 absolute bg-[#e8e8ea] rounded-[100px] transition-colors duration-300" />
              <div className="h-6 p-[5px] left-[2px] top-[2px] absolute bg-white rounded-[100px] shadow flex justify-start items-start gap-2.5 transition-transform duration-300 transform translate-x-0">
                <div className="w-3.5 h-3.5 relative" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
