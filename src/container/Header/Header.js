import React, { useState } from "react";
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
        <div>Ruby</div>
      </div>
      <div className="ruby-blog__header-container__nav">
        <nav>
          <ul>
            <li>Home</li>
            <li>Tag</li>
            <li>Author</li>
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
                    <li>Home</li>
                    <li>Tag</li>
                    <li>Author</li>
                  </ul>
                </nav>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tags-heading">
                  Tags
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__tagslist">
                  <TagLine title="Apple" count={8} />
                  <TagLine title="Google" count={7} />
                  <TagLine title="Review" count={3} />
                  <TagLine title="Tips & Tricks" count={5} />
                  <TagLine title="Wearable" count={4} />
                </div>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-heading">
                  Recent Posts
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-posts">
                  <RecentPost title="What's on My iPhone?" date="May 9, 2019" />
                  <RecentPost
                    title="Is Chromebook Still a Thing?"
                    date="May 9, 2019"
                  />
                  <RecentPost
                    title="Do You Need an Apple TV?"
                    date="May 9, 2019"
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
