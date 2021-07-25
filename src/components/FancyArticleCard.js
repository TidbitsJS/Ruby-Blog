import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Tag from "./Tag";

import "./fancyArticleCard.css";

const FancyArticleCard = (props) => {
  let article = props.data;

  return (
    <div className="fancy-article-card__container">
      <div className="fancy-article-card__container__image-div">
        <img src={article.img} alt={article.title} />
      </div>
      <div className="fancy-article-card__container__content-div">
        <Tag tag={article.tag[0]} />
        <div className="basic-article-card__container__content-div__title">
          <h2>
            <Link
              to={{
                pathname: `/${article.articleId}`,
                state: article.articleId,
              }}
              onClick={() => scroll.scrollToTop()}
            >
              {article.title}
            </Link>
          </h2>
        </div>
        <div className="basic-article-card__container__content-div__end">
          <div className="basic-article-card__container__content-div__end-readMore">
            <p>
              <Link
                to={{
                  pathname: `/${article.articleId}`,
                  state: article.articleId,
                }}
                onClick={() => scroll.scrollToTop()}
              >
                Read More
              </Link>
            </p>
          </div>
          <div className="basic-article-card__container__content-div__end-authors">
            <div className="basic-article-card__container__content-div__end-authors__circle">
              <img src={article.author} alt={article.title + article.tag[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyArticleCard;
