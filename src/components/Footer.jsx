import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="count-bar">
          <div className="row">
            <div className="col-xs-6 col-sm-3 count-col">
              <div
                className="numscroller numscroller-big-bottom main-text"
                data-slno="1"
                data-min="0"
                data-max="100"
                data-delay="5"
                data-increment="15"
              >
                0
              </div>
              <p className="common-text">
                Happy <br /> Students
              </p>
            </div>
            <div className="col-xs-6 col-sm-3 count-col">
              <div
                className="numscroller numscroller-big-bottom main-text"
                data-slno="1"
                data-min="0"
                data-max="50"
                data-delay="5"
                data-increment="3"
              >
                0
              </div>
              <p className="common-text">
                Hours of
                <br /> Live Learning{" "}
              </p>
            </div>
            <div className="col-xs-6 col-sm-3 count-col">
              <div
                className="numscroller numscroller-big-bottom main-text"
                data-slno="1"
                data-min="0"
                data-max="150"
                data-delay="5"
                data-increment="3"
              >
                0
              </div>
              <p className="common-text">
                Cities
                <br /> Worldwide
              </p>
            </div>
            <div className="col-xs-6 col-sm-3 count-col">
              <div
                className="numscroller numscroller-big-bottom main-text"
                data-slno="1"
                data-min="0"
                data-max="100"
                data-delay="5"
                data-increment="2"
              >
                0
              </div>
              <p className="common-text">
                Average
                <br /> Teacher Rating
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bar">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4">
              <a href="index.php" className="logo">
                <img
                  src="design_img/logo.png"
                  alt="Global Society Of Ayush - For Accupressure, Yoga & Alternate Medicine"
                />
              </a>
              <p>
                The Global Society of Ayush is a government-registered
                educational society that specializes in Ayurvedic and
                acupressure-based healthcare courses.
              </p>
              <nav className="social-nav">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/amulyaherbs"
                      target="_blank"
                    >
                      <i className="fa fa-facebook  fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa fa-twitter  fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa fa-linkedin fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCMuVmZoE04e8F0jq8CoXAsw"
                      target="_blank"
                    >
                      <i className="fa fa-youtube fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xs-12 col-sm-0 col-md-1 col-lg-1"></div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <h4>Quick Links</h4>
              <nav className="nav-menu">
                <ul>
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/">About us</Link>
                  </li>
                  <li>
                  <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                  <Link to="/">FAQ</Link>
                  </li>
                  <li>
                  <Link to="/">Testimonials</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xs-6 col-sm-3  col-md-2 col-lg-2">
              <h4>Other Links</h4>
              <nav className="nav-menu">
                <ul>
                  <li>
                    <Link to="/">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/">Video Gallery</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Contact us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xs-12 col-sm-4  col-md-3 col-lg-2">
              <h4>Contact Us</h4>
              <nav className="site-nav">
                <ul>
                  <li style={{ marginBottom: "15px!important" }}>
                    <i className="fa fa-map-marker"></i>
                    <b>Amulya Herbs (P) Ltd.</b>
                    <br />
                    Amulya Tower, SCO-3, <br />
                    Zirakpur-Kalka Highway, Zirakpur, <br />
                    Mohali (PB) 160104
                  </li>
                  <li>
                    <a href="tel:+91176 2534300" className="cont-call">
                      <i className="fa fa-phone-square"></i>+91 176 2534300{" "}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@amulyaherbs.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      info@amulyaherbs.com
                    </a>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar-bottom">
        <div className="container">
          <p className="copy">
            &copy; <span className="copy-year"></span>{" "}
            <span className="co-name">Global Society of Ayush</span>. All Rights
            Reserved. |{" "}
            <span className="com-design">
              Design & Developed by{" "}
              <img src="design_img/versatile.png" alt="Versatile Logo" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
