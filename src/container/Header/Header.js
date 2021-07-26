import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import RecentPost from "../../components/RecentPost";
import TagLine from "../../components/TagLine";

import "./header.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = (value) => {
    setShowNavbar(value);
  };

  return (
    <div className="ruby-blog__header-container">
      <div className="ruby-blog__header-container__logo">
        <div>
          <Link to="/">Ruby</Link>
        </div>
      </div>
      <div className="ruby-blog__header-container__nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tag">Tag</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ruby-blog__header-container__nav-smallDevice">
        <div
          onClick={() => handleShowNavbar(true)}
          className="ruby-blog__header-container__nav-smallDevic__sidebar-open"
        >
          <HiOutlineMenuAlt1 fontSize={25} />
        </div>

        {showNavbar ? (
          <div className="ruby-blog__header-container__nav-smallDevice__sidebar">
            <div
              className="ruby-blog__header-container__nav-smallDevice__sidebar-close"
              onClick={() => handleShowNavbar(false)}
            >
              <IoIosCloseCircle fontSize={25} />
            </div>

            <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content">
              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__navlinks">
                <nav>
                  <ul>
                    <li>
                      <Link to="/" onClick={() => handleShowNavbar(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/tag" onClick={() => handleShowNavbar(false)}>
                        Tag
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/authors"
                        onClick={() => handleShowNavbar(false)}
                      >
                        Authors
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags-heading">
                  Tags
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tagslist">
                  <TagLine
                    title="Apple"
                    count={8}
                    clickEvent={handleShowNavbar}
                  />
                  <TagLine
                    title="Google"
                    count={7}
                    clickEvent={handleShowNavbar}
                  />
                  <TagLine
                    title="Review"
                    count={3}
                    clickEvent={handleShowNavbar}
                  />
                  <TagLine
                    title="Tips & Tricks"
                    count={5}
                    clickEvent={handleShowNavbar}
                  />
                  <TagLine
                    title="Wearable"
                    count={4}
                    clickEvent={handleShowNavbar}
                  />
                </div>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-heading">
                  Recent Posts
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-posts">
                  <RecentPost
                    title="What's on My iPhone?"
                    date="May 9, 2019"
                    link="article-1"
                    clickEvent={handleShowNavbar}
                  />
                  <RecentPost
                    title="Is Chromebook Still a Thing?"
                    date="May 9, 2019"
                    link="article-2"
                    clickEvent={handleShowNavbar}
                  />
                  <RecentPost
                    title="Do You Need an Apple TV?"
                    date="May 9, 2019"
                    link="article-3"
                    clickEvent={handleShowNavbar}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
