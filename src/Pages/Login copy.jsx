import React from "react";
import { Link } from "react-router-dom";

const Login = ({onLogin}) => {
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Email ID / Mobile no.</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>

              <input type="submit" value="Login" className="btn btn-sub" />
              <div className="row">
                <div className="col-xs-6">
                  <a className="forgot-lnk">Forgot Password ?</a>
                </div>
                <div className="col-xs-6">
                  <Link to="/register" className="reg-lnk">
                    Register now !
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
