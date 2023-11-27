import React from "react";
import Banner from "./Banner";
import Blogsdetails from "./Blogsdetails";
import Blogs from "./Blogs";
import Banner2 from "./Banner2";
function Home() {
    return (
        <div className="blogBody">
            <Banner />
            <Blogs />
            {/* <Blogsdetails /> */}
      </div>
  );
}
export default Home;
