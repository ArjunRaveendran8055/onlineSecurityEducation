import React from "react";
import NavBar from "../components/partials/NavBar";
import { Route, Routes } from "react-router-dom";

import AdminLogin from "../UiAdmin/Pages/AdminLogin";
import SelectedCourseDetails from "../components/features/course/SelectedCourseDetails";
import Home from "../pages/Home/Home";

import BlogsView from "../components/features/blog/BlogsView";
import { ApplicationSecurityServices, BookShopPage, CartDetailsPage, CourseShopPage, LiveTrainingPage, LoginPage } from "../Routes";
import SelectedBookDetails from "../components/features/book/SelectedBookDetails";
import axios from "axios";


axios.defaults.baseURL="http://localhost:8055";
axios.defaults.withCredentials=true


const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="items-stretch">
      <Routes>
      <Route path="/users/login" element={<LoginPage/>}/>
        <Route path="" element={<NavBar open={open} setOpen={setOpen}/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/allCourses" element={<CourseShopPage open={open} />} />
          <Route path={`/allCourses/courseDetails`} element={<SelectedCourseDetails/>}/>
          <Route path="/applicationSecurityServices" element={<ApplicationSecurityServices/>}/>
          <Route path="/liveTraining" element={<LiveTrainingPage/>}/>
          <Route path="/allBlogs" element={<BlogsView/>}/>
          <Route path="allBooks" element={<BookShopPage open={open}/>}/>
          <Route path={`allBooks/bookDetails`} element={<SelectedBookDetails/>} />
          <Route path="/cartDetails" element={<CartDetailsPage/>}/>
        </Route>

        <Route path="/admin" element={<AdminLogin/>}>

        </Route>
        <Route>
        

        </Route>
      </Routes>
    </div>
  );
};

export default App;
