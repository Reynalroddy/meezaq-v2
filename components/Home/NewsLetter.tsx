import Image from "next/image";
import React from "react";
import footer from "../../assets/footer.jpg";
import ban1 from "../../assets/ban-1.jpeg";
const NewsLetter = () => {
  return (
    <section className="section bg-primary min-h-[400px] ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-9">
          <div className="relative h-[300px]">
            <Image
              src={footer}
              alt="og"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              fill
              className="rounded-lg h-full"
            />
          </div>

          <div
            className="w-full 
           text-center lg:text-left text-white"
          >
            <h2 className="text-3xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal">
              Have inquiries about our Products?
            </h2>
            <p className="text-xl font-light mb-10">Send us a message</p>
            <div className="flex flex-col lg:flex-row gap-[22px]">
              <input
                className=" h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600 dark:text-white rounded-lg lg:flex-1"
                type="text"
                placeholder={"write a message"}
              />
              <button className="bg-black dark:bg-white h-[60px] dark:text-black px-7 rounded-lg font-medium text-xl transition-all mb-4 md:mb-0">
                {"Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
