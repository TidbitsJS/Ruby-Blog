import React from "react";
import BasicArticleCard from "../../../components/BasicArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";

import "./home.css";

const Home = () => {
  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <BasicArticleCard />
        <BasicArticleCard />
        <BasicArticleCard />
        <BasicArticleCard />
        <BasicArticleCard />
        <BasicArticleCard />
        <BasicArticleCard />
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default Home;
