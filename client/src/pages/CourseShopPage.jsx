import React from "react";
import { useSelector } from "react-redux";
import ProductLoader from "../components/Loader/ProductLoader";
import CourseShopStructure from "../components/partials/CourseShopStructure";
const CourseShopPage = ({ open }) => {
  const { isLoading } = useSelector((state) => state.course);
  
  return (
    <div className="min-h-screen">
      <CourseShopStructure open={open} />
    </div>
  );
};

export default CourseShopPage;
