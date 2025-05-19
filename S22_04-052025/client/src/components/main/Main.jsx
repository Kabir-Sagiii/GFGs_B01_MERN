import React from "react";
import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
function Main({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</div>
  );
}

export default Main;
