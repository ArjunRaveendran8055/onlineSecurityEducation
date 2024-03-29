import React from "react";
import { FaBook } from "react-icons/fa";
const BookCountCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaBook size="100" color="white"/>
      <div className="pt-2 font-Barlaw text-xl text-white">Total Books: 10023</div>
    </div>
  );
};

export default BookCountCard;
