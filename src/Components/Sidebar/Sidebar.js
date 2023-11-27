import React from "react";

import Categories from "./Categories";
import Search from "./Search";
import LatestPosts from "./LatestPosts";
import PostTags from "./PostTags";
import SoicalMeida from "./SoicalMeida";

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Search />
              <Categories />
              <LatestPosts />
              <PostTags />
              <SoicalMeida />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;