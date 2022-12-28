import React from "react";
import ContactUs from "../components/ContactUs.js";
import Navbar from "../components/NavBar.js";

const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-16 min-h-[calc(100vh-27rem)] px-8 lg:px-[calc(100vw/12)]">{children}</div>
      <ContactUs />
    </div>
  );
};

export default Layout;
