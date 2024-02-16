import React from "react";
import UserCountCard from "../components/features/users/UserCountCard";
import CourseCountCard from "../components/features/course/CourseCountCard";
import BookCountCard from "../components/features/book/BookCountCard";
import { useSelector } from "react-redux";

const AdminHomePage = () => {

  // const {errorMsg}=useSelector(state=> state.user)
  // console.log("err from adminPage is",errorMsg)
  return (
    <>
    
    <div className="flex flex-col items-stretch h-[90vh]">
      <div className="bg-gray-light shadow-2xl flex sm:h-[100vh] lg:h-[30%] sm:flex-col lg:flex-row justify-between p-7 border-2 rounded-xl sm:mt-2 lg:mt-10">
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-darkblue rounded-md sm:h-[30%] lg:h-full items-center justify-center">
          <UserCountCard />
        </div>
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-darkblue rounded-md sm:h-[30%] lg:h-full items-center justify-center">
          <BookCountCard />
        </div>
        <div className=" flex flex-col sm:w-full lg:w-[25%] bg-darkblue rounded-md sm:h-[30%] lg:h-full items-center justify-center">
          <CourseCountCard />
        </div>
      </div>
      <div className="verifyContainer sm:p-2 lg:p-5 flex w-full mt-32 flex-col gap-20">
        <div>
          <div className="approveUsers w-full flex items-center justify-center">
            <button className=" ring-red ring-2 shadow-lg border-2 border-black py-4 px-10 rounded-lg  bg-darkblue text-white text-2xl">
              Approve Users
            </button>
          </div>
        </div>
        <div className="Lists w-full flex items-center lg:flex-row sm:flex-col gap-10">
          <button className="ring-crimson ring-2 border-2 border-black py-4 px-10 rounded-lg bg-darkblue text-white text-2xl w-[50%]">
            Book List
          </button>

          <button className="ring-2 ring-crimson border-2 border-black py-4 px-10 rounded-lg bg-darkblue text-white text-2xl w-[50%]">
            Course List
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminHomePage;
