import React from "react";
import { Link } from "react-router-dom";

const Heder = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>logo</h1>
          <div className="header-nav">
            <Link style={{ color: "black" }} to="/">
              About
            </Link>
            <Link to="/">About</Link>
            <Link to="/hello">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/pro">Product</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heder;
<h4>hello world my name </h4>;
