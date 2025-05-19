import React from "react";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  function f1() {
    useState(); //invalid
  }

  return (
    <div className="home-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to Our Website</h1>
        <p className="welcome-description">
          We are glad to have you here. Explore our features and services to
          learn more.
        </p>
        <button className="explore-btn" onClick={f1}>
          Explore Now
        </button>
      </div>
      <div className="info-section">
        <h2>What We Do</h2>
        <div className="info-card">
          <h3>Innovative Solutions</h3>
          <p>
            We provide cutting-edge technology solutions to make your life
            easier.
          </p>
        </div>
        <div className="info-card">
          <h3>Customer Support</h3>
          <p>
            Our team is available 24/7 to assist you with any questions or
            issues.
          </p>
        </div>
        <div className="info-card">
          <h3>Global Reach</h3>
          <p>
            We serve customers worldwide with top-notch products and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
