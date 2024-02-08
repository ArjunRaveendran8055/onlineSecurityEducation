import React from "react";
import BookShopStructure from "../components/partials/BookShopStructure";

const BookShopPage = ({ open }) => {
  return (
    <div className="min-h-screen">
      <BookShopStructure open={open} />
    </div>
  );
};

export default BookShopPage;
