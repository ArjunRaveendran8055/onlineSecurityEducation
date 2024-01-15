import React from "react";

const Day1 = () => {
  return (
    <div className=" ">
      <div className="day1-details-container sm:p-2 lg:p-4 flex flex-col gap-10">
        <div className="introduction-container flex flex-col gap-3">
          <div className="title  text-lg font-poppins">
            Introduction to the Course
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">Basics of Web Application</li>
            <li className="list-none">Basics of DNS</li>
            <li className="list-none">Basics of Web Security</li>
            <li className="list-none">
              Same Origin Policy and other Browser level controls
            </li>
            <li className="list-none">Bypassing SOP</li>
            <li className="list-none">
              Terminology: Encoding vs Escaping vs Encryption
            </li>
            <li className="list-none">Getting Familiar with HTTP(s) Proxies</li>
            <li className="list-none">Introduction to Web Fuzzing</li>
          </div>
        </div>

        <div className="introduction-container pt-5 flex flex-col gap-3">
          <div className="title  text-lg font-poppins">
            Introduction to Web Vulnerabilities and Attacks
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">Injection Vulnerabilities and Attacks</li>
            <li className="list-none">
              Client Side Attacks vs Server Side Attacks
            </li>
          </div>
        </div>

        <div className="introduction-container pt-5 flex flex-col gap-3">
          <div className="title  text-lg font-poppins">
            Fingerprinting the Web Stack
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">Web App and Server fingerprinting</li>
            <li className="list-none">Firewall / WAF fingerprinting</li>
            <li className="list-none">
              Content Management System fingerprinting
            </li>
            <li className="list-none">DNS/Subdomain enumeration</li>
          </div>
        </div>

        <div className="introduction-container pt-5 flex flex-col gap-3">
          <div className="title  text-lg font-poppins">
            Cross Site Scripting (XSS)
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">DOM XSS</li>
            <li className="list-none">
              Identifying DOM XSS in modern JS MVC frameworks.
            </li>
            <li className="list-none">mXSS or mutation XSS</li>
            <li className="list-none">
              Reflected and Stored Cross Site Scripting
            </li>
            <li className="list-none">XSS and Contexts</li>
            <li className="list-none">
              rPO XSS or Relative Path Overwrite XSS
            </li>
            <li className="list-none">
              Advanced XSS Exploitation with Beef and OWASP Xenotix
            </li>
          </div>
        </div>

        <div className="introduction-container pt-5 flex flex-col gap-3">
          <div className="title  text-lg font-poppins">
            Remote Command Execution (RCE){" "}
          </div>
          <div className="list text-gray flex flex-col sm:gap-3 lg:gap-2 sm:pl-4 lg:pl-6 font-semibold">
            <li className="list-none">Remote Command Execution basics</li>
            <li className="list-none">Testing for RCE</li>
            <li className="list-none">Bypassing Filters and Firewalls</li>
            <li className="list-none">RCE Cheatsheet</li>
            <li className="list-none">Getting shell access</li>
            <li className="list-none">Reverse Shell Cheatsheet</li>
            <li className="list-none">
              Automated Remote Command Execution with commix
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1;
