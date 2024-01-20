import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("123@gmail.com"); // Dummy email
  const [password, setPassword] = useState("98798798"); // Dummy password

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulating a successful login with fixed dummy credentials
      if (email === "123@gmail.com" && password === "98798798") {
        // Proceed with the login
        const dummyUserData = {
          _id: "dummyUserId",
          name: "DummyUser",
        };
        sessionStorage.setItem("userId", JSON.stringify(dummyUserData._id));
        sessionStorage.setItem("userFirstName", JSON.stringify(dummyUserData.name));

        onLogin();
      } else {
        // Show an error message for invalid credentials
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
      <div className="banner-bar">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>Login</h1>
            <ul className="location">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login" className="active">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contents">
        <div className="content-bar">
          <div className="container">
            <div className="reg-form-box log-form-box">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Email ID / Mobile no.</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Login"
                  className="btn btn-sub"
                />
                
                <div className="row">
                  <div className="col-xs-6">
                    <a className="forgot-lnk">Forgot Password?</a>
                  </div>
                  <div className="col-xs-6">
                    <Link to="/register" className="reg-lnk">
                      Register now!
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
