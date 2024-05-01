import React from "react";
import { Link } from "react-router-dom";
import "../css/Spectre.css";

const Spectre = () => {
  return (
    <div className="spectre-container">
      <h1 className="spectre-heading">Spectre</h1>
      <p className="spectre-content">
        Spectre breaks the isolation between different applications. It allows
        an attacker to trick error-free programs, which follow best practices,
        into leaking their secrets. In fact, the safety checks of said best
        practices actually increase the attack surface and may make applications
        more susceptible to Spectre. Spectre is harder to exploit than Meltdown,
        but it is also harder to mitigate. However, it is possible to prevent
        specific known exploits based on Spectre through software patches.
      </p>
      <h3 className="spectre-answer">Who reported Spectre?</h3>
      <p className="spectre-content">
        Spectre was independently discovered and reported by the following
        teams:
      </p>
      <ul className="spectre-list">
        <li className="spectre-list-item">Jann Horn (Google Project Zero)</li>
        <li className="spectre-list-item">
          Werner Haas, Thomas Prescher (Cyberus Technology)
        </li>
        <li className="spectre-list-item">
          Daniel Gruss, Moritz Lipp, Stefan Mangard, Michael Schwarz (Graz
          University of Technology)
        </li>
      </ul>
      <Link to="/intro">
        <button className="spectre-button">Back</button>
      </Link>
    </div>
  );
};

export default Spectre;
