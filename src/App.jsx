import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="overflow-x-hidden px-2 py-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </div>
  );
};

export default App;
