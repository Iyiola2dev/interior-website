import { div } from "framer-motion/client";
import React from "react";

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
    <div className="container py-14 px-4">
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <h1 className="text-4xl font-bold font-serif">
          Words from our customers
        </h1>
        <p className="text-gray-500 text-sm max-w-[350px] mx-auto">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      {/* Testimonial card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TestimonialData.map((card) => {
          return (
            <div key={card.id}>
              <div className="flex  items-center gap-5">
                <img className="w-[60px]  rounded-full" src={card.img} alt="" />
                <div className="space-y-1">
                  <p className="text-sm font-bold font-serif">{card.name}</p>
                  <p>{card.designation}</p>
                  <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
