import React, { useState } from "react";
import FancyArticleCard from "../../../components/FancyArticleCard";
import BasicArticleCard from "../../../components/BasicArticleCard";
import PrimaryButton from "../../../components/PrimaryButton";
import ShortcutBar from "../../../components/ShortcutBar";
import articles from "../../../data/ArticlesData";

import "./tagPage.css";

function TagPage() {
  const [activeTag, setActiveTag] = useState("apple");

  let allTags = [
    "apple",
    "google",
    "review",
    "wearable",
    "book",
    "code",
    "tips & tricks",
    "fashion",
    "technology",
  ];

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div className="ruby-blog__home-container__content-tags-display-div">
          <div className="ruby-blog__home-container__content-tags-display-div__tag active">
            {activeTag}
          </div>
          {allTags.map((tag, index) => {
            if (tag !== activeTag) {
              return (
                <div
                  className="ruby-blog__home-container__content-tags-display-div__tag"
                  onClick={() => setActiveTag(tag)}
                  key={index + tag + 2}
                >
                  {tag}
                </div>
              );
            }
          })}
        </div>
        <div className="ruby-blog__home-container__content-article-div">
          {articles.map((article, index) => {
            if (article.tag.includes(activeTag)) {
              if (article.type === "fancy") {
                return <FancyArticleCard data={article} key={index * 11} />;
              } else {
                return <BasicArticleCard data={article} key={index * 22} />;
              }
            }
          })}
        </div>
      </div>
      <div className="ruby-blog__home-container__sideBar">
        <ShortcutBar />
      </div>
    </div>
  );
}

export default TagPage;
