// Import necessary libraries and components
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import MainFeaturedCourses from "./components/mainFeaturedCourses";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ThanksPage from "./Pages/ThanksPage";
import CourseDetails from "./components/CourseDetails";
import CartPage from "./Pages/CartPage";
// import About from "./components/About";
import NotFoundComponent from "./Pages/NotFoundComponent";

const App = () => {
  return (
    <Router>

    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/register" element={<Registration />} />
          <Route path="/courses" element={<MainFeaturedCourses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element=  {<NotFoundComponent />} />
        </Routes>
      </main>
      <Footer />

    </>
    </Router>

  );
};

// Export the App component
export default App;
