import React from "react";
import Layout from "./Layout";
const Person = ({ name, role1, image, role2 }) => {
  return (
    <div className="flex flex-col px-8 justify-start items-center text-center">
      {role1.length > 0 && (
        <div className=" w-full mt-8 font-bold text-2xl h-[20%]">{role1}</div>
      )}
      <div className={`${role1.length > 0 ? "h-[60%]" : "h-[70%]"}`}>
        <div
          className=" h-36 w-36 rounded-full mt-2"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className=" w-full mt-8 font-bold text-2xl h-[10%]">{name}</div>
      <div className=" font-semibold h-[10%] mt-8">{role2}</div>
    </div>
  );
};
const OurTeam = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center font-sans">
        <div className="font-bold text-lg ">OUR TEAM</div>
        <div className="flex flex-row mt-4">
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
        <div className="flex flex-row items-center justify-center mt-16">
          <div className="font-bold w-full">
            <div className="font-bold text-2xl text-center">
              Student Welfare & Counselling
            </div>
            <div className="flex flex-row mt-4">
              <Person
                name="Dr. D. Karthika Renuka"
                role1=""
                image="https://su.psgtech.ac.in/image/team/faculty/karthika.jpg"
                role2="Associate Dean"
              />
              <Person
                name="Mr. P. Dhanabal"
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
            <div className="flex flex-row mt-4">
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
        <div className="flex flex-col mt-8">
          <div className="font-bold text-3xl text-center">
            Office Bearers of the Students Union
          </div>
          <div className="flex flex-row items-center gap-x-8 justify-center mt-4">
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2015 - 2016
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2016 - 2017
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2017 - 2018
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2018 - 2019
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2019 - 2020
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2020 - 2021
            </div>
            <div className="rounded-2xl bg-black text-white px-4 py-2">
              2021 - 2022
            </div>
          </div>
          <div className="flex flex-row  mt-4">
            <Person
              name="Mr. Dharmendra R"
              image="https://su.psgtech.ac.in/image/team/student/2022-2023/Dharmendra.jpeg"
              role1="Chairperson"
              role2="Final Year BE RAE"
            />
            <Person
              name="Mr. Mano M"
              image="https://su.psgtech.ac.in/image/team/student/2022-2023/Mano.jpeg"
              role1="Co-Chairperson"
              role2="Final Year BE Mech(SW)"
            />
            <Person
              name="Mr. Aditya Varma"
              image="https://su.psgtech.ac.in/image/team/student/2022-2023/Aditya.jpeg"
              role1="Secretary(Men)"
              role2="3rd Year BE CSE"
            />
            <Person
              name="Ms. Sri Athrukshna B"
              image="https://su.psgtech.ac.in/image/team/student/2022-2023/Athrukshna.jpeg"
              role1="Secretary(Women)"
              role2="3rd Year BE PROD"
            />
            <Person
              name="Ms. Pavana S"
              image="https://su.psgtech.ac.in/image/team/student/2022-2023/Pavana.jpeg"
              role1="Secretary(Science)"
              role2="3rd Year MSc FDM"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
