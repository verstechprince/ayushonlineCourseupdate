import React from "react";
import HomeSlider from "../components/Slider";
import Accordion from "react-bootstrap/Accordion";
import FaqAccordion from "../components/FaqAccordion";
import FeaturedCourses from "../components/FeaturedCourses";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <section className="contents">
        <div className="courses-bar">
          <div className="container">
            <FeaturedCourses />
          </div>
        </div>

        <div className="video-col-bar">
          <div className="video-overlay"></div>
          <div className="video-col">
            <h1 className="main-head">
              Build your career in Acupressure Therapy & <br />
              Modern Ayurvedic Science
              <br />
              <span>
                Our mission is to facilitate individuals in building their
                careers in Acupressure Therapy & Modern Ayurvedic Science.
              </span>
            </h1>
            <a href="" className="video-btn">
              <i className="fa fa-play"></i>
            </a>
          </div>
        </div>

        <div className="home-web-col-bar">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <FaqAccordion />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 home-web-col-main">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 home-web-col">
                    <div className="h-icon">
                      <img
                        src="design_img/feature-icon-1.png"
                        alt="Best Study Material"
                      />
                    </div>
                    <h4>
                      Best Study
                      <br />
                      Material{" "}
                    </h4>
                  </div>
                  <div className="col-xs-6 col-sm-6 home-web-col">
                    <div className="h-icon">
                      <img
                        src="design_img/feature-icon-2.png"
                        alt="Anytime Anywhere"
                      />
                    </div>
                    <h4>
                      Anytime, <br />
                      Anywhere
                    </h4>
                  </div>
                  <div className="col-xs-6 col-sm-6 home-web-col">
                    <div className="h-icon">
                      <img
                        src="design_img/feature-icon-3.png"
                        alt="Convenient & Safe"
                      />
                    </div>
                    <h4>
                      Convenient <br />& Safe
                    </h4>
                  </div>
                  <div className="col-xs-6 col-sm-6 home-web-col">
                    <div className="h-icon">
                      <img
                        src="design_img/feature-icon-4.png"
                        alt="Adaptive Teaching"
                      />
                    </div>
                    <h4>
                      Adaptive <br />
                      Teaching{" "}
                    </h4>
                  </div>
                  {/* Add other feature items here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
