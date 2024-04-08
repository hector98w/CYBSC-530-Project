import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/intro">Intro</Link>
      </div>
      <div>
        <Link to="/implication">Implication</Link>
      </div>
      <div>
        <Link to="/mitigation">Mitigation</Link>
      </div>
      <div>
        <Link to="/quiz">Quiz</Link>
      </div>
    </div>
  );
};

export default Home;
