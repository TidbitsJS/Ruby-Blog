import React from "react";
import { Link } from "react-router-dom";

const Tag = (props) => {
  return (
    <Link
      to={{
        pathname: `/tag`,
        state: props.tag,
      }}
    >
      <div className="div__tag">
        <div>{props.tag}</div>
      </div>
    </Link>
  );
};

export default Tag;
