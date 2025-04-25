"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper 
      spaceBetween={30}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true} 
      modules={[Autoplay]}>
      {TESTIMONIALS.map((item) => (
        <SwiperSlide key={item.name}>
          <div className="bg-white w-full md:w-[534px] p-[30px] shadow">
            <div className="flex flex-col gap-8">
              <Image src="/quote.png" alt="qoute" width={39} height={29} />
              <p className="text-start leading-7">{item.text}</p>
              <div className="fy-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h4>{item.name}</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
