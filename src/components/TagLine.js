import React from "react";
import { Link } from "react-router-dom";

import "./tagLine.css";

const TagLine = (props) => {
  return (
    <Link
      to={{
        pathname: "/tag",
        state: props.title,
      }}
      onClick={() => {
        if (props.clickEvent) {
          props.clickEvent(false);
        }
      }}
    >
      <div className="taglist-tag">
        <p>{props.title}</p>
        <div className="taglist-tagCount">
          <div>{props.count}</div>
        </div>
      </div>
    </Link>
  );
};

export default TagLine;
