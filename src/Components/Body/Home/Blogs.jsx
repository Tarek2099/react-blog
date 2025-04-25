import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlogsFailure,
  setBlogsStart,
  setBlogsSuccess,
} from "../../../Redux/blogsSlice.jsx";
import { api } from "../../../services/api.jsx";
import LoadingSpinner from "../../Common/LoadingSpinner.js";
import Sidebar from "../../Sidebar/Sidebar.js";
import Blog from "./Blog.jsx";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch(setBlogsStart());
        const data = await api.getBlogs();
        dispatch(setBlogsSuccess(data));
      } catch (error) {
        dispatch(setBlogsFailure(error.message));
      }
    };

    fetchBlogs();
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner message="Loading blog posts..." />;
  }

  if (error) {
    return <div className="error-container">Error loading blogs: {error}</div>;
  }

  return (
    <div className="container blog">
      <div style={{ display: "flex" }} className="allBlogs">
        <div className="col-8 blogsCard">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <Blog key={blog.id} data={blog} loading={false} error={null} />
            ))
          ) : (
            <div className="no-blogs">No blog posts available</div>
          )}
        </div>
        <div className="col-4 sideBarResponsive">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
