import React from "react";

import "./fancyArticleCard.css";

const FancyArticleCard = () => {
  return (
    <div className="fancy-article-card__container">
      <div className="fancy-article-card__container__image-div">
        <img
          src="https://source.unsplash.com/1600x900/?google"
          alt="something"
        />
      </div>
      <div className="fancy-article-card__container__content-div">
        <div className="basic-article-card__container__content-div__tag">
          <div>Google</div>
        </div>
        <div className="basic-article-card__container__content-div__title">
          <h2>Is Chromebook Still a Thing</h2>
        </div>
        <div className="basic-article-card__container__content-div__end">
          <div className="basic-article-card__container__content-div__end-readMore">
            <p>Read More</p>
          </div>
          <div className="basic-article-card__container__content-div__end-authors">
            <div className="basic-article-card__container__content-div__end-authors__circle">
              <img
                src="https://source.unsplash.com/1600x900/?nature"
                alt="author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyArticleCard;
