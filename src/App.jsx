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


const App = () => {
  return (
    <div className="overflow-x-hidden px-2">
      <Navbar />
      <Hero/>
      <Brand/>
      <Services/>
      <Banner/>
     <Banner2/>
     <Testimonial/>
     <Newsletter/>
     <Footer/>
    </div>
  );
};

export default App;
