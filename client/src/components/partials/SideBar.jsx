import React, { useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { verifyAdmin } from "../features/users/userSlice";

const SideBar = () => {
  const { noOfUsers, errorMsg, loader } = useSelector((state) => state.user);
  console.log("error is:",errorMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyAdmin());
  }, []);


  return (
    <>
    {
      

    
    <div className="flex h-screen bg-whitesmoke w-full">
      <div className="flex border-r-2 flex-col w-[20%] relative">
        <div className="logout hover:cursor-pointer absolute z-0 bottom-5 right-5">
          <h2>
            <CiLogout size="40" />
          </h2>
        </div>
        <Link
          to="/admin/dashBoard"
          className="hover:cursor-pointer  h-16 flex items-center justify-center text-white sm:text-md lg:text-xl font-semibold bg-gray-dark"
        >
          EduBlink
        </Link>
        <div className="flex flex-col flex-1 font-enriq text-2xl">
          <div className="group ">
            <a
              href="#"
              className="py-2 px-4 text-gray-300 flex items-center justify-between focus:bg-gray "
            >
              <p className="sm:hidden lg:block">Home</p>
              <span>
                <HiOutlineHomeModern />
              </span>
            </a>
          </div>

          <div className="group ">
            <a
              href="#"
              className="py-2 px-4 text-gray-300 focus:bg-gray flex items-center justify-between"
            >
              Course
              <svg
                className="w-4 h-4 fill-current  text-whitesmoke group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="hidden group-hover:flex flex-col pl-10 border-y-2 ">
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 3
              </a>
            </div>
          </div>

          <div className="group">
            <a
              href="#"
              className="py-2 px-4 text-gray-300 hover:bg-gray-light flex items-center justify-between"
            >
              Books
              <svg
                className="w-4 h-4 fill-current  text-whitesmoke group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="hidden group-hover:flex flex-col pl-10 border-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 3
              </a>
            </div>
          </div>

          <div className="group">
            <a
              href="#"
              className="py-2 px-4 text-gray-300 hover:bg-gray-light flex items-center justify-between"
            >
              Blogs
              <svg
                className="w-4 h-4 fill-current  text-whitesmoke group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="hidden group-hover:flex flex-col pl-10 border-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 3
              </a>
            </div>
          </div>

          <div className="group">
            <a
              href="#"
              className="py-2 px-4 text-gray-300 hover:bg-gray-light flex items-center justify-between"
            >
              Users
              <svg
                className="w-4 h-4 fill-current  text-whitesmoke group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="hidden group-hover:flex flex-col pl-10 border-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 py-1 border-b-2"
              >
                Option 3
              </a>
            </div>
          </div>
          {/* Repeat the above structure for other sidebar links */}
          {/* About */}
          {/* Services */}
          {/* Contact */}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-gray-900 flex items-center justify-between px-4 py-5 text-white bg-gray-dark">
          Header
        </div>
        <div className="flex-1 p-4 bg-gray-200">
          {/* Main Content */}
          <Outlet />
        </div>
      </div>
    </div>
    

}
    </>
  );
};

export default SideBar;
