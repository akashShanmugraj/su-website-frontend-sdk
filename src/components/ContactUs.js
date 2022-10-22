import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ContactUs = () => {
  return (
    <footer className="bg-black w-full p-8">
      <h1 className="text-white font-sans tracking-wider text-4xl uppercase font-semibold">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 mt-8 space-x-6">
        <div className="flex items-center justify-center">
          <iframe
            title="map"
            style={{ border: "0", width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1857162154975!2d76.99993861416318!3d11.024688692153381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG+College+Of+Technology!5e0!3m2!1sen!2sin!4v1545481997242"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="space-y-12">
          <div className="flex items-center space-x-4">
            <HiOutlineMail className="text-white" size={32} />
            <div className="">
              <h1 className="text-gray-400 text-lg font-semibold ">Email</h1>
              <h2 className="text-white text-xl font-serif">
                studentsunion@psgtech.ac.in
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BsTelephone className="text-white" size={32} />
            <div className="">
              <h1 className="text-gray-400 text-lg font-semibold">
                Phone Number
              </h1>
              <h2 className="text-white text-xl font-serif">
                +91 422 257 0000
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IoLocationOutline className="text-white" size={32} />
            <div className="">
              <h1 className="text-gray-400 text-lg font-semibold">Location</h1>
              <h2 className="text-white text-xl font-serif">
                F Block 2nd Floor, PSG College of Technology, Coimbatore.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
