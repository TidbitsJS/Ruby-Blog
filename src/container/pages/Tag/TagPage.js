import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FancyArticleCard from "../../../components/FancyArticleCard";
import BasicArticleCard from "../../../components/BasicArticleCard";
import ShortcutBar from "../../../components/ShortcutBar";
import articles from "../../../data/ArticlesData";

import "./tagPage.css";

function TagPage(props) {
  const [activeTag, setActiveTag] = useState("apple");
  const scrollPos = useRef();

  const tag = useLocation();

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

  useEffect(() => {
    if (tag.state) {
      setActiveTag(tag.state.toLowerCase());
    }
  }, [tag.state]);

  const scrollLeft = () => {
    scrollPos.current.scrollLeft = 0;
  };

  return (
    <div className="ruby-blog__home-container">
      <div className="ruby-blog__home-container__content">
        <div
          ref={scrollPos}
          className="ruby-blog__home-container__content-tags-display-div"
        >
          <div
            className="ruby-blog__home-container__content-tags-display-div__tag active"
            onClick={() => scrollLeft()}
          >
            {activeTag}
          </div>
          {allTags.map((tag, index) => {
            if (tag !== activeTag) {
              return (
                <div
                  className="ruby-blog__home-container__content-tags-display-div__tag"
                  onClick={() => {
                    scrollLeft();
                    setActiveTag(tag);
                  }}
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
