import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSparklesOutline } from "react-icons/io5";
import Layout from "./Layout";
const Person = ({ name, role1 = "", image, role2 = "" }) => {
  console.log(image);
  return (
    <div className="flex-auto md:flex flex-col px-8 justify-center items-center text-center">
      {role1.length > 0 && (
        <div className=" w-full mt-8 uppercase tracking-widest text-xl h-[20%] whitespace-nowrap">
          {role1}
        </div>
      )}
      <div className={`${role1.length > 0 ? "h-[60%]" : "h-[70%]"}`}>
        {image && <div
          className="h-44 w-44 aspect-square rounded-full mt-2 border-[#b5ecd8] border-8 box-border"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover ",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
         />}
      </div>
      <div className=" w-full mt-8 font-bold text-lg h-[10%] whitespace-nowrap">
        {name}
      </div>
      <div className=" font-semibold h-[10%] mt-8 text-indigo-700">{role2}</div>
    </div>
  );
};

const getYears = () => {
  let years = [];
  for (let i = 2015; i <= new Date().getFullYear(); i++) {
    years.push(`${i}-${i + 1}`);
  }
  return years;
};

const OurTeam = () => {
  const [team, setTeam] = useState([]);
  const [chair, setChair] = useState({});
  const [CoChair, setCoChair] = useState({});
  const [Secremale, setSecremale] = useState({});
  const [Secrefemale, setSecrefemale] = useState({});
  const [SecreScie, setSecreScie] = useState({});
  const [yearButton, setYearButton] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (yearButton) {
      for (let index = 0; index < yearButton.length; index++) {
        const element = yearButton[index];
        if (element.role === "Chairperson") {
          setChair(element);
        } else if (element.role === "Co-Chairperson") {
          setCoChair(element);
        } else if (element.role === "Secretary(Male)") {
          setSecremale(element);
        } else if (element.role === "Secretary(Female)") {
          setSecrefemale(element);
        } else if (
          element.role === "Secretary(Science)" ||
          element.role === "Associate Chairperson"
        ) {
          setSecreScie(element);
        }
      }
    }
  }, [yearButton]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/office-bearers")
      .then((res) => {
        // setTeam(res.data);
        let teams = res.data;
        let year_wise = {};
        for (let index = 0; index < teams.length; index++) {
          let element = teams[index];
          if (year_wise[element.year]) {
            year_wise[element.year].push(element);
          } else {
            year_wise[element.year] = [element];
          }
        }
        // console.log(year_wise);
        setTeam(year_wise);
        setYearButton(year_wise['2022-2023'])
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center font-sans">
        <div className="tracking-wider text-3xl mt-4">
          OUR <span className="font-bold">TEAM</span>
        </div>
        <div className="flex-auto lg:flex flex-row mt-4 w-full">
          <Person
            name="Shri. L. Gopalakrishnan"
            role1="Chief Patron"
            image="https://su.psgtech.ac.in/image/team/faculty/trustee.jpg"
            role2="Managing Trustee , PSG & Sons' Charity"
          />
          <Person
            name="Dr. K. Prakasan"
            role1="Patron"
            image="https://su.psgtech.ac.in/image/team/faculty/principle_pr.jpg"
            role2="Principal"
          />
          <Person
            name="Dr. K. Natarajan"
            role1="Dean-Student Affairs"
            image="https://su.psgtech.ac.in/image/team/faculty/natarajan.jpg"
            role2=""
          />
          <Person
            name="Dr. A. Sankar"
            role1="Associate Dean-Finance"
            image="https://su.psgtech.ac.in/image/team/faculty/shankarA.jpg   "
            role2=""
          />
        </div>
        <div className="flex-auto lg:flex flex-row items-center justify-center mt-16">
          <div className="font-bold w-full">
            <div className="font-bold text-2xl text-center">
              Student Welfare & Counselling
            </div>
            <div className="flex-auto lg:flex flex-row mt-4">
              <Person
                name="Dr.D. Karthika Renuka"
                role1=""
                image="https://su.psgtech.ac.in/image/team/faculty/karthika.jpg"
                role2="Associate Dean"
              />
              <Person
                name="Mr.P. Dhanabal"
                role1=""
                image="https://su.psgtech.ac.in/image/team/faculty/Dhanabal.jpg"
                role2="Faculty Advisor"
              />
            </div>
          </div>
          <div className="font-bold w-full">
            <div className="font-bold text-2xl text-center">
              General Counselling
            </div>
            <div className="flex-auto lg:flex flex-row mt-4">
              <Person
                name="Dr. S. Sankarakumar"
                role1=""
                image="https://su.psgtech.ac.in/image/team/faculty/shankarkumar.jpg"
                role2="Faculty Advisor"
              />
              <Person
                name="Dr. H. Rammohan"
                role1=""
                image="https://su.psgtech.ac.in/image/team/faculty/rammohan.jpg"
                role2="Faculty Advisor"
              />
            </div>
          </div>
        </div>
        <div className="flex-auto lg:flex flex-col mt-12">
          <div className="font-bold text-center text-3xl">Club Activities</div>
          <div className="text-center text-2xl mt-8 uppercase tracking-widest">
            Associated Clubs
          </div>
          <div className="font-bold text-center text-xl mt-4">
            Tech Music , Dramatics Club , Astronomy Club , Animal Welfare Club ,
            WDC , Martial Arts Club
          </div>
          <div className="flex-auto lg:flex lg:justify-center flex-row mt-4">
            <Person
              name="Dr. J. Prabhavathi"
              role1=""
              role2="Faculty Advisor"
              image="https://su.psgtech.ac.in/image/team/faculty/prabavathi.jpg"
            />
            <Person
              name="Dr. V .Krishnaraj"
              role1=""
              role2="Faculty Advisor"
              image="https://su.psgtech.ac.in/image/team/faculty/IMG_7269.jpg"
            />
          </div>
          <div className="text-center text-2xl mt-8 uppercase tracking-widest">
            Associated Clubs
          </div>
          <div className="font-bold text-center text-xl mt-4">
            CAP & Nature Club, ELS, Entrepreneurs Club, NSS, Tamil Mandram, Fine
            Arts Club, YRC, Rotaract Club, Radio Hub
          </div>
          <div className="flex-auto lg:flex lg:justify-center flex-row mt-4 ">
            <Person
              name="Dr. P. Visalakshi"
              role1=""
              role2="Faculty Advisor"
              image="https://su.psgtech.ac.in/image/team/faculty/vishalakshi.jpg"
            />
            <Person
              name="Dr. R. Senthilkumar"
              role1=""
              role2="Faculty Advisor"
              image="https://su.psgtech.ac.in/image/team/faculty/senthilkumarS.jpg"
            />
          </div>
          <div className="text-center text-2xl mt-8 uppercase tracking-widest">
            Associated Clubs
          </div>
          <div className="font-bold text-center text-xl mt-4">
            Higher Education Forum, Pathshala Club, GLF, SRC, Industry
            (Alumni)-Interaction Forum, Book Readers Club
          </div>
          <div className="flex-auto lg:flex lg:justify-center flex-row mt-4">
            <Person
              name="Mr. D. Muralidhar"
              role1=""
              role2="Associate Dean"
              image="https://su.psgtech.ac.in/image/team/faculty/muralidhar.jpg"
            />
            <Person
              name="Mr. T. Venkatachalam"
              role1=""
              role2="Faculty Advisor"
              image="https://su.psgtech.ac.in/image/team/faculty/venkatachalam.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <div className="font-bold text-3xl text-center">
            Office Bearers of the Students Union
          </div>
          <div className="flex-auto lg:flex flex-row items-center gap-x-8 justify-center mt-4 text-center">
            {getYears().map((year) => (
              <button
                className={`rounded-2xl ${isClicked ? "bg-[#aea8a5]" : "bg-black"} text-white px-4 py-2 mt-2`}
                onClick={() => {
                  setIsClicked(true);
                  console.log(year);
                  setYearButton(team[year]);
                }}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="flex-auto lg:flex flex-row  mt-4">
            <Person
              name={chair.name}
              image={chair.image_url}
              role1={chair.role}
              role2={chair.deptyos}
            />
            <Person
              name={CoChair.name}
              image={CoChair.image_url}
              role1={CoChair.role}
              role2={CoChair.deptyos}
            />
            <Person
              name={Secremale.name}
              image={Secremale.image_url}
              role1={Secremale.role}
              role2={Secremale.deptyos}
            />
            <Person
              name={Secrefemale.name}
              image={Secrefemale.image_url}
              role1={Secrefemale.role}
              role2={Secrefemale.deptyos}
            />
            <Person
              name={SecreScie.name}
              image={SecreScie.image_url}
              role1={SecreScie.role}
              role2={SecreScie.deptyos}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
