import React from "react";
import "./Nav.css";
function Nav({ setIsLoggedIn }) {
  function logoutUser() {
    setIsLoggedIn(false);
  }
  return (
    <div className="navcontainer">
      <div>
        <h1>Nav Component</h1>
      </div>
      <div>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
