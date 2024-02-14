import React from "react";
import { PiStudentFill } from "react-icons/pi";
const CourseCountCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PiStudentFill size="100" color="white" />
      <div className="pt-2 font-Barlaw text-xl text-white">
        Available Courses: 10023
      </div>
    </div>
  );
};

export default CourseCountCard;
