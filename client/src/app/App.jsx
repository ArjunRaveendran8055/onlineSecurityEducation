import React from "react";
import NavBar from "../components/partials/NavBar";
import { Route, Routes } from "react-router-dom";
import CourseView from "../components/features/course/courseView";
import AdminLogin from "../UiAdmin/Pages/AdminLogin";
import SelectedCourseDetails from "../components/features/course/SelectedCourseDetails";
import Home from "../pages/Home/Home";

import BlogsView from "../components/features/blog/BlogsView";
import { ApplicationSecurityServices, BookShopPage, LiveTrainingPage } from "../Routes";

const App = () => {
  return (
    <div className="items-stretch">
      <Routes>
        <Route path="" element={<NavBar />}>
          <Route path="/" element={<Home/>} />
          <Route path="/allCourses" element={<CourseView />} />
          <Route path={`/allCourses/courseDetails`} element={<SelectedCourseDetails/>}/>
          <Route path="/applicationSecurityServices" element={<ApplicationSecurityServices/>}/>
          <Route path="/liveTraining" element={<LiveTrainingPage/>}/>
          <Route path="/allBlogs" element={<BlogsView/>}/>
          <Route path="allBooks" element={<BookShopPage/>}/>
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
