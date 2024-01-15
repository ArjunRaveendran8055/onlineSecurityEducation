import React from "react";

const loadingitem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductLoader = () => {
  return (
    <div className="container flex justify-center items-center ">
      <div className="grid gap-8 lg:gap-28 sm:grid-cols-2 lg:grid-cols-3  p-4 lg:p-20">
        {loadingitem.map((item, index) => (
          <div className="animate-pulse flex flex-col items-center gap-1 sm:w-32 lg:w-60">
            <div>
              <div className="sm:w-28 lg:w-48 h-6 bg-whitesmoke rounded-md" />
              <div className="sm:w-24 lg:w-28 h-4 bg-whitesmoke mx-auto mt-3 rounded-md" />
            </div>
            <div className="h-4 lg:h-7 bg-whitesmoke w-full rounded-md" />
            <div className="h-4 lg:h-7 bg-whitesmoke w-full rounded-md" />
            <div className="h-4 lg:h-7 bg-whitesmoke w-full rounded-md" />
            <div className="h-4 lg:h-7 bg-whitesmoke w-1/2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLoader;
