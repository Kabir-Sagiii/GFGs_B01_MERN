import React, { useState, useRef } from "react";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../../service/usersService";

const SignUp = () => {
  const navigate = useNavigate();
  let usernameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let maleRef = useRef(null);
  let femaleRef = useRef(null);
  let otherRef = useRef(null);

  const getUserData = () => {
    var gender;
    if (maleRef.current.checked) {
      gender = "male";
    } else if (femaleRef.current.checked) {
      gender = "female";
    } else {
      gender = "other";
    }
    var user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      gender: gender,
    };

    createUser(user)
      .then((res) => {
        if (res.data.ok) {
          navigate("/");
        } else {
          throw Error("Failed to create User");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2 className="signup-title">Sign Up</h2>

        <div className="input-group">
          <input
            type="text"
            name="username"
            required
            ref={usernameRef}
            className="input-field"
          />
          <label className="input-label">Username</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            ref={emailRef}
            className="input-field"
          />
          <label className="input-label">Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            required
            ref={passwordRef}
            className="input-field"
          />
          <label className="input-label">Password</label>
        </div>

        <div className="gender-group">
          <label className="gender-label">Gender</label>
          <div className="gender-options">
            <label>Male</label>
            <input type="radio" ref={maleRef} name="gender" value="male" />
            <label>Female</label>
            <input type="radio" ref={femaleRef} name="gender" value="female" />
            <label>Other</label>
            <input type="radio" ref={otherRef} name="gender" value="other" />
          </div>
        </div>

        <button type="button" className="submit-button" onClick={getUserData}>
          Create Account
        </button>
        <div className="forgot-password">
          <Link to="/">Have a Account?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
