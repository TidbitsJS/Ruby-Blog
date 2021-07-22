import React from "react";
import ArticleLayout from "../../../components/ArticleLayout";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./articlePage.css";

const ArticlePage = () => {
  return (
    <div className="ruby-blog__home-container-articlePage">
      <div className="ruby-blog__home-container-articlePage__content">
        <div className="ruby-blog__home-container__content-article-suggestion">
          <div className="ruby-blog__home-container__content-article-suggestion-heading">
            <p>You might also like...</p>
          </div>
          {articles.slice(0, 3).map((article, index) => {
            if (article.type === "fancy") {
              return <FancyArticleCard data={article} key={index} />;
            } else {
              return <BasicArticleCard data={article} key={index * 2} />;
            }
          })}
        </div>
        <div className="ruby-blog__home-container__content-article-display">
          <ArticleLayout />
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default ArticlePage;
