"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Stats from "./Stats";

const slides = [
  {
    id: 1,
    title: " MEEZAQ ,Home of LUXURY",
    description: "Inspiring accessories delight!",
    img: "/home-1.jpg",
    url: "/",
    bg: "bg-black/70",
  },
  {
    id: 2,
    title: "We Are Bursting With LUXURY",
    description: "Making furnishing fun again!",
    img: "/home-2.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Discover The Best Collections",
    description: "Interiors,fittings,beds,bath...",
    img: "/home-3.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Your Satisfaction,Our Joy",
    description: "Over 100k luxury item delivered!",
    img: "/home-4.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 4000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="h-[900px] overflow-hidden  ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div className={`${slide.bg} w-screen h-full `} key={slide.id}>
            {/* IMAGE CONTAINER */}
            <div className="h-full w-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="absolute  top-[300px] md:left-[330px] bg-black/70 rounded-md p-2 md:p-10 mx-2 md:mx-0">
                <div className=" flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                  <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-semibold text-white">
                    {slide.title}
                  </h1>
                  <h2 className="text-lg lg:text-2xl 2xl:text-4xl  text-white">
                    {slide.description}
                  </h2>
                  <Link href={slide.url}>
                    <button className="rounded-md bg-black text-white py-3 px-4 md:px-6 font-semibold">
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto md:left-1/2  left-[40%] bottom-12 md:bottom-8 flex gap-4 ">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-white cursor-pointer flex  items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="-top-[150px] relative container mx-auto ">
        <Stats />
      </div> */}
    </div>
  );
};

export default Slider;
