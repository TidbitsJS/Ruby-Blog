import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";
import articles from "../../../data/ArticlesData";

import "./authorPage.css";

const AuthorPage = (props) => {
  const [filterAuthor, setFilterAuthor] = useState("suzan walker");
  const [filterAuthorImg, setFilterAuthorImg] = useState(
    "https://source.unsplash.com/1600x900/?india"
  );

  const authorProps = useLocation();

  useEffect(() => {
    if (authorProps.state) {
      setFilterAuthor(authorProps.state.authorName);
      setFilterAuthorImg(authorProps.state.authorImg);
    }
  }, [authorProps]);

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__author-page-container__content">
        <div className="ruby-blog__author-page-container__content__author-display">
          <div className="ruby-blog__author-page-container__content__image-div">
            <img src={filterAuthorImg} alt="authorPicture" />
          </div>
          <div className="ruby-blog__author-page-container__content__author-name-div">
            {filterAuthor}
          </div>
        </div>
        <div className="ruby-blog__home-container__content-article-div">
          {articles.map((article, index) => {
            if (
              filterAuthor.toLowerCase() === article.authorName.toLowerCase()
            ) {
              if (article.type === "fancy") {
                return (
                  <FancyArticleCard
                    data={article}
                    key={index + article.authorName}
                  />
                );
              } else {
                return (
                  <BasicArticleCard
                    data={article}
                    key={article.authorName + index}
                  />
                );
              }
            } else return "";
          })}
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
};

export default AuthorPage;
