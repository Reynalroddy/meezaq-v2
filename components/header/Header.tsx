"use client";
import React, { useState, useEffect } from "react";

// import logo
import Logo from "./Logo";
// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";
// import data
import { categories, navigation } from "@/utils/data";
// import components
import Navmobile from "./Navmobile";
import ModeToggle from "./DarkMode";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
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
          {/* <ModeToggle /> */}
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl dark:text-white text-black cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}

          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12 items-center">
              {navigation.map((item, index) => {
                if (index === 1) {
                  return (
                    <NavigationMenu key={index}>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-black dark:text-white">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                              <div>
                                {categories.section1.map((item, index) => {
                                  return (
                                    <li className="mb-2" key={index}>
                                      <Link href={item.href}>{item.name}</Link>
                                    </li>
                                  );
                                })}
                              </div>

                              <div>
                                {categories.section2.map((item, index) => {
                                  return (
                                    <li className="mb-2" key={index}>
                                      <Link href={item.href}>{item.name}</Link>
                                    </li>
                                  );
                                })}
                              </div>

                              <div>
                                {categories.section3.map((item, index) => {
                                  return (
                                    <li className="mb-2" key={index}>
                                      <Link href={item.href}>{item.name}</Link>
                                    </li>
                                  );
                                })}
                              </div>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  );
                }
                return (
                  <li key={index}>
                    <Link
                      className="capitalize text-black dark:text-white hover:border-b transition-all text-sm font-medium"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {/* checkifisloggedin */}
              <li>
                <Link
                  className="capitalize text-black dark:text-white hover:border-b transition-all text-sm font-medium"
                  href={"/admin"}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <Navmobile setMobileNav={setMobileNav} mobileNav={mobileNav} />
          </div>
        </div>
      </div>
    </header>
    // <div>header</div>
  );
};

export default Header;
