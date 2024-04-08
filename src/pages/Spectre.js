import React from "react";
import { Link } from "react-router-dom";

const Spectre = () => {
  return (
    <div>
      <h1>Spectre</h1>
      <p1>
        Spectre breaks the isolation between different applications. It allows
        an attacker to trick error-free programs, which follow best practices,
        into leaking their secrets. In fact, the safety checks of said best
        practices actually increase the attack surface and may make applications
        more susceptible to Spectre Spectre is harder to exploit than Meltdown,
        but it is also harder to mitigate. However, it is possible to prevent
        specific known exploits based on Spectre through software patches.
      </p1>
      <h3>Who reported Spectre?</h3>
      <p2>
        Meltdown was independently discovered and reported by three teams:
        <ul>
          <li>Jann Horn (Google Project Zero)</li>
          <li>Werner Haas, Thomas Prescher (Cyberus Technology)</li>
          <li>
            Daniel Gruss, Moritz Lipp, Stefan Mangard, Michael Schwarz (Graz
            University of Technology)
          </li>
        </ul>
      </p2>
      <Link to="/intro">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Spectre;
