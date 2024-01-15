import React from "react";
import AppSecLogo from "../../../assets/images/courseLogos/ApplicationSecurityLogo.jpeg";
const SelectedCourseDetails = () => {
  return (
    <>
      <div>
        <div className="details-container flex sm:flex-col lg:flex-row  p-4 lg:py-20 lg:px-28">
          <div className="left-container  h-full flex p-2 lg:p-4 sm:basis-1/3 lg:basis-1/2 sm:items-center lg:items-start justify-center">
            <img className="lg:h-80 sm:h-[80%]" src={AppSecLogo} alt="" />
          </div>
          <div className="right-container  h-full flex flex-col p-2 lg:p-4 sm:basis-2/3 basis-1/2 items-center sm:gap-4 lg:gap-10">
            <div className="course-title">
              <span className="sm:text-xl lg:text-3xl text-wrap">
                Automated Mobile Application Security Assessment with MobSF –MAS
              </span>
            </div>
            <div className="ratingAndStar flex flex-col gap-2 lg:gap-4 w-full text-xs">
              <span>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
              <span className="text-sm">(2 customer Reviews)</span>
            </div>
            <div className="price w-full flex text-2xl font-semibold text-gray">
              $34.99
            </div>
            <div className="detailed-description w-full">
              <span className="text-wrap font-Playfiar">
                Mobile Application market is growing like anything and so is the
                Mobile Security industry. With lots of frequent application
                releases and updates happening, conducting the complete security
                analysis of mobile applications becomes time consuming and
                cumbersome mainly because of the overheads in setting up and
                maintaining a mobile application testing environment. This
                course will introduce Mobile Security Framework (MobSF), an
                automated, all-in-one mobile application (Android/iOS/Windows)
                pen-testing, malware analysis and security assessment framework
                capable of performing static and dynamic analysis of mobile
                applications.
              </span>
            </div>
            <div className="buyBtn-container w-full">
              <button className="p-1 border-2 border-orange rounded-2xl text-orange">
                Buy this Course
              </button>
            </div>
            <div className="category w-full">
                <span className="text-wrap font-enriq-400">
                Category: OpSecX Security Courses Tags: android, android pentesting, 
                android security, dynamic analysis, instrumented testing, ios, 
                ios pentesting, ios security, 
                mobile malware analysis, mobile pentesting, mobile security, mobile 
                security framework, mobsf, static analysis
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCourseDetails;
