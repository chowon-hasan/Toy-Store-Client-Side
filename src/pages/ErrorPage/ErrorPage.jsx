import React from "react";
import "./errror.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <Link to="/">
        <button className="btn btn-wide">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
