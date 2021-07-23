import React, { useEffect } from "react";
import ArticleLayout from "../../../components/ArticleLayout";
import AuthorInfo from "../../../components/AuthorInfo";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./articlePage.css";

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="ruby-blog__home-container__content-display">
          <div className="ruby-blog__home-container__content-article-display">
            <ArticleLayout />
          </div>
          <div className="ruby-blog__home-container__content-author-display">
            <AuthorInfo
              title="Jose Walker"
              imgURL="https://source.unsplash.com/1600x900/?animals"
              address="Sydney, Australia"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default ArticlePage;
