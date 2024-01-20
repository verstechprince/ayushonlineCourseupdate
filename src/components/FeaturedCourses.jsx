import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourses = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   // Store login status in localStorage
  //   localStorage.setItem("isLoggedIn", "true");
  // };
  // const handleLogout = () => {
  //   // Clear user-related items from localStorage
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("userId");
  //   localStorage.removeItem("userFirstName");
  //   handleSubmit();
  //   setIsLoggedIn(false);
  // };

  // useEffect(() => {
  //   const storedLoginStatus = localStorage.getItem("isLoggedIn");
  //   if (storedLoginStatus === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  return (
    <>
    
    <div className="courses-bar">
      <div className="container">
        <div className="courses-main-container">
          <h1 className="main-head">Courses<br /><span>Society mainly offers the following courses</span></h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="course-col">
                <div className="h-pic"><img src="design_img/acupressure-therapy.jpg" alt="Acupressure Therapy" /></div>
                <div className="course-col-text">
                  <h4>Advance Certification Course in Acupressure Therapy</h4>
                  <p>3 months online + 2 days practical training</p>
                  <Link to="/course-details" className="btn">Enroll now</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="course-col">
                <div className="h-pic"><img src="design_img/health-management.jpg" alt="Basic Health Management System" /></div>
                <div className="course-col-text">
                  <h4>Advance Certification Course in Basic Health Management System</h4>
                  <p>3 months online + 2 days practical training</p>
                  <Link to="/course-details" className="btn">Enroll now</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="course-col">
                <div className="h-pic"><img src="design_img/ayurveda-shakti.jpg" alt="Shree Ayurveda Shakti" /></div>
                <div className="course-col-text">
                  <h4>Shree Ayurveda Shakti</h4>
                  <p>10 days online + 1 day offline</p>
                  <Link to="/course-details" className="btn">Enroll now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FeaturedCourses;
