import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Brand/>
    </div>
  );
};

export default App;
