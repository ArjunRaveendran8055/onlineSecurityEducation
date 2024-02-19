import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import styles from "../../Styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { setToastView } from "../features/toast/toastSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState();

  //file submit handler
  const handleSubmit = () => {
    console.log(avatar);
    if (email.length === 0 || password.length === 0 || !avatar) {
      return dispatch(
        setToastView({ type: "error", msg: "Enter Complete Details." })
      );
    }
    if (name.length < 3) {
      return dispatch(
        setToastView({ type: "error", msg: "Uname must be > 3" })
      );
    }
    if (password.length <= 5) {
      return dispatch(
        setToastView({ type: "error", msg: "Password must be > 5" })
      );
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("file", avatar);
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);

    //api to create a user
    axios
      .post("/signUp/createUser", formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className=" min-h-screen bg-gray-50  flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl  font-bold  text-gray-900-">
          SignUp as a New User
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  sm:rounded py-8 px-8 shadow-md">
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  placeholder="Name"
                  autoComplete="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none pl-3 placeholder:text-green-500 block w-full py-2 border-black border rounded-md shadow-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none pl-3 placeholder:text-green-500 block w-full py-2 border-black border rounded-md shadow-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  required
                  id="password"
                  value={password}
                  placeholder="Password"
                  autoComplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none pl-3  border-black border rounded placeholder:text-green-500 block w-full py-2"
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

            <div>
              <label
                htmlFor="avatar"
                className=" block text-sm font-medium text-gray-700"
              ></label>
              <div className=" mt-2 flex items-center">
                <span className=" inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      alt="avatar"
                      id="avatar"
                      src={URL.createObjectURL(avatar)}
                      className=" h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar id="avatar" className="h-8 w-8" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 "
                >
                  <span>Upload File</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-white text-sm font-medium rounded-md bg-blue hover:bg-blue-700"
            >
              Submit
            </button>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>Already have an account</h4>
              <Link to={"/login"} className="text-blue-600 pl-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
