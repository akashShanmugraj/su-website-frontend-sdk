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

  return (
    <Layout>
      <h1 className="text-4xl uppercase text-center mt-16">
        Our <span className="font-bold">Clubs</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mt-8">
        {clubs.map((club) => (
          <div className="w-full">
            <div className="w-full aspect-square border-gray-600 border p-8">
              <div
                className="w-full h-full hover:scale-110 transition-all duration-300"
                style={{
                  background: `url(${club.image_url})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <p className="text-lg font-semibold font-sans mt-4">{club.clubName}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Clubs;
