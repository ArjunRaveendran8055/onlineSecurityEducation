import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToastView } from "../features/toast/toastSlice";
const Activation = () => {
  const dispatch = useDispatch();
  const { activationToken } = useParams();
  console.log(activationToken, "ith token aanonu nokkiye");

  const activateUser = async () => {
    try {
      const result = await axios.post(
        `/signUp/activateUser/${activationToken}`
      );
      return result;
    } catch (err) {
      const { error } = err.response.data;
      console.log(error);
      dispatch(setToastView({ type: "expired", msg: error }));
    }
  };

  useEffect(() => {
    activateUser().then((res) => {
      console.log("response is: ",res.data.message);
      const {message}=res.data
      dispatch(setToastView({ type: "success", msg: message }));
    });
  }, []);
  return <div>Activation</div>;
};

export default Activation;
