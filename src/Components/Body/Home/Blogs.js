import React from "react";
import { Component } from "react";
import { CardColumns, CardGroup } from "reactstrap";
import BLOGS from "../../../Data/Data";
import Blog from "./Blog.js";
import Blogdetails from "./Blogdetails";
import Sidebar from "../../Sidebar/Sidebar";
import {connect} from "react-redux"
import { fetchBlogs } from "../../../Redux/ActionCreators.js";

const mapStateToProps = state => {
  return {
    blogs: state.BLOGS
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBlogs: () => dispatch(fetchBlogs(this.props.blogs)),
//   };
// };
class Blogs extends Component {
  state = {
    blogdetails: null,
  };

  ClickDetails = (details) => {
    this.setState({
      blogdetails: details,
    });
  };

  // componentDidMount() {
  //   this.props.fetchBlogs(this.props.blogs);
  // }

  render() {
    const DataMaping =BLOGS.map((item) => {
      return (
        <Blog
          data={item}
          key={item.id}
          clickDetails={() => this.ClickDetails(item)}
        />
      );
    });

    // let allDetails= null;
    //     if (this.state.blogdetails != null) {
    //   allDetails= <Blogdetails Details={this.props.blogdetails} />;
    //     }
    return (
      <div className="container blog">
        <div style={{ display: "flex" }} className="allBlogs">
          <div className="col-8 blogsCard">{DataMaping}</div>
          <div className="col-4 sideBarResponsive">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Blogs);