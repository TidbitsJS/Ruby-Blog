import React from "react";
import "./recentPost.css";

const RecentPost = (props) => {
  return (
    <div className="recentPosts-post">
      <h5>{props.title}</h5>
      <p>{props.date}</p>
    </div>
  );
};

export default RecentPost;
