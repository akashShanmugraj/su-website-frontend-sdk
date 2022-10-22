import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [onTop, setOnTop] = useState(true);

  const changeOnTop = () => {
    console.log(window);
    if (window.scrollY >= 150) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeOnTop, false);
  });

  return (
    <nav className="fixed z-10 h-auto w-full">
      <div
        className={`flex justify-between items-center  w-full ${
          onTop
            ? "p-8 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.5)]"
            : "p-4 bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,1)]"
        } transition-all `}
      >
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/PSG_College_of_Technology_logo.png/220px-PSG_College_of_Technology_logo.png"
            alt="logo"
            className={`h-auto ${
              onTop ? "w-12" : "w-6"
            } transition-all ease-in-out`}
            style={{ filter: "invert(1)" }}
          />
          <div className="space-y-0.5">
            <h1
              className={`${
                onTop ? "text-3xl" : "text-lg"
              } font-serif text-white`}
            >
              Student's Union
            </h1>
            <h2
              className={`text-sm font-serif text-white ${!onTop && "hidden"}`}
            >
              PSG College of Technology
            </h2>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <NavItem text="SU By Law" />
          <NavItem text="Clubs" />
          <NavItem text="Associations" />
          <NavItem text="Schemes & Wings" />
          <NavItem text="Gallery" />
          <NavItem text="Our Team" />
          <NavItem text="Contact Us" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="font-sans uppercase">
      <Link
        to="/as"
        className="text-white"
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
      >
        <p className="">{text}</p>
        <div className="mt-1 h-[1px] flex justify-center items-center">
          <div
            className={`h-full ${
              isHover ? "w-[70%]" : "w-0"
            } transition-all bg-white origin-center`}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
