import { useState } from "react";
import Banner1 from "../assets/banner2.png";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to a server)
    console.log("Form submitted", formData);
    // Reset form or provide feedback to the user
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto px-4 pt-11 " id="Contacts">
      <div className=" flex justify-center md:justify-start">
        <button className="primary-btn bg-black hover:bg-white hover:text-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] flex items-center gap-2 rounded-2xl" onClick={handleHomeClick}>
          <FaArrowLeft />
          <p>Back to home page</p>
        </button>
       
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-5 ">
        <div className=" flex-1 w-[300px]  md:w-full">
          <img src={Banner1} alt="" />
        </div>
        <div className="flex-1 w-[300px] md:w-full  ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-md mx-auto border border-gray-500 p-4 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
