import React from "react";
import ghostImg from "../../../assets/ghost.svg";

import "./aboutSite.css";

const AboutSite = () => {
  return (
    <div className="ruby-blog__about-site__container">
      <div className="ruby-blog__about-site__container__short-info">
        <div className="ruby-blog__about-site__container__short-info__head-div">
          <h2>- About Site - </h2>
          <p>What Why and How of the Ruby Blog site</p>
        </div>
        <div className="ruby-blog__about-site__container__short-info__para-div">
          <p>
            Created out of Fun, Ruby Blog is a creation of two people. The sole
            aim of the website is - well, nothing. Out of some excessive
            curiosity and that extra passion for coding ( sometimes not ), I
            developed it to learn-know-grow more. Talking on the topic of
            design, a beautiful layout ( feels to me ) is used to showcase your
            awesome ( or not ) articles. The way it has been laid out tells
            itself a whole story. If this doesn't impress you, I don't know what
            will. You can know about the people behind this blog in the below
            section.
          </p>
          <p>
            Coming to the coding, the first, ( & proud feel ) thing is-site is
            build using pure CSS. No extra things for CSS layout are used. Of
            course, it's REACT. The hype & my Weapon till now. Few npm packages
            are in use, including, react-markdown for rendering markdown files.
            A good thing is, I managed to do this site in less mess. Reusable
            components, you know. The bad thing is, it's just Frontend only.
            This means the data is hardcoded. To see more articles in the
            future, I have to add them manually. Blah
          </p>
          <p style={{ textAlign: "center" }}>
            Maybe in the future, it will either have its backend from scratch or
            service from the CMS platform. Let us see what the future has in its
            store for the 💎 site. <br /> ( Me actually )
          </p>
        </div>
      </div>
      <div className="ruby-blog__about-site__container__credits">
        <div className="ruby-blog__about-site__container__credits__programmer-div">
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div">
            <img
              src="https://source.unsplash.com/1600x900/?code"
              alt="programmer_img"
            />
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__headinfo">
            <h2>It's ME</h2>
            <p>Programmer behind the Ruby Blog</p>
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__parainfo">
            <p>
              Just another complex human being with complex thought system.
              Currently exploring Web Development area with MERN as guide. I try
              to code everyday. In spare time, I think.
            </p>
          </div>
        </div>
        <div className="ruby-blog__about-site__container__credits__designer-div">
          <div className="ruby-blog__about-site__container__credits__designer-div__profile-div">
            <img src={ghostImg} alt="ghost_img" />
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__headinfo">
            <h2>It's GHOST</h2>
            <p>Designer behind the Ruby Blog</p>
          </div>
          <div className="ruby-blog__about-site__container__credits__programmer-div__profile-div__parainfo">
            <p>
              Ghost is a free and open source blogging platform written in
              JavaScript and designed to simplify the process of online
              publishing for individual bloggers as well as online publications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
