import React from "react";
import HeroPng from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="px-4 container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px] ">
        <div className="flex flex-col justify-center gap-5">
        <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
        <div></div>
        <button></button>
        </div>
       <div className="flex flex-col justify-center">
        <img src={HeroPng} alt=""  className=" object-cover w-[300px] " />
       </div>
      </div>
    </div>
  );
};

export default Hero;
