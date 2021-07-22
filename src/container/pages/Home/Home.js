import React from "react";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";

import "./home.css";

const Home = () => {
  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <BasicArticleCard />
        <BasicArticleCard />
        <FancyArticleCard />
        <BasicArticleCard />
        <FancyArticleCard />
        <BasicArticleCard />
        <FancyArticleCard />
        <BasicArticleCard />
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default Home;
