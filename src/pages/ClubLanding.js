import React from "react";
import Layout from "./Layout";

const ClubLanding = () => {
  const BANNER_IMG =
    "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const LOGO_IMG =
    "https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <Layout>
      <div className=" px-8 lg:px-[calc(100vw/6)] w-full bg-gray-200">
        <div
          className="h-[300px] w-full"
          style={{
            background: `url(${BANNER_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
         />
        <div className="flex items-center space-x-6 -mt-48">
          <div
            className="w-64 h-64 aspect-square rounded-full border-8 border-white ml-16"
            style={{
              background: `url(${LOGO_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
           />
          <div className="">
            <p className="text-white font-sans text-4xl font-bold">Red Bull</p>
            <p className="text-gray-200">Since 2006</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// onst Top

export default ClubLanding;
