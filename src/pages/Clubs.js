import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Layout from "./Layout.js";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos", {})
      .then((res) => {
        console.log(res);
        setClubs(
          res.data.map((cl) => ({
            title: cl.title,
            image_url: cl.url,
            _id: cl.id,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className="p-8 ">
        <h1 className="text-black tracking-wider text-4xl font-bold uppercase">
          Clubs
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-stretch w-full mt-8">
          {clubs.map((club) => (
            <GridItem title={club.title} img={club.image_url} />
          ))}
        </div>
      </div>
      <div className="p-8 ">
        <h1 className="text-black tracking-wider text-4xl font-bold uppercase">
          Associations
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-stretch w-full mt-8">
          {clubs.map((club) => (
            <GridItem title={club.title} img={club.image_url} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const GridItem = ({ title, img }) => {
  return (
    <div
      className="w-full aspect-square overflow-y-hidden group"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full space-x-6 opacity-0 group-hover:opacity-100 transition-all group-hover:bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] p-2 flex justify-around items-end w-full">
        <p className=" overflow-y-hidden uppercae text-white font-serif select-none [-webkit-line-clamp:2] text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box] flex-1">
          {title}
        </p>
        <Link to="/club/9374563497" className="">
          <TbExternalLink size={32} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Clubs;
