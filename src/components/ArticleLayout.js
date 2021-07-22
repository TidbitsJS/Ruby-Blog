import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import mdFile from "../data/md/airPodsCool.md";
import "./articleLayout.css";
import Tag from "./Tag";

const ArticleLayout = () => {
  const [mdText, setMdText] = useState(null);

  useEffect(() => {
    fetch(mdFile)
      .then((response) => response.text())
      .then((text) => setMdText(text));

    console.log(mdText);
  }, [mdText]);

  return (
    <div className="ruby-blog__article-layout__container">
      <div className="ruby-blog__article-layout__container__head">
        <Tag tag="Wearable" />
        <div className="ruby-blog__article-layout__container__head-title">
          <h2>The Era of Smartwatches</h2>
        </div>
      </div>
      <div className="ruby-blog__article-layout__container__date">
        <p>
          May 9, 2019 <span>1 min read</span>
        </p>
      </div>
      <div className="ruby-blog__article-layout__container__image-div">
        <img
          src="https://source.unsplash.com/1600x900/?nature"
          alt="article__layout__img"
        />
      </div>
      <div className="ruby-blog__article-layout__container__content">
        <ReactMarkdown children={mdText} />
      </div>
    </div>
  );
};

export default ArticleLayout;
