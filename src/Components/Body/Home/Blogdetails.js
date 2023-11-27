import React, { Component } from "react";
import image from "./images/Depositphotos_148431243_xl-2015-1-1024x683.jpg"
import {connect} from "react-redux"


const mapStateToProps = (state) => {
  console.log("mapstate", state)
  return {
    data: state.blogs
  }
}

class Blogdetails extends Component{

  render() {
    return (
      <div className="blogdetails" style={{ marginBottom: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src={image}
                alt=""
                className="blogsDetailsImage"
              ></img>
              <h5>Why do we use it?</h5>
              <p>{this.data}</p>
              <h5>Travel</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps) (Blogdetails);