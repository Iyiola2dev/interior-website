import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Testimonial from "./components/Testimonial";


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Brand/>
      <Services/>
      <Banner/>
     <Banner2/>
     <Testimonial/>
    </div>
  );
};

export default App;
