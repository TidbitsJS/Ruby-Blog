import React from "react";

import "./tagLine.css";

const TagLine = (props) => {
  return (
    <div className="taglist-tag">
      <p>{props.title}</p>
      <div className="taglist-tagCount">
        <div>{props.count}</div>
      </div>
    </div>
  );
};

export default TagLine;
