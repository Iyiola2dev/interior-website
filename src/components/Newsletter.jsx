
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animate";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14 px-4 flex flex-col justify-center">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="mx-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptatum voluptatibus temporibus! Minima, magnam deleniti.
      </motion.p>
      {/* form template */}
      <motion.form
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="flex gap-3 flex-col md:flex-row justify-center items-center "
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <div className="">
          <button className="bg-black text-white px-6 py-4">Subscribe</button>
        </div>
      </motion.form>
    </div>
  );
};

export default Newsletter;
