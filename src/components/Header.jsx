import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

const Header = () => {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);


  const openLogin = (event) => {

    handleRefresh()
    event.preventDefault();
    setIsLoginOpen(true);
    setIsRegistrationOpen(false);
  };

  const openRegistration = (event) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsRegistrationOpen(true);
  };

  const handleLogout = () => {
    // Clear user-related items from sessionStorage
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userFirstName");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

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
                <a className="logo">
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
                          <a href="" target="_blank">
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
                        {isLogged ? (
                          <li>
                            <a href="" className="logged-in" onClick={closeModals}>
                              <img src="design_img/user.jpg" alt="User" />{" "}
                              <span>Hi, Ayush </span>{" "}
                              <i className="fa fa-angle-down" aria-hidden="true"></i>{" "}
                            </a>
                            <ul className="user-nav-2">
                              <li>
                                <a href="" onClick={closeModals}>
                                  My Profile
                                </a>{" "}
                              </li>
                              <li>
                                <a href="" onClick={handleLogout}>
                                  Logout
                                </a>{" "}
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <div>
                            <li>
                              <Link to="/login" className="login" onClick={openLogin}>
                                Login
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/register"
                                className="join"
                                onClick={openRegistration}
                              >
                                Register
                              </Link>
                            </li>
                          </div>
                        )}
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
                  <Link to="/">
                    <a href="">About us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/courses">
                    <a href="">Courses</a>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <a href="">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <a href="">Testimonials</a>
                  </Link>
                </li>
                <li className="has-nav">
                  <Link to="/">
                    <a>Gallery</a>
                  </Link>
                  <ul id="level_2">
                    <li>
                      <Link to="/">
                        <a href="">Photo Gallery</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <a href="">Video Gallery</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    <a href="">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <a href="">Contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* Login Modal */}
      {isLoginOpen && <Login onClose={closeModals} />}

      {/* Registration Modal */}
      {/* Add your registration modal component here if needed */}
    </>
  );
};

export default Header;
