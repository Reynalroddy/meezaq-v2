"use client";
import { slides } from "@/components/hero/Slider";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-[400px] overflow-hidden">
        <div
          className="w-max h-full flex"
          style={{ transform: `translateX(-${0 * 100}vw)` }}
        >
          <div className={` w-screen  `}>
            {/* IMAGE CONTAINER */}
            <div className="h-full w-full relative">
              <Image
                src={slides[0].img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="absolute  top-[200px] md:left-[330px] bg-black/70 rounded-md p-2 md:p-10 mx-2 md:mx-0">
                <div className=" flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                  <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-semibold text-white">
                    Discover Meezaq
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section  pb-[40px] lg:pb-[80px] pt-[40px] ">
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.935303730303!2d7.471423174727661!3d9.069658790993332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0afd8f66ae13%3A0x7a6d1db725ace37b!2s4%20Macenta%20Close%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1718924324009!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 pt-8 lg:pt-12">
            <div className="p-4 rounded-sm flex items-center flex-col shadow border border-neutral-100">
              <h4 className="text-lg font-medium">E-Mail</h4>
              <p>info@meezaq.com.ng</p>
              <p>contact-abj@meezaq.com.ng</p>
              <p>contact-tr@meezaq.com.ng</p>
            </div>
            <div className="p-4 rounded-sm flex items-center flex-col shadow border border-neutral-100">
              <h4 className="text-lg font-medium">Phone</h4>

              <p>+2349134446144</p>
              <p>+2349019263051</p>
              <p>+2348169342602</p>
              <p>+90(555)1000179</p>
            </div>
            <div className="p-4 rounded-sm flex items-center flex-col shadow border border-neutral-100">
              <h4 className="text-lg font-medium">Address</h4>
              <p>No 4 Macenta Close, Abuja Nigeria.</p>
              <p>
                Eğribucak mah fatih sultan,mehmet Bulvarı no 236
                melikgazi,Kayseri. Turkey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="container mx-auto pb-10 pt-24">
    //   <div>guy</div>
    // </section>
  );
};

export default Contact;
