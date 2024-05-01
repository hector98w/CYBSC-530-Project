import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Quiz.css";

const Quiz = () => {
  const [questions] = useState([
    {
      question:
        "Can Meltdown and Spectre vulnerabilities potentially lead to unauthorized access to sensitive network-related data?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      explanation:
        "Meltdown and Spectre vulnerabilities can potentially allow attackers to access sensitive information stored in memory, including network-related data such as usernames, passwords, encryption keys, and confidential communication contents. This could lead to data breaches and unauthorized access to network resources.",
    },
    {
      question:
        "Are cloud computing environments vulnerable to exploitation of Meltdown and Spectre vulnerabilities?",
      options: ["Yes", "No"],
      correctAnswer: "No",
      explanation:
        "In cloud computing environments, where multiple virtual machines share the same physical hardware, Meltdown and Spectre vulnerabilities pose a severe risk. Attackers could exploit these vulnerabilities to access data belonging to other tenants or the underlying hypervisor, compromising the confidentiality and integrity of network communications and data stored in the cloud.",
    },
    {
      question:
        " Is patch management crucial for mitigating the risk posed by Meltdown and Spectre vulnerabilities?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      explanation:
        "Keeping network infrastructure and devices up-to-date with security patches is crucial to mitigating the risk posed by Meltdown and Spectre vulnerabilities. However, applying patches to network devices, especially those with specialized firmware or limited update capabilities, can be challenging and may require careful planning and coordination to minimize disruption to network operations.",
    },
    {
      question:
        "Can network security appliances be compromised due to Meltdown and Spectre vulnerabilities?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      explanation:
        "Meltdown and Spectre vulnerabilities affect not only general-purpose processors but also specialized network security appliances and devices. If these devices are compromised, it could lead to unauthorized access to network traffic, compromise of firewall rules, intrusion detection/prevention system bypass, or other security breaches.",
    },
    {
      question:
        "Does Meltdown break the mechanism that keeps applications from accessing arbitrary system memory?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      explanation:
        "Meltdown breaks the mechanism that keeps applications from accessing arbitrary system memory. Consequently, applications can access system memory, potentially leading to data leakage and unauthorized access to sensitive information.",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetryButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-heading">
        Quiz: Test Your Knowledge about Meltdown and Spectre
      </h1>
      {showScore ? (
        <div>
          <h3 className="quiz-score">
            Your Score: {score} / {questions.length}
          </h3>
          <button className="quiz-button" onClick={handleRetryButtonClick}>
            Retry
          </button>
          <Link to="/">
            <button className="quiz-button">Home</button>
          </Link>
        </div>
      ) : (
        <div>
          <h3 className="quiz-question">
            {questions[currentQuestion].question}
          </h3>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option"
                onClick={() => handleAnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="quiz-explanation">
            {questions[currentQuestion].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
