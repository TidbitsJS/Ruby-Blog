import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

import "./authorInfo.css";

const AuthorInfo = (props) => {
  const [showSocial, setShowSocial] = useState(false);

  const handleSocial = (value) => {
    setShowSocial(value);
  };

  return (
    <div className="ruby-blog__author-info__container">
      <div className="ruby-blog__author-info__container__author-img-div">
        <img src={props.imgURL} alt="author_img" />
      </div>
      <div className="ruby-blog__author-info__container__content">
        <div className="ruby-blog__author-info__container__content__author-title">
          <h4 className="ruby-blog__author-info__container__content__author-titleh4">
            {props.title}
          </h4>

          <div className="ruby-blog__author-info__container__content__author-social">
            {!showSocial ? (
              <MdArrowDropDown
                fontSize={25}
                style={{ cursor: "pointer" }}
                onClick={() => handleSocial(true)}
              />
            ) : (
              <MdArrowDropUp
                fontSize={25}
                style={{ cursor: "pointer" }}
                onClick={() => handleSocial(false)}
              />
            )}

            {showSocial ? (
              <div className="ruby-blog__author-info__container__content__author-social-items">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>More posts</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="ruby-blog__author-info__container__content__author-para">
          {props.desc}
        </div>

        <div className="ruby-blog__author-info__container__content__author-address">
          <TiLocation fontSize={13} style={{ marginRight: 3 }} />{" "}
          {props.address}
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
