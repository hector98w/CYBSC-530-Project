import React from "react";
import { Link } from "react-router-dom";
import "../css/Meltdown.css";

const Meltdown = () => {
  return (
    <div className="meltdown-container">
      <h1 className="meltdown-heading">Meltdown</h1>
      <p className="meltdown-content">
        Meltdown breaks the most fundamental isolation between user applications
        and the operating system. This attack allows a program to access the
        memory, and thus also the secrets, of other programs and the operating
        system. If your computer has a vulnerable processor and runs an
        unpatched operating system, it is not safe to work with sensitive
        information without the chance of leaking the information. This applies
        both to personal computers as well as cloud infrastructure. Luckily,
        there are software patches against Meltdown.
      </p>
      <h3 className="meltdown-answer">Who reported Meltdown?</h3>
      <p className="meltdown-content">
        Meltdown was independently discovered and reported by the following:
      </p>
      <ul className="meltdown-list">
        <li className="meltdown-list-item">Jann Horn (Google Project Zero)</li>
        <li className="meltdown-list-item">
          Paul Kocher in collaboration with, in alphabetical order, Daniel
          Genkin (University of Pennsylvania and University of Maryland)
        </li>
        <li className="meltdown-list-item">Mike Hamburg (Rambus)</li>
        <li className="meltdown-list-item">
          Moritz Lipp (Graz University of Technology), and Yuval Yarom
          (University of Adelaide and Data61)
        </li>
      </ul>
      <Link to="/intro">
        <button className="meltdown-button">Back</button>
      </Link>
    </div>
  );
};

export default Meltdown;
