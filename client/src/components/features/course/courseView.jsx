import React, { useEffect } from "react";

import { fetchCourses } from "./courseSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductLoader from "../../Loader/ProductLoader";

const CourseView = () => {
  
  const {courses,isLoading}= useSelector(store=>store.course)
  console.log(courses,isLoading)
 const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(fetchCourses())
    },[])
  return (
    <>
      <section className="bg-gray-2 pb-10 dark:bg-dark lg:pb-20 flex justify-center items-center">
      {
        isLoading ? (
          <ProductLoader/>
        )
        :
        (
          <div className="container flex justify-center items-center">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
          {
            courses.map((item,key)=>(
              <SingleCard
              key={key}
              image={item.photo_url}
              CardTitle={item.category}
              titleHref="/#"
              btnHref="/#"
              CardDescription={item.price}
              Button="View Details"
            />
            )
            )
          }
          </div>
        </div>
        )
      }


      </section>
    </>
  );
};

export default CourseView;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 
      duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className=" text-center p-4 flex flex-col gap-5">
          <h3 className=" font-enriq text-xl ">
            {CardTitle}
         </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-gray hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
