import React, { useState } from "react";
import { Link } from "react-router-dom";

const Implication = () => {
  const [selectedImplication, setSelectedImplication] = useState(null);
  const handleClick = (implication) => {
    setSelectedImplication(implication);
  };
  return (
    <div>
      <h1>Implication On Network</h1>
      <div>
        {/* Render clickable elements for each case */}
        <button onClick={() => handleClick("Data Leakage")}>
          Data Leakage
        </button>
        <button onClick={() => handleClick("Cloud Environments")}>
          Cloud Environments
        </button>
        <button onClick={() => handleClick("Shared Hosting Environments")}>
          Shared Hosting Environments
        </button>
        <button onClick={() => handleClick("Network Security Appliances")}>
          Network Security Appliances
        </button>
        <button onClick={() => handleClick("Cryptographic Keys")}>
          Cryptographic Keys
        </button>
        <button onClick={() => handleClick("Performance Impact")}>
          Performance Impact
        </button>
        <button onClick={() => handleClick("Patch Management")}>
          Patch Management
        </button>
      </div>
      <div>
        {selectedImplication && (
          <div>
            <h3>{selectedImplication}</h3>

            {selectedImplication === "Data Leakage" && (
              <p>
                Meltdown and Spectre vulnerabilities can potentially allow
                attackers to access sensitive information stored in memory,
                including network-related data such as usernames, passwords,
                encryption keys, and confidential communication contents. This
                could lead to data breaches and unauthorized access to network
                resources.
              </p>
            )}
            {selectedImplication === "Cloud Environments" && (
              <p>
                In cloud computing environments, where multiple virtual machines
                share the same physical hardware, these vulnerabilities pose a
                severe risk. An attacker could exploit Meltdown or Spectre to
                access data belonging to other tenants or the underlying
                hypervisor, compromising the confidentiality and integrity of
                network communications and data stored in the cloud.
              </p>
            )}
            {selectedImplication === "Shared Hosting Environments" && (
              <p>
                Similar to cloud environments, shared hosting platforms, such as
                web hosting services, are vulnerable to attacks leveraging
                Meltdown and Spectre. Attackers could potentially access
                sensitive data of other users hosted on the same server,
                including network-related data such as website credentials or
                database contents.
              </p>
            )}
            {selectedImplication === "Network Security Appliances" && (
              <p>
                Meltdown and Spectre vulnerabilities affect not only
                general-purpose processors but also specialized network security
                appliances and devices. If these devices are compromised, it
                could lead to unauthorized access to network traffic, compromise
                of firewall rules, intrusion detection/prevention system bypass,
                or other security breaches.
              </p>
            )}
            {selectedImplication === "Performance Impact" && (
              <p>
                Mitigations implemented to address Meltdown and Spectre
                vulnerabilities often involve software patches or hardware
                changes that can impact the performance of network-related
                tasks. This could lead to decreased network throughput,
                increased latency, or additional computational overhead,
                affecting the overall network performance and responsiveness.
              </p>
            )}
            {selectedImplication === "Patch Management" && (
              <p>
                Keeping network infrastructure and devices up-to-date with
                security patches is crucial to mitigating the risk posed by
                Meltdown and Spectre vulnerabilities. However, applying patches
                to network devices, especially those with specialized firmware
                or limited update capabilities, can be challenging and may
                require careful planning and coordination to minimize disruption
                to network operations.
              </p>
            )}
            {selectedImplication === "Cryptographic Keys" && (
              <p>
                Network security heavily relies on cryptographic protocols for
                secure communication (e.g., TLS/SSL). Meltdown and Spectre
                vulnerabilities can potentially leak cryptographic keys used for
                securing network traffic, compromising the confidentiality and
                integrity of communications. This could lead to
                man-in-the-middle attacks, data tampering, or eavesdropping on
                sensitive communications.
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Implication;
