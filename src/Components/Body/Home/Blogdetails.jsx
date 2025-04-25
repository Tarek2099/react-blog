import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBlogsFailure, setBlogsStart, setBlogsSuccess } from "../../../Redux/blogsSlice";
import { api } from "../../../services/api";
import LoadingSpinner from "../../Common/LoadingSpinner";
import Sidebar from "../../Sidebar/Sidebar";
import Comments from "./Comments";

const Blogdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        dispatch(setBlogsStart());
        const blog = await api.getBlogById(Number(id));
        dispatch(setBlogsSuccess([blog]));
      } catch (error) {
        dispatch(setBlogsFailure(error.message));
      }
    };

    fetchBlog();
  }, [dispatch, id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (loading) {
    return <LoadingSpinner message="Loading blog details..." />;
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  const blog = blogs[0];
  if (!blog) return <div className="no-blogs">Blog not found</div>;

  return (
    <div className="container">
      <div style={{ display: "flex" }} className="blog-details-container">
        <div className="col-8">
          <div className="blogdetails">
            <div className="image-container" style={{ position: 'relative' }}>
              {!imageLoaded && <LoadingSpinner message="Loading image..." />}
              <img
                src={blog.image}
                alt={blog.name}
                className={`blogsDetailsImage ${imageLoaded ? 'fade-in' : 'hidden'}`}
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </div>
            <h2 className="blog-title">{blog.name}</h2>
            <p className="blog-date">{blog.date}</p>
            <div className="blog-content">{blog.content}</div>
            <div className="blog-tags">
              {blog.tags?.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
            <div className="blog-category">
              Category: {blog.category}
            </div>
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