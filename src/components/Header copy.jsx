import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";
import Registration from "./Registration";

const Header = () => {
  const openLogin = (event) => {
    event.preventDefault();
    setIsLoginOpen(true);
    setIsRegistrationOpen(false);
  };

  const openRegistration = (event) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsRegistrationOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegistrationOpen(false);
  };

  return (
    <>
      <div className="my_res_nav_col">
        <ul>{/* Add responsive navigation items if needed */}</ul>
      </div>

      <header>
        <div className="logo-bar">
          <div className="container">
            <div className="row">
              <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2">
                <Link to="/">
                  <a href="index.php" className="logo">
                    <img
                      src="design_img/logo.png"
                      alt="Global Society Of Ayush - For Accupressure, Yoga & Alternate Medicine"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-xs-8 col-sm-9 col-md-10 col-lg-10">
                <div className="row">
                  <div className="col-xs-12">
                    <nav className="social-nav">
                      <ul>
                        <li>
                          <a href="" target="_blank">
                            <i className="fa fa-facebook  fa-lg"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            <i className="fa fa-twitter  fa-lg"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            {" "}
                            <i className="fa fa-linkedin fa-lg"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <i className="fa fa-youtube fa-lg"></i>{" "}
                          </a>
                        </li>
                      </ul>{" "}
                    </nav>
                    <nav className="cont-nav">
                      <ul>
                        <li>
                          <a href="mailto:info@globalsocietyayush.com">
                            <i className="fa fa-envelope"></i>
                            <span className="cont-text">
                              Email : info@globalsocietyayush.com
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="tel:+910000000000">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span className="cont-text">
                              Call : +91 00000 00000
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="nav-brdr"></div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="my_res_btn_bar">
                      <a className="btn_open">
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
                    <div className="shop-cart">
                      <Link to="/cart">
                        <a href="">
                          <span className="shop-cart-icon">
                            <span className="cart_qty">0</span>
                          </span>
                        </a>
                      </Link>
                    </div>
                    <nav className="user-nav">
                      <ul>
                        <li>
                          <Link to="/login">
                            <a href="" className="login">
                              Login
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <a href="" className="join">
                              Register
                            </a>
                          </Link>
                        </li>
                        {/* After login HTML */}
                        {/* <li>
                          <a href="" className="logged-in">
                            <img src="design_img/user.jpg" alt="User Profile" />
                            <span>Hi, Rajendra </span> <i className="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul className="user-nav-2">
                            <li><a href="">My Profile</a></li>
                            <li><a href="">Logout</a></li>
                          </ul>
                        </li> */}
                      </ul>
                    </nav>
                    <div className="search-bar">
                      <div className="search-container">
                        <div className="col-xs-10 in-container form-group">
                          <input
                            className="form-control"
                            placeholder="What are you looking for ?"
                            type="text"
                          />
                        </div>
                        <div className="col-xs-2 bt-container">
                          <input
                            className="btn-search"
                            value=""
                            type="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar hidden-xs">
          <div className="container">
            <nav className="site-nav">
              <ul id="level_1">
                <li>
                  <Link to="/">
                    <a href="">Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a href="">About us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/courses">
                    <a href="">Courses</a>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <a href="">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials">
                    <a href="">Testimonials</a>
                  </Link>
                </li>
                <li className="has-nav">
                  <Link to="/gallery">
                    <a>Gallery</a>
                  </Link>
                  <ul id="level_2">
                    <li>
                      <Link to="/photo-gallery">
                        <a href="">Photo Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/video-gallery">
                        <a href="">Video Gallery</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog">
                    <a href="">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a href="">Contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
