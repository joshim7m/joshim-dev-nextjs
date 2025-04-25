import { WORKS } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const RecentWorks = () => {
  return (
    <div className="bg-white">
      <div className="w-full max-w-1170 mx-auto px-2 py-16 md:px-0">
        <div className="fx-center mb-10">
          <div className="section-heading">
            <h2 className="text-3xl md:text-5xl">Recent Works</h2>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORKS.map((item, index) => (
              <div
                className="bg-white p-3 w-[370px] shadow rounded"
                key={index}
              >
                <div className="w-[346px] h-[207px] rounded overflow-hidden transition-all duration-200 ease-in-out">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={346}
                    height={207}
                    className="hover:opacity-90 hover:scale-125 hover:rotate-3 rounded cursor-pointer transition-all duration-200 ease-in-out"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-medium text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
            <div>
              <div className="h-[240px] md:h-[280px] rounded overflow-hidden transition-all duration-200 ease-in-out">
                <div className="flex flex-col h-full pl-12 md:pl-0">
                  <div className="grow max-w-[300px]">
                    <h6 className="uppercase text-primary mb-2">Projects</h6>
                    <h3 className="text-3xl md:text-4xl font-bold leading-[42px ] md:leading-[53px] ">
                      Selected Works from Us
                    </h3>
                  </div>
                  <div className="pb-7">
                    <Button type="button" variant="btn_outline">
                      See More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
