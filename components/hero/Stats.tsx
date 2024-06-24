import React from "react";
import CountUp from "react-countup";
import { stats } from "@/utils/data";
const Stats = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-primary rounded-[20px] p-12 -top-[80px] relative ">
        <div className="flex flex-wrap gap-y-8 ">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center items-center"
              >
                <div className="text-2xl lg:text-4xl font-semibold text-center">
                  <CountUp end={item.value} duration={3} />
                </div>
                <div className="text-base lg:text-xl font-light max-w-[110px] mx-auto text-center">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
