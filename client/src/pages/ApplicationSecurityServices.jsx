import React from "react";
import continuum from "../assets/images/clientLogos/continuum.jpg";
import envestnet from "../assets/images/clientLogos/envestnet.jpeg";
import flylab from "../assets/images/clientLogos/flyLab.png";
import homeland from "../assets/images/clientLogos/homeland.webp";
import immunio from "../assets/images/clientLogos/immunio.png";
import netgear from "../assets/images/clientLogos/netgear.webp";
import sysdream from "../assets/images/clientLogos/sysdream.jpeg";
import tsoft from "../assets/images/clientLogos/tsoft.jpeg";
import tuv from "../assets/images/clientLogos/tuvrheinland.webp";

const ApplicationSecurityServices = () => {
  return (
    <>
      <div className="flex flex-col w-full sm:p-2 md:p-4 lg:py-12 lg:px-20 items-stretch">
        <div className="servicecontainer flex flex-col items-center gap-8">
          <div className="service-title sm:text-xl md:text-2xl lg:text-3xl font-Playfiar-600 w-full sm:px-4 lg:px-36">
            Application Security Services
          </div>
          <div className="service-desc w-full lg:px-36 flex flex-col sm:gap-5 lg:gap-14 sm:px-4">
            <span className="text-gray">
              We are experienced Application Security Engineers with deep
              technical expertise in secure application development, secure
              architecture design and application security testing. We have
              developed multiple security tools and automated application
              security tasks for multiple clients. Some of our open source work
              can be found here :{" "}
              <a href="https://github.com/OpenSecurityIN">
                <span className="text-orange">
                  https://github.com/OpenSecurityIN
                </span>
              </a>
            </span>
            <span className="text-gray">
              Our approaches are based on applied security research and we go
              the extra mile to uncover lesser known and impactful
              vulnerabilities in applications. We are specialised in security
              assessment of web applications, servers, mobile applications and
              software written for Internet of things (IoT).
            </span>
          </div>
        </div>
        <div className="offered-service-container flex flex-col pt-14 items-stretch">
          <div className="offered-title sm:text-xl md:text-2xl lg:text-3xl font-enriq w-full sm:px-4 lg:px-36 text-gray-dark">
            Application Security Services Offered
          </div>
          <div className="offered-list sm:p-4 lg:px-40 lg:py-10 flex flex-col sm:gap-3 sm:px-8 lg:gap-2 text-gray">
            <span>&#9665; Web Application Penetration Testing</span>
            <span>&#9665; Application Server and Database Security</span>
            <span>&#9665; Hardening and Malware Removal Services</span>
            <span>
              &#9665; Mobile Application (Android, iOS, and Windows) Security
              Assessment
            </span>
            <span>
              &#9665; Secure Source Code review of Desktop, Web and Mobile
              Applications
            </span>
            <span>
              &#9665; Infrastructure and Application Stack Security Assessment
            </span>
            <span>&#9665; Cloud & Serverless Security Assessment</span>
            <span>
              &#9665; Secure Architecture design and implementation assistance
            </span>
            <span>
              &#9665; Evaluation of custom Security implementations & protocols
            </span>
            <span>&#9665; Application Security Automation & Scripting</span>
            <span>
              &#9665; Security Engineering and Security Tool Development
            </span>
          </div>
        </div>
        <div className="consulting-heading sm:px-4  lg:px-36 flex items-center justify-center text-gray-light">
          <span>To know more visit our consulting division</span>
        </div>
        <div className="opensecurity-container sm:pt-4  sm:px-4 lg:px-36 flex flex-col justify-center items-stretch">
          <div
            className="opensecurity-heading font-Playfiar-600 sm:2xl md:3xl lg:text-4xl border-b-[1px] border-gray-light w-full 
          flex items-center justify-center sm:pb-4 lg:pb-7"
          >
            <span>
              <span className="text-blue">Open</span>
              <span className=" font-poppins-600">Security</span>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="our-clients-text lg:text-3xl font-thin p-4 w-full lg:pl-32">
              {" "}
              Our Clients
            </div>
            <div className="opensecurity-images-container  grid sm:grid-cols-2 lg:grid-cols-3 gap-x-20">
              <img
                src={continuum}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={flylab}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={immunio}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={sysdream}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={tuv}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={envestnet}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={tsoft}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={homeland}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
              <img
                src={netgear}
                alt=""
                className="sm:w-[100px] lg:w-[225px] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSecurityServices;
