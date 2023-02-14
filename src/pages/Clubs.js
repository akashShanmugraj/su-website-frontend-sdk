import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Layout from "./Layout.js";
import { fetchAllClubsLogo } from "../API/calls.js";

function ClubListing() {
    return (

            <div className={'max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700'}>
                <a>
                    <img className={"rounded-t-lg"} src={"https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"}/>
                </a>
                <div className={"p-5"}>
                    <a href = "#">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Book Readers Club</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Smells like paper, just outta press</p>
                </div>
            </div>
    )
}
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
        <div className={'grid grid-cols-4 gap-10 py-10'}>
            <ClubListing />
            <ClubListing />
            <ClubListing />
            <ClubListing />
            <ClubListing />
            <ClubListing />

        </div>
    </Layout>
  );
};

export default Clubs;
