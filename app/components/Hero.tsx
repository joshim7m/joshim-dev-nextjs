import React from "react";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-accent">
      <div className="w-full max-w-1170 mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-[70px]">
          <div className="order-last md:order-first flex flex-col justify-center gap-10 pt-10 md:pt-0">
            <h2 className="text-3xl md:text-[54px] text-center md:text-start max-w-[560px] font-bold relative md:leading-[66px]">
              Crafting responsive, fast &{" "}
              <span className="relative">beautiful user</span> interfaces.
            </h2>
            <div className="flex justify-center md:justify-start mb-10 md:mb-0">
            <Button type="button" variant="primary_btn">
              <span>Let's talk</span>
              <MoveRight />
            </Button>
            </div>
          </div>
          <div className="flex justify-end items-end pl-5 md:pl-0">
            <div className="w-full max-w-[500] relative bg-[#CADEF2] rounded-b p-4 -mb-4">
              <Image
                src="/hero-pattern.png"
                alt="pattern"
                width={126}
                height={121}
                className="absolute -top-3 -left-3"
              />
              <Image
                src="/hero-img.png"
                alt="hero image"
                width={470}
                height={455}
              />
              <div className="mb-5 md:mb-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
