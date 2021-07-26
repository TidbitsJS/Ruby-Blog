import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./recentPost.css";

const RecentPost = (props) => {
  return (
    <div className="recentPosts-post">
      <Link
        to={{
          pathname: `/articles/${props.link}`,
          articleId: props.link,
        }}
        onClick={() => scroll.scrollToTop()}
      >
        <h5>{props.title}</h5>
      </Link>
      <p>{props.date}</p>
    </div>
  );
};

export default RecentPost;
