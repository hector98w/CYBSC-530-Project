import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="link-container">
        <Link className="home-link" to="/intro">
          Introduction
        </Link>
        <Link className="home-link" to="/implication">
          Implication
        </Link>
        <Link className="home-link" to="/mitigation">
          Mitigation
        </Link>
        <Link className="home-link" to="/quiz">
          Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
