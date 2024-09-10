import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";


import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className=" container py-4 flex justify-between items-center px-4"
      >
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
          <button className="primary-btn">Try For Free</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
