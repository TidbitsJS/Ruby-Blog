import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./previousNextPost.css";

const PreviousNextPost = (props) => {
  if (props.article) {
    return (
      <Link
        to={{
          pathname: `/articles/${props.article.articleId}`,
          state: props.article.articleId,
        }}
        onClick={() => scroll.scrollToTop()}
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
