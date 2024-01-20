import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"; 
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/pagenotfound";

import { RiHomeSmile2Fill } from "react-icons/ri";
import RegistrationForm from "./Pages/Registration";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col min-h-screen "
        style={{ backgroundImage: "url('./landingPage.jpg')" }}
      >
       <header className="bg-gray-900 text-white p-4 flex justify-center items-center">
  <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold border-b-2 border-white pb-2 text-center">
    Welcome to the <span className="text-blue-500">MCQ Exam</span> Portal
  </h1>
</header>

        <main className="flex-grow container mx-auto mt-6">
       
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/admin" element={<Admin />} />
            <Route path="/Student" element={<User />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 p-4">
          <p className="text-center text-sm text-gray-300 font-bold">
            &copy; 2024 MCQ Exam App | Designed and Developed by Versatile Prime
            InfoSoft Pvt. Ltd.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
