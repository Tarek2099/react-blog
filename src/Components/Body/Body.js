import React from "react";
import { Route, Routes } from "react-router";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Blogsdetails from "./Home/Blogsdetails";
import Home from "./Home/Home";
import Login from "./Registration/Login";
import Registration from "./Registration/Registration";
import Write from "./Write/Write";
import Blogs from "./Blogs/Blogs";

function Body() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/details" element={<Blogsdetails />}></Route>
        </Routes>
      </div>
    );
}
export default Body;