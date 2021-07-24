import React from "react";

import "./previousNextPost.css";

const PreviousNextPost = (props) => {
  console.log(props.articleImg);

  return (
    <div
      className="ruby-blog__container__anotherPost-thumbnail"
      style={{
        backgroundImage: `url(${props.articleImg})`,
        opacity: isNaN(props.articleImg) ? "1" : "0",
      }}
    >
      <div className="ruby-blog__container__anotherPost-thumbnail__post-type">
        {props.postType}
      </div>
      <div className="ruby-blog__container__anotherPost-thumbnail__articleTitle">
        {props.articleTitle}
      </div>
    </div>
  );
};

export default PreviousNextPost;
