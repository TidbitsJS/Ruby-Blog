import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Tag from "./Tag";

import "./basicArticleCard.css";

const BasicArticleCard = (props) => {
  let article = props.data;
  return (
    <div className="basic-article-card__container">
      <div className="basic-article-card__container__image-div">
        <Link
          to={{
            pathname: `/articles/${article.articleId}`,
            state: article.articleId,
          }}
          onClick={() => scroll.scrollToTop()}
        >
          <img src={article.img} alt={article.title} />
        </Link>
      </div>
      <div className="basic-article-card__container__content-div">
        <Tag tag={article.tag[0]} />
        <div className="basic-article-card__container__content-div__title">
          <h2>
            <Link
              to={{
                pathname: `/articles/${article.articleId}`,
                state: article.articleId,
              }}
              onClick={() => scroll.scrollToTop()}
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
                  pathname: `/articles/${article.articleId}`,
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
              <Link
                to={{
                  pathname: `/authors`,
                  state: {
                    authorImg: article.author,
                    authorName: article.authorName,
                  },
                }}
              >
                <img
                  src={article.author}
                  alt={article.title + article.tag[0]}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicArticleCard;
