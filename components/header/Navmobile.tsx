"use client";

import React from "react";
// import data
import { navigation } from "@/utils/data";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Navmobile = ({
  setMobileNav,
  mobileNav,
}: {
  setMobileNav: any;
  mobileNav: boolean;
}) => {
  const { data } = useSession();
  return (
    <nav className="bg-white dark:bg-black shadow-2xl w-full h-full">
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="text-3xl  text-black dark:text-white   font-bold  cursor-pointer p-3"
      >
        <CgClose />
      </div>
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-xl font-medium capitalize text-black dark:text-white"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {/* checkifisloggedin */}
        {!data?.user && (
          <li>
            <Link
              className="text-xl font-medium capitalize text-black dark:text-white"
              href={"/auth/login"}
            >
              Login
            </Link>
          </li>
        )}
        {data?.user && (
          <li>
            <Link
              className="text-xl font-medium capitalize text-black dark:text-white"
              href={"/admin"}
            >
              Admin
            </Link>
          </li>
        )}

        {data?.user && (
          <li>
            <span
              className="text-xl font-medium capitalize text-black dark:text-white cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navmobile;
