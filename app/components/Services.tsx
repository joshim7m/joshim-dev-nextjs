import { SERVICES } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-accent">
      <div className="w-full max-w-1170 mx-auto px-2 py-16 md:px-0">
        <div className="fx-center mb-10">
          <div className="section-heading">
            <h2 className="text-3xl md:text-5xl">What I do</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="text-4xl font-bold hidden md:block">My Capabilities</h3>
            <p className="text-xl text-center md:text-start font-normal text-gray-700 leading-normal">
              I will bring the breathe of our experience and industry knowledge
              to help you succeed
            </p>
          </div>
          <div className="md:col-span-2 mt-10 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
              {SERVICES.map((item, index) => (
                <div className="flex flex-col items-center md:items-start gap-3 max-w-[260px] mx-auto hover:bg-white hover:shadow md:px-10 md:pr-6 md:py-12 transition-all duration-150 ease-in-out" 
                  key={index}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                  <h4 className="font-medium text-xl">{item.title}</h4>
                  <p className="text-[15px] text-gray-700 text-center md:text-start leading-[27px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
