import React from "react";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./home.css";

const Home = () => {
  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div className="ruby-blog__home-container__content-article-div">
          {articles.map((article, index) => {
            if (article.type === "fancy") {
              return <FancyArticleCard data={article} />;
            } else {
              return <BasicArticleCard data={article} />;
            }
          })}
        </div>
        <div className="ruby-blog__home-container__content-spinner-div">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default Home;
