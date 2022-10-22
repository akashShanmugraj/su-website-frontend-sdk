import React from "react";
import Navbar from "../components/Navbar.js";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const COVER_IMAGE_URL =
  "https://images.unsplash.com/photo-1665780993894-ceb3a89bc5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Landing = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Navbar canScrollAdjust />
      <HeroCover
        image={COVER_IMAGE_URL}
        h1={"Be the Change."}
        h2={
          "Students Union is of epitome importance to maintaining a healthy relationship between all the student activities and the administration."
        }
      />
      <div className="h-screen bg-red-300"></div>
    </div>
  );
};

const HeroCover = ({ image, h1, h2 }) => {
  return (
    <div
      className="pt-32 h-[80vh] bg-red-300 p-4 lg:p-8 flex justify-start items-end"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image}})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="text-5xl lg:text-7xl uppercase font-sans text-transparent font-bold select-none [-webkit-text-stroke-width:1px] lg:[-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:#fff]">
          <p className="">{h1}</p>
        </div>
        <div className="flex space-x-4 mt-4 w-full">
          <div className="h-full flex items-start">
            <FaQuoteLeft size={32} className="text-white hidden lg:block" />
            <FaQuoteLeft size={24} className="text-white lg:hidden" />
          </div>
          <div className="flex items-end">
            <p className="text-white  lg:text-lg w-full lg:w-[60%] font-serif">
              {h2}
            </p>
            <div className="">
              <FaQuoteRight size={32} className="text-white hidden lg:block" />
              <FaQuoteRight size={24} className="text-white lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
