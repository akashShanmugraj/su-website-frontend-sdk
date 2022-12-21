import React from "react";
import ContactUs from "../components/ContactUs.js";
import Navbar from "../components/NavBar.js";

const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-16 min-h-[calc(100vh-27rem)]">{children}</div>
      <ContactUs />
    </div>
  );
};

export default Layout;
