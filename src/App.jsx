import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Brand/>
      <Services/>
    </div>
  );
};

export default App;
