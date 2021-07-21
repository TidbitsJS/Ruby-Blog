import React from "react";
import RecentPost from "./RecentPost";
import TagLine from "./TagLine";

import "./shortcutBar.css";

const ShortcutBar = () => {
  return (
    <div className="ruby-blog__shortcutBar-container">
      <div className="ruby_blog__shortcutBar-container__tagsBar">
        <div className="ruby_blog__shortcutBar-container__tagsBar-head">
          <p>Tags</p>
        </div>
        <div className="ruby-blog__shortcutBar-container__tagsBar-content">
          <TagLine title="Apple" count={8} />
          <TagLine title="Google" count={7} />
          <TagLine title="Review" count={3} />
          <TagLine title="Tips & Tricks" count={5} />
          <TagLine title="Wearable" count={4} />
        </div>
      </div>
      <div className="ruby_blog__shortcutBar-container__recentPostsBar">
        <div className="ruby_blog__shortcutBar-container__recentPostsBar-head">
          <p>Recent Posts</p>
        </div>
        <div className="ruby-blog__shortcutBar-container__recentPostsBar-content">
          <RecentPost title="What's on My iPhone?" date="May 9, 2019" />
          <RecentPost title="Is Chromebook Still a Thing?" date="May 9, 2019" />
          <RecentPost title="Do You Need an Apple TV?" date="May 9, 2019" />
        </div>
      </div>
    </div>
  );
};

export default ShortcutBar;
