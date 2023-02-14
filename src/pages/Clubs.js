import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Layout from "./Layout.js";
import { fetchAllClubsLogo } from "../API/calls.js";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetchAllClubsLogo()
      .then((res) => {
        console.log(res.data);
        setClubs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

var setWidth = 8
  return (
    <Layout>
      <h1 className="text-4xl uppercase text-center mt-16">
        Our <span className="font-bold">Clubs</span>
      </h1>
      <div className="grid grid-cols-4 gap-3 py-10">
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          <div><p><b>Card1</b></p></div> 
        </div>
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          Card2 
        </div>
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          Card3 
        </div>
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          Card4 
        </div>
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          Card5 
        </div>
        <div className="border-2 rounded-md w-36 h-40 bg-[#ABCEDF]">
          Card6 
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;
