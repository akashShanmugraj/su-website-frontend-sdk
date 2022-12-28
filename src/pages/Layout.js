import React from "react";
import ContactUs from "../components/ContactUs.js";
import Navbar from "../components/NavBar.js";

const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-16 min-h-[calc(100vh-8rem)] lg:px-[calc(100vw/12)] bg-gray-50">
        {children}
      </div>
      <ContactUs />
    </div>
  );
};

export default Layout;
