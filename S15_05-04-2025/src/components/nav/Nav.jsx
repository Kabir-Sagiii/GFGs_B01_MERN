import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navcontainer">
      <div>
        <h1>Nav Component</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
        <Link to="/contactus">ContactUs</Link>
      </div>
    </div>
  );
}

export default Nav;
