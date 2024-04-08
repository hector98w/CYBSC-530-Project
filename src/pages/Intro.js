import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <h1>Intro</h1>
      <p1>
        Meltdown and Spectre exploit critical vulnerabilities in modern
        processors. These hardware vulnerabilities allow programs to steal data
        which is currently processed on the computer. While programs are
        typically not permitted to read data from other programs, a malicious
        program can exploit Meltdown and Spectre to get hold of secrets stored
        in the memory of other running programs. This might include your
        passwords stored in a password manager or browser, your personal photos,
        emails, instant messages and even business-critical documents. Meltdown
        and Spectre work on personal computers, mobile devices, and in the
        cloud. Depending on the cloud provider's infrastructure, it might be
        possible to steal data from other customers.
      </p1>
      <div>
        <Link to="/meltdown">Meltdown</Link>
      </div>
      <div>
        <Link to="/spectre">Spectre</Link>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Intro;
