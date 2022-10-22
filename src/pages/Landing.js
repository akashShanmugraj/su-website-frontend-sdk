import React from "react";
import Navbar from "../components/Navbar.js";

const Landing = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-screen w-full bg-red-400"></div>
      <div className="h-screen w-full bg-red-300"></div>
      <div className="h-screen w-full bg-red-400"></div>
      <div className="h-screen w-full bg-red-300"></div>
    </div>
  );
};

export default Landing;
