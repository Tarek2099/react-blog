import React from "react";
import { Component } from "react";
import Blog from "./Blog";
import Sidebar from "../../Sidebar/Sidebar";
import BLOGS from "../../../Data/Data";
import Blogdetails from "./Blogdetails";
import Comments from "./Comments"

function Blogsdetails(props) {

 
console.log("Blogsdetails2", props)
    return (
      <div className="container">
        <div  style={{ display: "flex" }}>
          <div className="col-8"><Blogdetails /> <Comments></Comments></div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    );
}

export default Blogsdetails;