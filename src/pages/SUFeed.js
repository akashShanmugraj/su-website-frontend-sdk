import React, { useContext, useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import Layout from "./Layout.js";
import { BiShareAlt } from "react-icons/bi";
import axios from "axios";
import { setDashPattern } from "pdf-lib";
import { FEED_URL } from "../API/config";

const SUFeed = () => {

  const[event,setEvent]=useState();
  const url = FEED_URL;
  const sendrequest = async ()=>{
    const res = await axios.get(`${FEED_URL}`).catch((err)=>console.log(err));
    const data =await res.data;
    return data;
  }

  useEffect(()=>{
    sendrequest().then((data)=>setEvent(data));
  },[]);

  console.log(event);

  return (
    <Layout>
      <h1 className="text-4xl uppercase text-center mt-16 w-full">
        SU <span className="font-bold">Feed</span>
      </h1>
      <div className="flex flex-col lg:flex-row mt-8 w-full lg:space-x-8 px-8">
        <div className="w-full lg:w-1/4 font-sans overflow-x-hidden" >
          <h2 className="font-sans text-2xl">Alerts</h2>
          <p className="text-gray-400">No featured posts yet.</p>
        </div>
        <div className="w-full lg:w-1/2 font-sans overflow-x-hidden space-y-6">
          <section className="bg-gray-200 text-gray-600 border-2 border-dashed border-gray-400  rounded-lg p-8 w-full flex space-x-4 justify-start items-start">
            <FiAlertCircle size={48} />
            <p className="">
              This is a compilation of all the events, alerts, circulars passed
              within the institute. Students are adviced to check this feed
              frequently for updates on various information.
            </p>
          </section>
        {event && event.map((event,index)=>(
          <section className="w-full border-gray-400 border-2 rounded-lg">
            <div className="p-6 border-b-gray-400 border-b-2">
              <header className="flex items-center space-x-4">
                <div className="rounded-full w-8 h-8 aspect-square bg-gray-600" />
                <div className="">
                  <div className="flex items-center space-x-1">
                    <p className=" font-semibold">{event.orgName}</p>
                    <p className="">:</p>
                    <p className=" text-gray-500">1d</p>
                  </div>
                  <div className="text-sm text-gray-500">{event.eventName}</div>
                </div>
              </header>
              <p className="mt-4">
                {event.description}
              </p>
            </div>
            <div className="w-full">
              <div className="aspect-video" />
            </div>
            <div className="w-full flex p-6 space-x-4">
              <div className="flex-1 bg-emerald-600 hover:bg-emerald-800 w-full rounded-full px-6 py-2 text-center text-lg text-white font-semibold">
                Register
              </div>
              <BiShareAlt size={36} className="text-gray-600 hover:text-gray-700" />
            </div>
          </section>
))}
        </div>
        <div className="w-full lg:w-1/4 font-sans overflow-x-hidden">
          <h2 className="font-sans text-2xl">Spotlights</h2>
          <p className="text-gray-400">No featured posts yet.</p>
        </div>
      </div>
    </Layout>
  );
};

export default SUFeed;
