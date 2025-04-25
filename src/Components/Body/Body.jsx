import React from "react";
import { Route, Routes } from "react-router";
import About from "./About/About";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Blogsdetails from "./Home/Blogsdetails";
import Home from "./Home/Home";
import Login from "./Registration/Login";
import Registration from "./Registration/Registration";
import Write from "./Write/Write";

function Body() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/details/:id" element={<Blogsdetails />} />
        </Routes>
      </div>
    );
}
export default Body;