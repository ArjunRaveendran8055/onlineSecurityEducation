import React from "react";
import UserCountCard from "../components/features/users/UserCountCard";
import CourseCountCard from "../components/features/course/CourseCountCard";
import BookCountCard from "../components/features/book/BookCountCard";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col items-stretch h-[90vh]">
      <div className="flex sm:h-[100vh] lg:h-[30%] sm:flex-col lg:flex-row justify-between p-5">
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-orange rounded-md sm:h-[30%] lg:h-full items-center justify-center">
          <UserCountCard />
        </div>
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-orange rounded-md sm:h-[30%] lg:h-full items-center justify-center">
            <BookCountCard/>
        </div>
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-orange rounded-md sm:h-[30%] lg:h-full items-center justify-center">
            <CourseCountCard/>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
