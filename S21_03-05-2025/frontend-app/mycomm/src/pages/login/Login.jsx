import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { loginUser } from "../../service/usersService";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const CheckUser = () => {
    loginUser(user)
      .then((res) => {
        if (res.data.ok) {
          login();
        } else {
          throw Error("Invalid User");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form>
          <div className="input-group">
            <label htmlFor="username">Email Id</label>
            <input
              type="text"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              value={user.email}
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              value={user.password}
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button type="button" onClick={CheckUser} className="login-btn">
            Login
          </button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="forgot-password">
          <Link to="/signup">Create a Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
