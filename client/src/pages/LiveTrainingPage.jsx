import React, { useState } from "react";
import webSecNinja from "../assets/images/clientLogos/webSecNinja.png";
import Day1 from "../components/pageSections/Day1";
import Day2 from "../components/pageSections/Day2";
import Day3 from "../components/pageSections/Day3";
const LiveTrainingPage = () => {
  const [day1, setDay1] = useState(true);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);

  return (
    <div className="">
      <div className="live-edition-container  bg-white sm:p-4 lg:px-28 lg:py-14 flex flex-col items-stretch">
        <div className="title sm:px-2 lg:px-36 text-3xl font-Playfiar-600 bg-white">
          WebSecNinja 2.0 Live Edition
        </div>
        <div className="image sm:px-2 lg:px-36 bg-white sm:py-5 lg:py-10">
          <img src={webSecNinja} alt="" className="lg:w-[750px]" />
        </div>
        <div className="desc sm:px-2 lg:px-36 flex flex-col gap-10">
          <span className="py-4 text-gray text-justify">
            This is a brand new and unique web security course that takes the
            learner to the next level of web security. A perfect blend of latest
            and lesser known web attacks that are explained with ultimate
            details, accompanied by demos and “how tos” that you can apply in
            real world red-team pen-testing. The course curriculum is designed
            to include web attacks and techniques that are not much documented
            in books, trainings, courses and elsewhere along with the well known
            OWASP Top 10 web vulnerabilities. To make the course more effective
            and practical, a live CTF will be organized for the attendees to
            apply what they have just learned. This course is made in such a way
            to accommodate latest attacks as and when they are discovered or
            published on various conferences like BlackHat, DEFCON, OWASP AppSec
            etc.
          </span>
          <span className="py-4 text-gray text-justify">
            This course is best suited for pentesters, web security architects,
            students, web developers, javascript developers, security engineers,
            and security consultants. The contents of the course are well
            structured to satisfy all kinds of audience from beginner to
            advanced level of competence. This course try to cover such attacks
            and techniques and helps you to become the Jedi Master of Web
            Security.
          </span>
        </div>
        <div className="requirement-container sm:px-2 lg:px-36 flex flex-col gap-10">
          <div className="title pt-16 sm:text-xl lg:text-2xl font-poppins">
            What are the requirements?
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">
              Basic idea of how web applications work.
            </li>
            <li className="list-none">
              Knowledge of client side JavaScript and HTML.
            </li>
            <li className="list-none">
              Basic scripting knowledge in Python is good to have.
            </li>
            <li className="list-none">
              Minimum 2 GB RAM and 20 GB HDD Full Virtualization support to run
              VMWare or VirtualBox
            </li>
            <li className="list-none">
              WiFi/Ethernet support for connectivity.
            </li>
            <li className="list-none">
              Full Administrative access and USB ports enabled.
            </li>
          </div>
        </div>

        <div className="take-away-container sm:px-2 lg:px-36 flex flex-col gap-10">
          <div className="title pt-16 sm:text-xl lg:text-2xl font-poppins">
            What are the take aways?
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">OpSecX Certificate of Completion</li>
            <li className="list-none">Course Slides and Cheatsheets</li>
            <li className="list-none">
              Vulnerable apps to practise your skills
            </li>
            <li className="list-none">
              Learn about OWASP Top 10 Web vulnerabilities
            </li>
            <li className="list-none">
              Learn about latest and lesser known Web Attacks
            </li>
            <li className="list-none">
              Art of spawning shells with Injection attacks
            </li>
          </div>
        </div>

        <div className="course-details-container sm:px-2 lg:px-36 flex flex-col gap-10">
          <div className="title pt-16 sm:text-xl lg:text-2xl font-Playfiar-600">
            Course Details
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">Duration: 3 days </li>
            <li className="list-none">Language: English</li>
            <li className="list-none">Location: As requested and onsite</li>
            <li className="list-none">
              Trainer: <span className="text-orange">Ajin Abraham</span>{" "}
            </li>
            <li className="list-none">No of Students: 10 – 25</li>
            <li className="list-none">Cost in India: 75000 INR/ Individual</li>
            <li className="list-none">
              Cost Abroad/Onsite: 2250 USD/ Individual
            </li>
          </div>
        </div>

        <div className="btns-container sm:px-2 lg:px-36 flex justify-center items-center gap-14 sm:pt-4 lg:pt-8">
          <button className="bg-white rounded-2xl py-2 px-4 text-white font-bold lg:text-2xl sm:text-xl">
            Call Us
          </button>
          <button className="bg-white rounded-2xl py-2 px-4 text-white font-bold lg:text-2xl sm:text-xl">
            Contact Us
          </button>
        </div>

        <div className="course-syllabus-container sm:px-2 lg:px-36 flex  gap-14 sm:pt-4 lg:pt-8">
          <div className="w-full flex flex-col items-stretch border-[1px] bg-whitesmoke">
            <div className="syllabus-title pl-4">Course Syllabus</div>
            <div className="day-buttons  w-[200px] flex justify-center items-center">
              <button className={`${day1 ?'bg-white':'bg-none'} p-2 rounded-t-md`} onClick={()=>{setDay1(true),setDay2(false),setDay3(false)}}>
                DAY 1</button>
              <button className={`${day2 ?'bg-white':'bg-none'} p-2 rounded-t-md`} onClick={()=>{setDay2(true),setDay1(false),setDay3(false)}}>
                DAY 2</button>
              <button className={`${day3 ?'bg-white':'bg-none'} p-2 rounded-t-md`} onClick={()=>{setDay3(true),setDay1(false),setDay2(false)}}>
                DAY 3</button>
            </div>
            <div className="day-details-container border-t-2">
              {day1 && <Day1 />}
              {day2 && <Day2 />}
              {day3 && <Day3/>}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTrainingPage;
