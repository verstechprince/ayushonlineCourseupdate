import React from 'react';
import { Link } from 'react-router-dom';

const MainFeaturedCourses = () => {
  return (
    <div>
      <div className="banner-bar">
        <div className="container">
          <div className="banner-content">
            <h1>Nursing Procedure</h1>
            <ul className="location">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses" className="active">Courses</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="contents">
        <div className="nur-procedure-sec">
          <div className="courses-bar">
            <div className="container">
              <div className="courses-main-container">
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
                      <div className="h-pic"><img src="design_img/65aa17cb7e52efa136827ed4.jpg" alt="Shree Ayurveda Shakti" /></div>
                      <div className="course-col-text">
                        <h4>Shree Ayurveda Shakti</h4>
                        <p>10 days online + 1 day offline.</p>
                        <Link to="/course-details" className="btn">Enroll now</Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-sm-4">
                    <div className="course-col">
                      <div className="h-pic"><img src="design_img/65aa18457e52efa136827ed9.jpg" alt="Shree Ayurveda Shakti" /></div>
                      <div className="course-col-text">
                        <h4>Ayurvedic Beauty and Skincare Workshop</h4>
                        <p>1.5 months with DIY skincare workshops.</p>
                        <Link to="/course-details" className="btn">Enroll now</Link>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-sm-4">
                    <div className="course-col">
                      <div className="h-pic"><img src="design_img/65aa19bb7e52efa136827efd.jpg" alt="Shree Ayurveda Shakti" /></div>
                      <div className="course-col-text">
                        <h4>Holistic Health and Wellness Program</h4>
                        <p>4.5 months with wellness projects.</p>
                        <Link to="/course-details" className="btn">Enroll now</Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFeaturedCourses;
