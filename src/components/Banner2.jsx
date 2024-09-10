import { motion } from "framer-motion";

import Banner1 from "../assets/banner2.png";
import { SlideUp } from "../animation/animate";

const Banner2 = () => {
  return (
    <div>
      <div className="container px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 flex justify-center  flex-col t ">
            <motion.h1
              className="text-4xl font-bold font-serif"
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
            >
              {" "}
              Simple way to make stylish living room
            </motion.h1>
            <motion.p
              className="text-gray-500 text-sm leading-7"
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
            >
              Our mission is to create collaborative environments where every
              team member contributes to producing innovative and effective
              solutions for success.
            </motion.p>
            <motion.div
              className="flex gap-3 "
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">15</p>
                <p className="text-gray-500 text-sm ">Years of Experience</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">350</p>
                <p className="text-gray-500 text-sm ">Happy Clients</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">34</p>
                <p className="text-gray-500 text-sm ">Award Gained</p>
              </div>
            </motion.div>
            <div>
              <motion.button
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
              >
                Contact us
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
