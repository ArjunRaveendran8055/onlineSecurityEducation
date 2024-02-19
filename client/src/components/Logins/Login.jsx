import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../Styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToastView } from "../features/toast/toastSlice";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // console.log(user,"email and password")
  const handleLoginSubmit = async () => {
    if (user.email.length === 0 || user.password.length === 0) {
      return dispatch(
        setToastView({ type: "error", msg: "Enter Complete Credentials" })
      );
    }
    await axios
      .post("/authenticate/login", { email: user.email, password: user.password,Credential:true })
      .then((res) => {
        const { message,data } = res.data;
        //directing towards dashboard according to the type of user.
        if(data.role==="admin"){
          navigate("/admin/dashBoard")
        }else{
          navigate("/")
        }
        //setting success message to the taostContainer
        return dispatch(setToastView({type:"success",msg:message}))
      })
      .catch((err) => {
        //fetching server error msg from the response
        const { error } = err.response.data;

        //setting toastcontainer with the server errorMsg
        dispatch(setToastView({ type: "error", msg: error }));
      });
  };
  return (
    <div className=" min-h-screen bg-gray-50  flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl  font-bold  text-gray-900-">
          ADMIN LOGIN !
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  sm:rounded py-8 px-8 shadow-md">
          <div className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="appearance-none pl-3 placeholder:text-green-500 block w-full py-2 border-black border rounded-md shadow-sm"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  autoComplete="password"
                  className="appearance-none pl-3  border-black border rounded placeholder:text-green-500 block w-full py-2"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                {visible ? (
                  <AiOutlineEyeInvisible
                    className="absolute top-3 cursor-pointer right-2"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEye
                    className="absolute top-3 cursor-pointer right-2"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className={`${styles.normalFlex} justify-between `}>
              <div className={`${styles.normalFlex} mt-10`}>
                <input
                  id="remember-me"
                  name="remeber-me"
                  className="h-4 w-4 text-blue-600  border-gray-300 rounded"
                  type="checkbox"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me?
                </label>
              </div>
              <div className="text-sm mt-10">
                <a
                  href="/forgot-password"
                  className="font-medium text-blue-500 hover:text-blue-600 hover:underline underline-offset-2"
                >
                  Forgot password
                </a>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleLoginSubmit}
              className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-black text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-700"
            >
              Submit
            </button>
            <div className={`${styles.normalFlex} w-full h-10`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
