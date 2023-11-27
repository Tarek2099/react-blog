import React from 'react';

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      <h2 className="categoryhead">Category</h2>
      <ul>
        <li>
          <Link to="">Country(20)</Link>
        </li>
        <li>
          <Link to="">Sea Beach(2)</Link>
        </li>
        <li>
          <Link to="">Nature</Link>
        </li>
        <li>
          <Link to="">Forest(4)</Link>
        </li>
        <li>
          <Link to="">Sea Beach</Link>
        </li>
        <li>
          <Link to="">Country</Link>
        </li>
        <li>
          <Link to="">Forest</Link>
        </li>
        <li>
          <Link to="">Nature</Link>
        </li>
        <li>
          <Link to="">Children</Link>
        </li>
        <li>
          <Link to="">Heritage</Link>
        </li>
        <li>
          <Link to="">Forest</Link>
        </li>
        <li>
          <Link to="">Animal</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;