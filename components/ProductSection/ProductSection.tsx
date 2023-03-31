import React from "react";
import FruitJuiceImage from "@/public/images/Fruit Juice.jpg";
import WinesImage from "@/public/images/Wines.jpg";
import PerfumesImage from "@/public/images/Perfumes.jpeg";
import CreamsAndLotionsImage from "@/public/images/Creams & Lotions.jpeg";
import Image from "next/image";

const ProductSection = () => {
  return (
    <div className="w-full my-8">
      <div className="w-[88%] mx-auto h-[100vh] grid grid-cols-1 sm:w-10/12 sm:grid-cols-2 sm:h-[100vh] sm:mx-auto sm:grid-rows-2 gap-1 lg:grid-cols-3 lg:grid-rows-2">
        <div className="col-span-1 relative cursor-pointer">
          <Image
            src={FruitJuiceImage}
            className="w-full h-full object-cover"
            alt={"FruitJuiceImage"}
          />
          <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 transition-opacity duration-300">
            <p className="text-white font-bold text-lg bg-black w-full text-center py-2 opacity-50">Fruit Juice</p>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <Image
            src={WinesImage}
            className="w-full h-full object-cover"
            alt={"WinesImage"}
          />
          <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 transition-opacity duration-300">
            <p className="text-white font-bold text-lg bg-black w-full text-center py-2 opacity-50">Wines</p>
          </div>
        </div>
        <div className="lg:row-span-2 relative cursor-pointer">
          <Image
            src={PerfumesImage}
            className="w-full h-full object-cover"
            alt={"PerfumesImage"}
          />
          <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 transition-opacity duration-300">
            <p className="text-white font-bold text-lg bg-black w-full text-center py-2 opacity-50">Perfumes</p>
          </div>
        </div>
        <div className="lg:col-span-2 relative cursor-pointer">
          <Image
            src={CreamsAndLotionsImage}
            className="w-full h-full object-cover"
            alt={"CreamsAndLotionsImage"}
          />
          <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 transition-opacity duration-300">
            <p className="text-white font-bold text-lg bg-black w-full text-center py-2 opacity-50">Creams & Lotions</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .overlay:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProductSection;
