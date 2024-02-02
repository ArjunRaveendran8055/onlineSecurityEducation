import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourse } from "./courseSlice";
import {useNavigate} from "react-router-dom"
const CourseView = ({ sort, setSort }) => {
  const { courses, selectedCourse } = useSelector((store) => store.course);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  //console.log("selectedCourse",selectedCourse)
  const courseClickHandler=(item)=>{
     dispatch(setSelectedCourse(item))
     navigate("/allCourses/courseDetails")
  }

  return (
    <>
      <section className="bg-gray-2 pb-10 dark:bg-dark lg:pb-20 flex justify-center items-center">
        <div className="container flex justify-center items-center">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {courses.map((item, key) => (
              <div
                key={key}
                className="mb-10 overflow-hidden rounded-lg shadow-1 border-2 p-1
                    duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 flex flex-col items-center h-[400px]"
              >
                <div className="pt-2 flex w-full bg-white justify-center">
                  <img
                    src="https://www.webasha.com/uploads/course/images/633a93df31d981664783327.ECSA-Training-and-certification.jpg"
                    alt="hellow"
                    className=" flex h-40 w-40"
                  />
                </div>
                <div className=" text-center p-4 flex flex-col gap-2 bg-white ">
                  <div className=" font-Barlaw text-xl flex">
                    <span className="font-bold">{item.price}</span>
                    <span className="line-clamp-1">{item.title}</span>
                  </div>
                  {/* star container */}
                  <div className=" flex justify-around items-center">
                    <span className="flex gap-2 text-xs font-bold">
                      rating {item.rating}/5
                    </span>
                    <span className="flex gap-2 text-xs font-enriq">
                      {item.reviews.length} reviews
                    </span>
                  </div>
                  <p className=" mt-4 text-base leading-relaxed text-body-color dark:text-dark-6 line-clamp-3">
                    Rs. {item.enrollment_fee}
                  </p>
                  <div className="mt-4">
                    <button
                      className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base 
                        font-medium text-body-color transition hover:border-primary hover:bg-gray hover:text-white 
                        dark:border-dark-3 dark:text-dark-6"
                      onClick={()=>courseClickHandler(item)}
                    >
                      Update Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseView;
