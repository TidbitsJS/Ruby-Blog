import React from "react";

import "./fancyArticleCard.css";
import Tag from "./Tag";

const FancyArticleCard = (props) => {
  let article = props.data;

  return (
    <div className="fancy-article-card__container">
      <div className="fancy-article-card__container__image-div">
        <img src={article.img} alt={article.title} />
      </div>
      <div className="fancy-article-card__container__content-div">
        <Tag tag={article.tag} />
        <div className="basic-article-card__container__content-div__title">
          <h2>{article.title}</h2>
        </div>
        <div className="basic-article-card__container__content-div__end">
          <div className="basic-article-card__container__content-div__end-readMore">
            <p>Read More</p>
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

export default FancyArticleCard;
