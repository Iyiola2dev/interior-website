import { delay, motion } from "framer-motion";

import { FaStar } from "react-icons/fa";
import { SlideLeft, SlideUp } from "../animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Iyiola Dave",
    designation: "Developer",
    img: "https://th.bing.com/th/id/OIP.R8w49Pa8MmHzp49oj3pn8QHaHa?rs=1&pid=ImgDetMain",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui iure nostrum corporis modi voluptatum?",
  },
  {
    id: 2,
    name: "Daniel Doe",
    designation: "Designer",
    img: "https://th.bing.com/th/id/OIP.R8w49Pa8MmHzp49oj3pn8QHaHa?rs=1&pid=ImgDetMain",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui iure nostrum corporis modi voluptatum?",
  },
  {
    id: 3,
    name: "Michael",
    designation: "Manager",
    img: "https://th.bing.com/th/id/OIP.R8w49Pa8MmHzp49oj3pn8QHaHa?rs=1&pid=ImgDetMain",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis qui iure nostrum corporis modi voluptatum?",
  },
];

const Testimonial = () => {
  return (
    <div className=" py-14 px-4">
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our customers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      {/* Testimonial card */}

      <div
        className="bg-black px-10 py-[4rem] text-white
      "
      >
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 p-3 bg-black text-white hover:bg-white hover:text-black "
              >
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[50px]  rounded-full"
                    src={card.img}
                    alt=""
                  />
                  <div className="space-y-1 flex flex-col justify-center lg:justify-between lg:items-center lg:flex-row gap-1 lg:gap-5">
                    <div className="flex flex-col ">
                      <p className="text-sm font-bold font-serif">
                        {card.name}
                      </p>
                      <p className="text-sm font-bold">{card.designation}</p>
                    </div>
                    <div className="text-xs mt-2 flex gap-1 ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="mt-5 border-t-2 border-gray-500 pt-5">
                  <p className="text-sm text-gray-500 ">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
