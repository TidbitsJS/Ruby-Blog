import React from "react";
import ShortcutBar from "../../../components/ShortcutBar";

import "./home.css";

const Home = () => {
  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">conetent</div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default Home;
