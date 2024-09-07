import React from "react";
import Logo from "../assets/logo.png";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className=" container py-4 flex justify-between items-center px-4">
        {/* logo section */}
        <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold"> Interior</span>
       
        </div>
       
        {/* nav links */}
        {/* <div className='flex  gap-5' >
            {NavLinks.map((link)=>{
                return(
                <a href = {link.link} key={link.id} className='mx-4 text-black'>{link.title}</a>
            )})}
        </div> */}
        <ul className=" hidden md:flex">
          <Link spy={true} smooth={true} to="#">
            <li className="mx-4 text-sm font-semibold">About</li>
          </Link>
          <Link spy={true} smooth={true} to="#">
            <li className="mx-4 text-sm font-semibold">Services</li>
          </Link>
          <Link spy={true} smooth={true} to="#">
            <li className="mx-4 text-sm font-semibold">Project</li>
          </Link>
          <Link spy={true} smooth={true} to="#">
            <li className="mx-4 text-sm font-semibold">Contact</li>
          </Link>
          
        </ul>
        <div>
          <button className="text-sm lg:text-base border-black px-4 py-2 border-[1px] shadow-[5px_5px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:bg-black hover:text-white cursor-pointer duration-300">Try For Free</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
