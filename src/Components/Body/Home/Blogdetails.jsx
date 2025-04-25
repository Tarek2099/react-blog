import React from "react";
import LoadingSpinner from "../../Common/LoadingSpinner";
import Sidebar from "../../Sidebar/Sidebar";
import Comments from "./Comments";

const Blogdetails = () => {
  return (
    <div className="container">
      <div style={{ display: "flex" }} className="blog-details-container">
        <div className="col-8">
          <div className="blogdetails">
            <div className="image-container" style={{ position: "relative" }}>
              {!imageLoaded && <LoadingSpinner message="Loading image..." />}
              <img
                src={blog.image}
                alt={blog.name}
                className={`blogsDetailsImage ${
                  imageLoaded ? "fade-in" : "hidden"
                }`}
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </div>
            <h2 className="blog-title">{blog.name}</h2>
            <p className="blog-date">{blog.date}</p>
            <div className="blog-content">{blog.content}</div>
            <div className="blog-tags">
              {blog.tags?.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="blog-category">Category: {blog.category}</div>
          </div>
          <Comments />
        </div>
        <div className="col-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
