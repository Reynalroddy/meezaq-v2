import { footer } from "@/utils/data";
import React from "react";
import Logo from "../header/Logo";
import turkey from "../../assets/turkey.png";
import nigeria from "../../assets/nigeria.png";
import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="section bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 py-9 lg:pb-14 mb-14">
          <h3 className=" font-bold text-white text-lg md:text-3xl mb-5 md:mb-0">
            MEEZAQ
          </h3>

          <div className="flex flex-col gap-3 mb-3 md:mb-0">
            <p className="text-md">No 4 Macenta Close, Abuja</p>

            <p className="text-md ">
              Aksaray Mah. Manastirli Rifat Sk. Yakut Apt. No: 21/1 Fatih
              Istanbul, Turkey
            </p>
            <p className="text-md">contact@meezaq.com.ng</p>
          </div>

          <div className="flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent hover:text-black rounded-full flex justify-center items-center transition-all"
                  key={index}
                >
                  <a href={item.href} target="_blank">
                    {<item.icon />}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center">
          &copy; MEEZAQ {year} - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
