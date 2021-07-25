import React from "react";
import { Link } from "react-router-dom";
import "./recentPost.css";

const RecentPost = (props) => {
  return (
    <div className="recentPosts-post">
      <Link
        to={{
          pathname: `/${props.link}`,
          articleId: props.link,
        }}
      >
        <h5>{props.title}</h5>
      </Link>
      <p>{props.date}</p>
    </div>
  );
};

export default RecentPost;
