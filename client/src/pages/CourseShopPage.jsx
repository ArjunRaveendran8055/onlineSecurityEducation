import React from "react";
import CourseShopStructure from "../components/CourseShopStructure";
const CourseShopPage = ({open}) => {
  return (
    <div className="min-h-screen">
      <CourseShopStructure open={open} />
    </div>
  );

};

export default CourseShopPage;
