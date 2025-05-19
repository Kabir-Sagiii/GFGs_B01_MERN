import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
function Nav({ logout }) {
  const navigate = useNavigate();
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
        <Link to="/cart">Cart</Link>
        {/* <Link to="/contactus">ContactUs</Link> */}
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
