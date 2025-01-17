import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Layout from "./Layout.js";
import { fetchClubDescription } from "../API/calls.js";
//? import PersonList from "./ClubDescription.js";

function ClubListing(props) {
    return (
            <a href={props.clubLink}>
              <div className={'max-w-sm bg-white border-2 border-black rounded-3xl overflow-hidden'}>
                  <a>
                      <img className={"rounded-t-lg"} src={props.clubImage}/>
                  </a>
                  <div className={"p-5"}>
                      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">{props.clubName}</h5>
                      <p class="mb-3 font-normal text-gray-700"><i>{props.clubTagLine}</i></p>
                  </div>
              </div>
            </a>
    )
}


const Clubs = () => {
  const [clubs, setClubs] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3002/api/clubs')
      .then((res) => {
        let clubData = res.data
        setClubs(clubData)
        // console.log(clubs)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

// * console.log(clubs)
// * ⬆️ works

// todo Render Card component directly from API Fetch
// todo Exclude ADMIN at 0 index while rendering 

// ? API call does not have image link or clubDescription/clubTagLine
// ? All clubImages (if present) would not be in same dimensions and would cause misproportionate  
// ? Considering adding "category" field inside the card, with or without replacing TagLine

  return (
    <Layout>
      <h1 className="text-4xl uppercase text-center mt-16">
        Our <span className="font-bold">Clubs</span>
      </h1>
        <div className={'grid grid-cols-4 gap-10 py-10'}>
            <ClubListing clubName = "BRC Club" clubImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mercado_de_Col%C3%B3n%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-29%2C_DD_07.JPG/750px-Mercado_de_Col%C3%B3n%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-29%2C_DD_07.JPG"/>
            {/* <ClubListing sampleClubData/> */}
            <ClubListing />
            <ClubListing />
            <ClubListing />
            <ClubListing />

        </div>
    </Layout>
  );
};

export default Clubs;
