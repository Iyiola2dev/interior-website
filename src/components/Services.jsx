import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Experience the highest level of comfort and elegance with our state-of-the-art facilities, designed to exceed your expectations.",
    icons: <FaVectorSquare className="rotate-45" />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "We offer premium, high-quality products crafted with precision and care to ensure satisfaction and lasting durability.",
    icons: <FaPenToSquare />,
    link: "#",
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Enjoy top-tier services and products at prices that suit every budget, delivering exceptional value without compromise.",
    icons: <BiSolidDollarCircle />,
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="container px-4 py-20 flex flex-col gap-10">
      <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <h2 className="text-3xl font-bold font-serif">What we Provide</h2>
        <p className="text-gray-500 text-sm">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* card section */}
        {ServiceCard.map((card) => {
          return (
            <div
              key={card.id}
              className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300 "
            >
              <span className="inline-block text-2xl border-2 rounded-full border-black hover:border-white hover:border-2 p-3">
                {card.icons}
              </span>
              <p className="text-2xl font-bold font-serif">{card.title}</p>
              <p className="text-gray-400 text-xs lg:text-lg">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-block border-b border-black hover:border-white"
              >
                Learn More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
