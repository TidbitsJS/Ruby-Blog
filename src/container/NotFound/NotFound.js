import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.svg";

import "./notFound.css";

const NotFound = () => {
  return (
    <div className="ruby_blog__notFound-container">
      <div className="ruby_blog__notFound-container__img-div">
        <img src={error404} alt="notfound" />
      </div>
      <div className="ruby_blog__notFound-container__info-div">
        <h3>
          <span>404</span> Not Found
        </h3>
        <p>Looks like you're Lost</p>
        <p>The page you are looking for is not created by me</p>
        <p>
          You might like to see <Link to="/">Home</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
