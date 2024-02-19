import React from "react";
import NavBar from "../components/partials/NavBar";
import { Route, Routes } from "react-router-dom";
import SelectedCourseDetails from "../components/features/course/SelectedCourseDetails";
import Home from "../pages/Home/Home";
import BlogsView from "../components/features/blog/BlogsView";
import {
  AdminHomePage,
  AdminLoginPage,
  ApplicationSecurityServices,
  BookShopPage,
  CartDetailsPage,
  CourseShopPage,
  LiveTrainingPage,
} from "../Routes";
import SelectedBookDetails from "../components/features/book/SelectedBookDetails";
import axios from "axios";
import ToastContainer from "../components/features/toast/ToastContainer";
import SideBar from "../components/partials/SideBar";

axios.defaults.baseURL = "http://localhost:8055";
axios.defaults.withCredentials = true;
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative items-stretch">
      <ToastContainer />
      <Routes>
        <Route path="/users/login" element={<AdminLoginPage />} />
        <Route path="" element={<NavBar open={open} setOpen={setOpen} />}>
          <Route path="/" element={<Home />} />
          <Route path="/allCourses" element={<CourseShopPage open={open} />} />
          <Route
            path={`/allCourses/courseDetails`}
            element={<SelectedCourseDetails />}
          />
          <Route
            path="/applicationSecurityServices"
            element={<ApplicationSecurityServices />}
          />
          <Route path="/liveTraining" element={<LiveTrainingPage />} />
          <Route path="/allBlogs" element={<BlogsView />} />
          <Route path="allBooks" element={<BookShopPage open={open} />} />
          <Route
            path={`allBooks/bookDetails`}
            element={<SelectedBookDetails />}
          />
          <Route path="/cartDetails" element={<CartDetailsPage />} />
        </Route>

        <Route path="/admin" element={<AdminLoginPage />}></Route>
        <Route path="" element={<SideBar />}>
          <Route path="/admin/dashBoard" element={<AdminHomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
