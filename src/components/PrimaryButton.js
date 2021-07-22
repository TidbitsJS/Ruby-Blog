import React from "react";

import "./primaryButton.css";

const PrimaryButton = (props) => {
  return (
    <div className="ruby-blog__primary-button__container">
      <button className="ruby-blog__primary-button__container-btn ripple">
        {props.name}
      </button>
    </div>
  );
};

export default PrimaryButton;
