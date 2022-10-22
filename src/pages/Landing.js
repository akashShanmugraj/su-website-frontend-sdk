import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdOutlineGraphicEq } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiLink } from "react-icons/bi";

const COVER_IMAGE_URL =
  "https://images.unsplash.com/photo-1665780993894-ceb3a89bc5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Landing = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Navbar canScrollAdjust />
      <HeroCover
        image={COVER_IMAGE_URL}
        h1={"Be the Change."}
        h2={
          "Students Union is of epitome importance to maintaining a healthy relationship between all the student activities and the administration."
        }
      />
      <div className="flex flex-col-reverse lg:flex-row justify-start items-stretch w-full ">
        <div className="w-full lg:w-3/4">
          <AboutUs />
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:items-stretch">
            <IconBackgroundSection
              title="Our Mission"
              icon={<MdOutlineGraphicEq />}
              body={
                "Students Union is of epitome importance to maintaining a healthy relationship between all the student activities and the administration. The Students Union has got its own unique set of cabinet members who get selected by the authorities of the college every year. Activities are performed by the Students Union guided by the Dean - Students Affairs and the respective faculty advisors."
              }
            />
            <IconBackgroundSection
              title="Our Plan"
              icon={<FiSun />}
              body={
                "Our main objective is to identify and encourage creative talents, inculcate the spirit of discipline, leadership, social awareness, and promote physical and mental development among students. We stage competitions based on creativity, cultural literacy, sports, and general awareness, conducting seminars on topics of local, national, and international interest, organising symposia, social welfare activities, and proposing the names of deserving students to Financial Committee for financial assistance."
              }
            />
            <IconBackgroundSection
              title="Our Vision"
              icon={<BsTrophy />}
              body={
                "The Students Welfare Committee assists students in overcoming challenges that they may encounter during their academic pursuits. It also delivers an indulging academic environment wherein our students will be able to learn, grow, and discover themselves as they aspire to be the change. PSG Tech firmly believes that every individual is a champion, and they deserve to be given the baton to lead the world."
              }
            />
          </div>
          <AboutCollege />
        </div>
        <div className="w-full lg:w-1/4 bg-indigo-900 py-8 space-y-20">
          <StatSection
            stats={[
              { num: 25, tagline: "Clubs" },
              { num: 38, tagline: "Associations" },
              { num: 5, tagline: "Schemes" },
              { num: 4, tagline: "Wings" },
            ]}
          />
          <Announcements />
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

const HeroCover = ({ image, h1, h2 }) => {
  return (
    <div
      className="pt-32 h-[80vh] bg-red-300 p-4 lg:p-8 flex justify-start items-end"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image}})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="text-5xl lg:text-7xl uppercase font-sans text-transparent font-bold select-none [-webkit-text-stroke-width:1px] lg:[-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:#fff]">
          <p className="">{h1}</p>
        </div>
        <div className="flex space-x-4 mt-4 w-full">
          <div className="h-full flex items-start">
            <FaQuoteLeft size={32} className="text-white hidden lg:block" />
            <FaQuoteLeft size={24} className="text-white lg:hidden" />
          </div>
          <div className="flex items-end">
            <p className="text-white  lg:text-lg w-full lg:w-[60%] font-serif">
              {h2}
            </p>
            <div className="">
              <FaQuoteRight size={32} className="text-white hidden lg:block" />
              <FaQuoteRight size={24} className="text-white lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const IMAGE =
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80";
  return (
    <div className="w-full p-8 lg:pr-0 flex items-stretch">
      <div className="w-full lg:w-2/3 lg:mr-8 py-6">
        <h2 className="text-2xl uppercase font-sans tracking-wider">
          About Us
        </h2>
        <h1 className="text-5xl font-bold uppercase font-sans tracking-wider">
          Student's Union
        </h1>
        <div
          className="w-full my-4 h-[200px] lg:hidden"
          style={{
            background: `url(${IMAGE})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <p className="font-sans text-sm mt-8 tracking-wide text-justify lg:text-left">
          PSG College of Technology aspires to develop life skills and engage
          students in a variety of activities by hosting seminars, workshops,
          conferences, and club activities under twenty-six different clubs,
          thirty-eight unique technical associations, and nine chapters all of
          which led by PSG's student representative body, the Students Union.
          The Students Union is the official organization of students at PSG
          College of Technology. Being the main representative body of the
          students, the Students Union strives to provide opportunities for the
          students to forge and scale up their technical skills and knowledge
          through various affiliated Associations. It also promotes social,
          cultural, and literacy activities through the Clubs that conduct
          numerous workshops, guest lectures, and events throughout the year to
          build opportunities for the students to showcase and sculpt their
          emerging talents.
        </p>
      </div>
      <div
        className="w-1/3 hidden lg:block"
        style={{
          background: `url(${IMAGE})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

const AboutCollege = () => {
  const IMAGE = "https://www.psgtech.edu/icaars2022/img/speakers/1.jpg";
  return (
    <div className="w-full p-8 lg:pr-0 flex items-stretch">
      <div className="w-full lg:w-2/3 lg:mr-8 py-6">
        <h2 className="text-2xl uppercase font-sans tracking-wider">
          About College
        </h2>
        <h1 className="text-5xl font-bold uppercase font-sans tracking-wider">
          PSG College of Technology
        </h1>
        <div
          className="w-full my-4 h-[200px] lg:hidden"
          style={{
            background: `url(${IMAGE})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <p className="font-sans text-sm mt-8 tracking-wide text-justify lg:text-left">
          PSG & Sons' Charities Trust established the PSG Industrial Institute
          in 1926, which has its headquarters in Peelamedu, Coimbatore. In 1951,
          G. R. Damodaran founded PSG College of Technology. PSG College of
          Technology strives to provide ambitious students with a plethora of
          opportunities, knowledge, and facilities. For years, PSG Tech, as it
          is fondly called, has been a symbol of pride and quality education not
          only in its home city but across the nation. PSG College of Technology
          set a benchmark in the advancing world, thus becoming an institution
          for academic excellence, with a futuristic mission of providing
          world-class engineering education, fostering research and development.
          It inspires innovative applications of technology and moulds young men
          and women to become potential engineers in this technically
          competitive world for the betterment of the country. It has stood out
          amongst all the other competitors in the field of engineering
          education as an AICTE-approved, Anna University-affiliated, and ISO
          9001-certified institution.
        </p>
      </div>
      <div
        className="w-1/3 hidden lg:block"
        style={{
          background: `url(${IMAGE})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

const IconBackgroundSection = ({ title, icon, body }) => {
  return (
    <div
      className="bg-emerald-50 p-8 w-full relative"
      style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" }}
    >
      {React.cloneElement(icon, {
        className:
          "absolute -top-8 -right-8 text-4xl text-emerald-500 opacity-25",
        size: 196,
      })}
      <div className="p-3 rounded-full bg-emerald-800 text-white w-fit shadow-lg ">
        {React.cloneElement(icon, {
          size: 32,
        })}
      </div>
      <h1 className="mt-4 font-serif text-xl font-semibold text-emerald-700">
        {title}
      </h1>
      <p className="mt-4 font-sans text-emerald-600 text-sm">{body}</p>
    </div>
  );
};

const StatSection = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-x-0 lg:gap-y-8 px-8">
      {stats.map((stat, index) => (
        <div className="text-white flex flex-col items-center space-y-1">
          <h1 className="text-6xl font-sans font-bold">{stat.num}</h1>
          <h2 className="font-serif text-sm tracking-wider">{stat.tagline}</h2>
        </div>
      ))}
    </div>
  );
};

const Announcements = () => {
  const dummyAnnouncements = [
    {
      type: "Event",
      title: "ICAARS 2022",
      date: "21st - 23rd January 2022",
      body: "The First and Second International Conference on Advancements in Automation, Robotics and Sensing was hosted in Coimbatore, India by the Department of Robotics and Automation Engineering, PSG College of Technology",
      link: "https://www.psgtech.edu/icaars2022/",
    },
    {
      type: "Event",
      title: "INTRAMS 2022",
      date: "21st - 23rd January 2022",
      body: "Cultural events are events designed for entertainment and enjoyment of a more or less wide audience.",
      link: "https://www.psgtech.edu/intrams2022/",
    },
    {
      type: "Classified",
      title: "Need volunteers for Republic Day",
      date: "25th January 2022",
      body: "Volunteers are needed for Republic Day celebrations at PSG College of Technology",
      link: "https://www.psgtech.edu/",
    },
  ];

  const [announcements, setAnnouncements] = useState([
    ...dummyAnnouncements,
    ...dummyAnnouncements,
    ...dummyAnnouncements,
  ]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-serif text-white">Announcements</h1>
        <div className="w-[70%] h-[1px] mt-1 bg-white"></div>
      </div>
      <div className="flex flex-col space-y-6 w-full py-4 h-[650px] overflow-y-auto">
        {announcements.map((anmt, index) => (
          <div className="px-8">
            <p className="text-sm text-gray-300 italic ">{anmt.type}</p>
            <div className="flex w-full">
              <h1 className=" text-white font-bold font-sans w-2/3">
                {anmt.title}
              </h1>
              <p className="text-xs text-gray-300 text-right whitespace-nowrap">
                {anmt.date}
              </p>
            </div>
            <div className="flex w-full mt-1">
              <p className="text-xs text-gray-100 text-ellipsis [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] overflow-hidden">
                {anmt.body}
              </p>
              <a href={anmt.link}>
                <BiLink
                  size={24}
                  className="ml-4 text-white hover:text-gray-400"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactFooter = () => {
  return <footer className="bg-black w-full p-8">
    <h1 className="text-white font-sans tracking-wider text-4xl uppercase font-semibold">Contact Us</h1>
  </footer>;
};

export default Landing;
