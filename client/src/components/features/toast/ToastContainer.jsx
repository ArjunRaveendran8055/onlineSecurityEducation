import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToastView, setToastView } from "./toastSlice";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
const ToastContainer = () => {
  const { toastView, type, msg } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  // console.log("toastDatasAre: ", toastView, type, msg);

  const submitHandler = () => {
    dispatch(hideToastView());
  };
  return (
    <div
      className={`${toastView ? "" : "hidden"} 
  absolute h-[100vh] w-full 
  ${type === "error" && "backdrop-blur-sm"}  
  z-50 flex justify-center items-center
  `}
    >
      <div className="toast-container bg-white px-32 border-[1px] shadow-xl rounded-md flex flex-col items-center">
        <div className="uppercase mt-[2px] font-enriq text-xs text-red">
          ! {type}_MSG !
        </div>
        <div className="pt-10 pb-5 font-Playfiar sm:text-xl md:text-2xl text-orange flex flex-row justify-center items-center">
          {msg}
          {type === "success" ? <FcApproval className="ml-2" size={30} /> :<FcHighPriority className="ml-2" size={30}/>}
        </div>
        <div>
          <button
            className="mb-4 py-1 px-2 border-[1px] border-black rounded-xl bg-blue  font-semibold"
            onClick={submitHandler}
          >
            {type === "error" ? <p>OKAY</p> : <p>DONE</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastContainer;
