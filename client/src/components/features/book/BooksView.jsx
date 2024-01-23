import React, { useEffect, useState } from "react";
import { bookShopData } from "../../../static/data";
import { useSelector, useDispatch } from "react-redux";
import AppliedCryptography from "../../../assets/images/bookImages/AppliedCryptography.jpeg";
import { fetchBooks } from "./bookSlice";
const BooksView = ({ setSort, sort }) => {
  const { books, loader } = useSelector((state) => state.book);
  return (
    <div className="container flex">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {books.map((item, key) => (
          <SingleCard
            key={key}
            image="https://cdn.kobo.com/book-images/3c419102-6e52-46db-83f1-7504a8cacaf4/1200/1200/False/cybersecurity-a-simple-beginner-s-guide-to-cybersecurity-computer-networks-and-protecting-oneself-from-hacking-in-the-form-of-phishing-malware-ransomware-and-social-engineering.jpg"
            CardTitle={item.title}
            Price={item.price}
            titleHref="/#"
            btnHref="/#"
            CardDescription={item.description}
            Button="View Details"
            rating={item.rating}
            reviews={item.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksView;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  Price,
  rating,
  reviews,
}) => {
  return (
    <>
      {/*  */}
      <div
        className="mb-10 overflow-hidden rounded-lg bg-orange shadow-1 border-2 p-1
        duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 flex flex-col items-center h-[400px]"
      >
        <div className="pt-2 flex w-full bg-white justify-center">
        <img src={image} alt="hellow" className=" flex h-40 w-40" />
        </div>
        <div className=" text-center p-4 flex flex-col gap-2 bg-white ">
          <div className=" font-Barlaw text-xl flex">
            <span className="font-bold">{Price}$</span>
            <span className="line-clamp-1">{CardTitle}</span>
          </div>
          {/* star container */}
          <div className=" flex justify-around items-center">
            <span className="flex gap-2 text-xs font-enriq">
              rating {rating}/5
            </span>
            <span className="flex gap-2 text-xs font-enriq">
              {reviews.length} reviews
            </span>
          </div>
          <p className=" text-base leading-relaxed text-body-color dark:text-dark-6 line-clamp-3">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base 
              font-medium text-body-color transition hover:border-primary hover:bg-gray hover:text-white 
              dark:border-dark-3 dark:text-dark-6"
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
