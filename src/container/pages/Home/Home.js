import React, { useEffect, useState } from "react";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import PrimaryButton from "../../../components/PrimaryButton";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./home.css";

const Home = () => {
  const [numberOfArticles, setNumberOfArticles] = useState(
    articles.slice(0, 11)
  );
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
      let increaseArticles = articles.slice(0, numberOfArticles.length + 4);
      setNumberOfArticles(increaseArticles);
    }, 3000);
  };

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div className="ruby-blog__home-container__content-article-div">
          {numberOfArticles.map((article, index) => {
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
          {numberOfArticles.length === articles.length ? null : (
            <PrimaryButton name="Load More" clickEvent={handleClick} />
          )}
          {showSpinner ? (
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default Home;
