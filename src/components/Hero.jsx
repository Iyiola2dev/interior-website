import React from "react";
import HeroPng from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="px-4 container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px] gap-10 justify-center items-center">
        {/* text section */}
        <div className="flex flex-col justify-center gap-5 md:pr-8 lg:pr-14   text-center md:text-left pt-20 md:pt-0 md:px-10">
        <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
        <div className="space-x-4">
        <button className="primary-btn uppercase text-white bg-black shadow-[5px_5px_0px_0px_#6c6c6c]">GET STARTED</button>
        <button className="primary-btn uppercase">CONTACT US</button>
        </div>
       
        </div>
        {/* image section */}
       <div className="flex flex-col justify-center items-center">
        <img src={HeroPng} alt=""  className=" object-cover w-[80%] md:w-[300px] md:scale-125 " />
       </div>
      </div>
    </div>
  );
};

export default Hero;
