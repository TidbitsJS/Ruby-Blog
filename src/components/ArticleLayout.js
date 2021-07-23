import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import mdFile from "../data/md/airPodsCool.md";
import "./articleLayout.css";
import Tag from "./Tag";

const ArticleLayout = (props) => {
  const [mdText, setMdText] = useState(null);

  useEffect(() => {
    fetch(mdFile)
      .then((response) => response.text())
      .then((text) => setMdText(text));
  }, [mdText]);

  return (
    <div className="ruby-blog__article-layout__container">
      <div className="ruby-blog__article-layout__container__head">
        <Tag tag={props.data.tag} />
        <div className="ruby-blog__article-layout__container__head-title">
          <h2>{props.data.title}</h2>
        </div>
      </div>
      <div className="ruby-blog__article-layout__container__date">
        <p>
          {props.data.date} <span>{props.data.readTime} min read</span>
        </p>
      </div>
      <div className="ruby-blog__article-layout__container__image-div">
        <img src={props.data.img} alt="article__layout__img" />
      </div>
      <div className="ruby-blog__article-layout__container__content">
        <ReactMarkdown children={mdText} />
      </div>
    </div>
  );
};

export default ArticleLayout;
