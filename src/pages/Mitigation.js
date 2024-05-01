import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Mitigation.css";

const Mitigation = () => {
  const [showDetails, setShowDetails] = useState({
    segmentation: false,
    firewall: false,
    idsIps: false,
    vpns: false,
    nac: false,
    trafficInspection: false,
    encryption: false,
    patchManagement: false,
    monitoringLogging: false,
  });

  const toggleDetails = (key) => {
    setShowDetails({ ...showDetails, [key]: !showDetails[key] });
  };
  return (
    <div className="mitigation-container">
      <h1 className="mitigation-heading">
        Mitigation Strategies for Meltdown and Spectre
      </h1>
      <h3>Meltdown Mitigation</h3>
      <p className="mitigation-content">
        Mitigating Meltdown involves applying patches and updates to the
        operating system and processor firmware. Key mitigation strategies
        include:
      </p>
      <ul className="mitigation-list">
        <li className="mitigation-list-item">
          Applying Kernel Page Table Isolation (KPTI) patches for Linux
        </li>
        <li>Installing Windows patches for Meltdown</li>
        <li>Updating macOS to address Meltdown vulnerabilities</li>
      </ul>
      <h3>Spectre Mitigation</h3>
      <p>
        Spectre mitigation is more complex and involves a combination of
        software and hardware solutions. Some mitigation strategies include:
      </p>
      <ul>
        <li>Applying software patches to mitigate specific Spectre variants</li>
        <li>
          Implementing microcode updates provided by processor manufacturers
        </li>
        <li>Enabling compiler-based mitigations</li>
        <li>Using browser-based mitigations such as Site Isolation</li>
      </ul>
      <h3>Network Security Mitigation</h3>
      <p>
        If we talk about mitigation strategies specifically related to network
        security in the context of Meltdown and Spectre vulnerabilities, we can
        focus on measures to protect network infrastructure, data transmission,
        and communication channels.{" "}
      </p>
      <ul>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("segmentation")}
          >
            Segmentation
          </button>
          {showDetails.segmentation && (
            <div>
              Implement network segmentation to isolate critical infrastructure
              and sensitive data from potential threats. This can help contain
              the impact of any potential exploits.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("firewall")}
          >
            Firewall Configuration
          </button>
          {showDetails.firewall && (
            <div>
              Configure firewalls to restrict unauthorized access to network
              resources and prevent malicious traffic from exploiting
              vulnerabilities.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("idsIps")}
          >
            Intrusion Detection/Prevention Systems (IDS/IPS)
          </button>
          {showDetails.idsIps && (
            <div>
              Deploy IDS/IPS solutions to monitor network traffic for suspicious
              activity and block potential attacks targeting vulnerabilities.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("vpns")}
          >
            Virtual Private Networks (VPNs)
          </button>
          {showDetails.vpns && (
            <div>
              Encourage the use of VPNs to encrypt network traffic and protect
              data transmission between endpoints, especially in remote or
              untrusted environments.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("nac")}
          >
            Network Access Control (NAC)
          </button>
          {showDetails.nac && (
            <div>
              Implement NAC solutions to enforce security policies and control
              access to the network based on device health and user identity.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("trafficInspection")}
          >
            Traffic Inspection
          </button>
          {showDetails.trafficInspection && (
            <div>
              Perform regular traffic inspection and analysis to detect
              anomalous patterns or signs of potential exploitation of Meltdown
              and Spectre vulnerabilities.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("encryption")}
          >
            Encryption
          </button>
          {showDetails.encryption && (
            <div>
              Utilize encryption protocols (e.g., TLS/SSL) to secure data in
              transit and protect sensitive information from interception or
              tampering.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("patchManagement")}
          >
            Patch Management
          </button>
          {showDetails.patchManagement && (
            <div>
              Ensure timely deployment of security patches and updates for
              network devices, including routers, switches, and network
              appliances, to mitigate the risk of exploitation.
            </div>
          )}
        </li>
        <li>
          <button
            className="mitigation-button"
            onClick={() => toggleDetails("monitoringLogging")}
          >
            Network Monitoring and Logging
          </button>
          {showDetails.monitoringLogging && (
            <div>
              Implement robust network monitoring and logging mechanisms to
              track network activity, identify security incidents, and
              facilitate incident response and forensic analysis.
            </div>
          )}
        </li>
      </ul>
      <h3>Best Practices</h3>
      <p>
        In addition to applying patches and updates, here are some best
        practices to enhance security and mitigate the risks posed by Meltdown
        and Spectre vulnerabilities:
      </p>
      <ul>
        <li>Regularly update operating systems, firmware, and software</li>
        <li>Implement strong access controls and least privilege principles</li>
        <li>Monitor system activity for signs of exploitation</li>
        <li>
          Consider hardware-based mitigations such as CPU microcode updates
        </li>
        <li>
          Educate network administrators and users about the potential risks
          posed by Meltdown and Spectre vulnerabilities and promote awareness of
          security best practices.
        </li>
        <li>
          Conduct regular security audits and vulnerability assessments to
          identify and address weaknesses in the network infrastructure.
        </li>
        <li>
          Develop and maintain an incident response plan to effectively respond
          to security incidents related to Meltdown and Spectre vulnerabilities,
          including containment, mitigation, and recovery strategies.
        </li>
      </ul>
      <p>
        It's essential to stay informed about security advisories and follow
        recommended mitigation strategies to protect against the exploitation of
        Meltdown and Spectre vulnerabilities.
      </p>
      <Link to="/">
        <button className="mitigation-button">Back</button>
      </Link>
    </div>
  );
};

export default Mitigation;
