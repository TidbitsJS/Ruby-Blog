import React from "react";
import { Link } from "react-router-dom";

import "./basicArticleCard.css";
import Tag from "./Tag";

const BasicArticleCard = (props) => {
  let article = props.data;
  return (
    <div className="basic-article-card__container">
      <div className="basic-article-card__container__image-div">
        <Link
          to={{
            pathname: `/${article.articleId}`,
            state: article.articleId,
          }}
        >
          <img src={article.img} alt={article.title} />
        </Link>
      </div>
      <div className="basic-article-card__container__content-div">
        <Tag tag={article.tag} />
        <div className="basic-article-card__container__content-div__title">
          <h2>
            <Link
              to={{
                pathname: `/${article.articleId}`,
                state: article.articleId,
              }}
            >
              {article.title}
            </Link>
          </h2>
        </div>
        <div className="basic-article-card__container__content-div__para">
          <p>{article.desc}</p>
        </div>
        <div className="basic-article-card__container__content-div__end">
          <div className="basic-article-card__container__content-div__end-readMore">
            <p>
              <Link
                to={{
                  pathname: `/${article.articleId}`,
                  state: article.articleId,
                }}
              >
                Read More
              </Link>
            </p>
          </div>
          <div className="basic-article-card__container__content-div__end-authors">
            <div className="basic-article-card__container__content-div__end-authors__circle">
              <img src={article.author} alt={article.title + article.tag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicArticleCard;
