import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Blogdetails from "./Blogdetails";
import Comments from "./Comments";

function Blogsdetails(props) {
    return (
      <div className="container">
        <div style={{ display: "flex" }}>
          <div className="col-8">
            <Blogdetails />
            <Comments />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    );
}

export default Blogsdetails;