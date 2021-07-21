import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

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
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tag">
                    <p>Apple</p>
                    <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tagCount">
                      <div>8</div>
                    </div>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tag">
                    <p>Google</p>
                    <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tagCount">
                      <div>7</div>
                    </div>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tag">
                    <p>Review</p>
                    <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tagCount">
                      <div>3</div>
                    </div>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tag">
                    <p>Tips & Tricks</p>
                    <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tagCount">
                      <div>5</div>
                    </div>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tag">
                    <p>Wearable</p>
                    <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__taglist-tagCount">
                      <div>4</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts">
                <p className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-heading">
                  Recent Posts
                </p>
                <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-posts">
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-post">
                    <h5>What's on My iPhone?</h5>
                    <p>May 9, 2019</p>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-post">
                    <h5>Is Chromebook Still a Thing?</h5>
                    <p>May 9, 2019</p>
                  </div>
                  <div className="ruby-blog__header-container__nav-smallDevice__sidebar-content__recentPosts-post">
                    <h5>Do You Need an Apple TV?</h5>
                    <p>May 9, 2019</p>
                  </div>
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
