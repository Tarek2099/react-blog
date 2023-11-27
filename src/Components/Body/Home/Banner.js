import React from "react";
import banner from "./images//travel-blog-3.jpg"
function Banner () {
    return (
      <div className="banner">
        <div classNam="container-fluid">
          <div className="bannerbody">
            {" "}
            <h3 className="react">The 12 Best Hikes In Switzerland</h3>
            <p className="bannertext">
              Times have certainly changed this past year. While many people had
              already been looking for ways to work remotely, nobody expected to
              be thrown into working from home overnight. Suddenly an entire
              workforce had to figure out ways to make working from home more
            </p>
            <button className="continuebtn">Continue</button>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    );
}
export default Banner;
