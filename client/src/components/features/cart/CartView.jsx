import React from "react";
import { useSelector } from "react-redux";

const CartView = () => {
  const{noOfItems}=useSelector(store=>store.cart)
  // console.log("no of items is :",noOfItems);
  
  return (
    <>
      {/* for large screens */}

      <div className="hidden lg:text-[12px] relative text-white lg:flex flex-row gap-6 justify-center items-center bg-orange p-2 rounded-md">
        <div className="sm:hidden lg:block">CART</div>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              className="dingan"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <div className={`${noOfItems===0 && 'hidden'} absolute rounded-full -top-2 -right-2 bg-white w-6 h-6 p-1 flex justify-center items-center`}>
            <span className="text-red font-extrabold">{noOfItems}</span>
        </div>
        </div>

      </div>

      {/* for medium and small size screens */}

      <div className="relative lg:hidden mr-9">
        <div className={`absolute left-5 -top-2 md:right-28 w-6 h-6 rounded-full bg-orange flex justify-center items-center`}>
          {noOfItems}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            className="mangan"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </>
  );
};

export default CartView;
