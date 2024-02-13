import React from "react";
import { FaUser } from "react-icons/fa6";
const UserCountCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaUser size="100" />
      <div className="pt-2 font-Barlaw text-xl">No Of Users: 10023</div>
    </div>
  );
};

export default UserCountCard;
