import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroImg1 from "@/public/images/banner-1.jpg";
import HeroImg2 from "@/public/images/banner-2.jpg";
import CustomButton from "../Buttons/CustomButton";

const Hero = () => {
  return (
    <div className="relative">
      {/* <div className="absolute top-10 left-32 z-30 space-y-6 mt-7">
        <h1 className="font-bold text-4xl w-7/12">Oranges are Rich Sources of Vitamin C</h1>
        <p className="text-lg">Try the latest orange juice and cocktails now</p>
        <CustomButton 
            text="Show Now"
            type="button"
            className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800"
        />
      </div> */}

      <div className="relative">
        <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-96 w-full"
        >
          <SwiperSlide className="w-full object-cover h-full">
            <Image src={HeroImg1} className="w-full object-cover h-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={HeroImg2} className="w-full object-cover h-full" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
