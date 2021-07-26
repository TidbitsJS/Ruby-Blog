import React, { useEffect } from "react";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import PrimaryButton from "../../../components/PrimaryButton";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div className="ruby-blog__home-container__content-article-div">
          {articles.map((article, index) => {
            if (article.type === "fancy") {
              return (
                <FancyArticleCard
                  data={article}
                  key={article.type + index * 2 + article.authorName}
                />
              );
            } else {
              return (
                <BasicArticleCard
                  data={article}
                  key={article.type + index * 4 + article.authorName}
                />
              );
            }
          })}
        </div>
        <div className="ruby-blog__home-container__content-spinner-div">
          <PrimaryButton name="Load More" />
          <div className="lds-ripple">
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
