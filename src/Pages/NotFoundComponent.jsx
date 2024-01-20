import React from "react";
import { Link } from "react-router-dom";
const NotFoundComponent = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 p-5">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3 text-danger">Page not found.</p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
