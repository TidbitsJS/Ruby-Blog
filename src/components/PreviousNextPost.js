import React from "react";
import { Link } from "react-router-dom";

import "./previousNextPost.css";

const PreviousNextPost = (props) => {
  if (props.article) {
    return (
      <Link
        to={{
          pathname: `/${props.article.articleId}`,
          state: props.article.articleId,
        }}
      >
        <div
          className="ruby-blog__container__anotherPost-thumbnail"
          style={{
            backgroundImage: `url(${props.article.img})`,
            textAlign: props.content,
          }}
        >
          <div className="ruby-blog__container__anotherPost-thumbnail__post-type">
            {props.postType}
          </div>
          <div className="ruby-blog__container__anotherPost-thumbnail__articleTitle">
            {props.article.title}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className="ruby-blog__container__anotherPost-thumbnail"
      style={{
        opacity: 0,
        textAlign: props.content,
      }}
    >
      <div className="ruby-blog__container__anotherPost-thumbnail__post-type">
        {props.postType}
      </div>
      <div className="ruby-blog__container__anotherPost-thumbnail__articleTitle">
        ""
      </div>
    </div>
  );
};

export default PreviousNextPost;
