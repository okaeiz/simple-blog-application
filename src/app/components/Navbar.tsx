"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        console.log("Dark mode");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("Light mode");
      }
      return newMode;
    });
  };

  return (
    <div className="px-[350px] py-8 flex-col justify-start items-start gap-2.5 flex">
      <div className="justify-start items-start gap-[118px] inline-flex">
        <div className="w-[158px] h-9 relative"></div>
        <div className="justify-start items-center gap-[21px] flex">
          <div className="h-6 justify-center items-center gap-10 flex">
            <Link
              href="/"
              className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal hover:text-blue-500 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal hover:text-red-500"
            >
              Blog
            </Link>
            <Link
              href="/notFound"
              className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal hover:text-red-500"
            >
              Single Post
            </Link>
            <Link
              href="/notFound"
              className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal hover:text-red-500"
            >
              Pages
            </Link>
            <Link
              href="/contact"
              className="text-[#3b3c4a] text-base font-normal font-['Work Sans'] leading-normal hover:text-blue-500 hover:font-bold"
            >
              Contact
            </Link>
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
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div
                className={`w-12 h-7 left-0 top-0 absolute bg-[#e8e8ea] rounded-[100px] transition-colors duration-300 ${
                  darkMode ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <div
                className={`h-6 p-[5px] left-[2px] top-[2px] absolute bg-white rounded-[100px] shadow flex justify-start items-start gap-2.5 transition-transform duration-300 transform ${
                  darkMode ? "translate-x-full" : "translate-x-0"
                }`}
              >
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
