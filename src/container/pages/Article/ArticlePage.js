import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleLayout from "../../../components/ArticleLayout";
import AuthorInfo from "../../../components/AuthorInfo";
import BasicArticleCard from "../../../components/BasicArticleCard";
import FancyArticleCard from "../../../components/FancyArticleCard";
import PreviousNextPost from "../../../components/PreviousNextPost";
import ShortcutBar from "../../../components/ShortcutBar";

import articles from "../../../data/ArticlesData";

import "./articlePage.css";

const ArticlePage = (props) => {
  const [articleData, setArticleData] = useState(null);
  const [articleIndex, setArticleIndex] = useState(0);
  const { articleId } = useParams();

  useEffect(() => {
    let theArticle = articles.filter((article, index) => {
      if (article.articleId === articleId) {
        setArticleIndex(index);
        return article;
      }
    });
    setArticleData(...theArticle);
    console.log(
      "The article",
      theArticle,
      articleIndex,
      articles[articleIndex - 1],
      articles[articleIndex + 1]
    );
    window.scrollTo(0, 0);
  }, [articleId, articleIndex]);

  if (!articleData) return <div>Hello Empty</div>;

  return (
    <div className="ruby-blog__home-container-articlePage">
      <div className="ruby-blog__home-container-articlePage__content">
        <div className="ruby-blog__home-container__content-article-suggestion">
          <div className="ruby-blog__home-container__content-article-suggestion-heading">
            <p>You might also like...</p>
          </div>
          {articles.slice(0, 3).map((article, index) => {
            if (article.type === "fancy") {
              return <FancyArticleCard data={article} key={index * 5} />;
            } else {
              return <BasicArticleCard data={article} key={index * 2} />;
            }
          })}
        </div>
        <div className="ruby-blog__home-container__content-display">
          <div className="ruby-blog__home-container__content-article-display">
            <ArticleLayout data={articleData} />
          </div>
          <div className="ruby-blog__home-container__content-author-display">
            <AuthorInfo data={articleData} />
          </div>
          <div className="ruby-blog__home-container__content-post-links">
            {articleIndex - 1 < 0 ? (
              <PreviousNextPost postType="" article={null} content="left" />
            ) : (
              <PreviousNextPost
                postType="Previous post"
                article={articles[articleIndex - 1]}
                content="left"
              />
            )}
            {articleIndex + 1 >= articles.length ? (
              <PreviousNextPost postType="" article={null} content="right" />
            ) : (
              <PreviousNextPost
                postType="next post"
                article={articles[articleIndex + 1]}
                content="right"
              />
            )}
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
