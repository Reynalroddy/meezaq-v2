"use client";
import React from "react";
// import { features } from "@/utils/data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Feature = ({
  reverse,
  features,
}: {
  reverse?: boolean;
  features: any;
}) => {
  return (
    <section className="section  pb-[40px] lg:pb-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 md:place-items-center p-4">
          <div className={reverse ? "order-last" : ""} data-aos="fade-up">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full h-[full]"
            >
              <CarouselContent>
                {features.images.map((img: any, index: any) => (
                  <CarouselItem key={index} className="">
                    <Image
                      src={img}
                      alt=""
                      width={500}
                      height={300}
                      className="h-full lg:h-[550px] w-full rounded-md "
                      //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      //   fill
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* <Image
              src={img}
              height={300}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            /> */}
            {/* <Image
              src={features.image}
              alt=""
              width={500}
              height={300}
              className="h-full w-full rounded-md "
              //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              //   fill
            /> */}
          </div>
          <div className=" flex flex-col lg:p-5">
            <h2 className="text-2xl  lg:text-3xl font-semibold mb-3">
              {features?.title}
            </h2>
            <p className="text-md mb-3 lg:text-lg">{features?.subtitle}</p>
            {/* items */}
            <div>
              {features.items.map((item: any, index: any) => {
                const { icon, title, subtitle } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0" key={index}>
                    {/* <div className="text-2xl lg:text-3xl mr-4">{<item.icon>}</div> */}
                    <item.icon className="w-12 h-12 mr-4 " />
                    <div>
                      <h4 className="text-lg  font-semibold mb-3">{title}</h4>
                      <p className="text-lg  font-medium mb-3">{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div
          className={`flex flex-col lg:flex-row lg:gap-x-[100px] lg:items-center`}
        >
        
          <div className={` ${reverse ? "-order-1" : "order-1"}`}>
           
            <Image
              src={features.image}
              alt=""
              width={500}
              height={300}
            
            />
          
          </div>
         
          <div className=" flex flex-col justify-end">
            <h2 className="title">{features?.title}</h2>
            <p className="subtitle">{features?.subtitle}</p>
           
            <div>
              {features.items.map((item: any, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0" key={index}>
                  
                    <item.icon className="w-8 h-8 text-2xl lg:text-3xl mr-4 " />
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>  */}
      </div>
    </section>
  );
};

export default Feature;
