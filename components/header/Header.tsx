"use client";
import React, { useState, useEffect } from "react";

// import logo
import Logo from "./Logo";
// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";
// import data
import { navigation } from "@/utils/data";
// import components
import Navmobile from "./Navmobile";
import ModeToggle from "./DarkMode";
const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      if (window.scrollY > 100) {
        console.log("above");
      }
      return window.scrollY > 20 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={` fixed  py-4 md:py-5  w-full transition-all duration-300 shadow-md bg-white dark:bg-black z-30 ${
        // if bg is true
        bg
          ? "py-2 md:py-3 lg:py-4"
          : // if bg is false
            ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-black dark:text-white hover:border-b transition-all text-sm font-medium"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ModeToggle />
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <Navmobile />
          </div>
        </div>
      </div>
    </header>
    // <div>header</div>
  );
};

export default Header;
