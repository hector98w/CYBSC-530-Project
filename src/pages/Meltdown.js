import React from "react";
import { Link } from "react-router-dom";

const Meltdown = () => {
  return (
    <div>
      <h1>Meltdown</h1>
      <p1>
        Meltdown breaks the most fundamental isolation between user applications
        and the operating system. This attack allows a program to access the
        memory, and thus also the secrets, of other programs and the operating
        system. If your computer has a vulnerable processor and runs an
        unpatched operating system, it is not safe to work with sensitive
        information without the chance of leaking the information. This applies
        both to personal computers as well as cloud infrastructure. Luckily,
        there are software patches against Meltdown.
      </p1>
      <h3>Who reported Meltdown?</h3>
      <p2>
        Spectre was independently discovered and reported by two people:
        <ul>
          <li>Jann Horn (Google Project Zero)</li>
          <li>
            Paul Kocher in collaboration with, in alphabetical order, Daniel
            Genkin (University of Pennsylvania and University of Maryland)
          </li>
          <li>Mike Hamburg (Rambus)</li>
          <li>
            Moritz Lipp (Graz University of Technology), and Yuval Yarom
            (University of Adelaide and Data61)
          </li>
        </ul>
      </p2>
      <Link to="/intro">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Meltdown;
