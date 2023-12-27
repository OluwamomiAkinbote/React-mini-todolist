import React, { useState } from "react";
import "./QuizApp.css";

function QuizApp() {
  const questionsData = [
    {
      question: "What is the unit of force?",
      options: ["Length", "Mass", "Newton", "Seconds"],
      correctAnswer: "Newton",
    },
    {
      question: "Which of the following is not a programming language?",
      options: ["Hausa", "Python", "C++", "Java"],
      correctAnswer: "Hausa",
    },
    {
      question: "The father of Artificial Intelligence is?",
      options: ["John McCarthy", "Albert Einstein", "Neil Bohr", "Sommerfield"],
      correctAnswer: "John McCarthy",
    },
    {
      question: "Which of the following is an array method in JavaScript?",
      options: ["toUppercase()", "toFixed()", "map()", "includes()"],
      correctAnswer: "map()",
    },
    {
      question: "What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Calabar", "Yola"],
      correctAnswer: "Abuja",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
  };

  const handleNextQuestion = () => {
    // Check if the user's answer is correct and update the score
    if (userAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
  };

  const handlePreviousQuestion = () => {
    // Move to the previous question, if not on the first question
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setUserAnswer("");
    }
  };

  const handleResetQuiz = () => {
    // Reset the quiz to the first question
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questionsData.length ? (
        <div className="question-container">
          <h2>{questionsData[currentQuestion].question}</h2>
          <ul className="options-list">
            {questionsData[currentQuestion].options.map((option, index) => (
              <li key={index} className="option-item">
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={userAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="nav-button"
            >
              Previous Question
            </button>
            <button onClick={handleNextQuestion} className="nav-button">
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2>
            Quiz completed! Your Score: {score}/{questionsData.length}
          </h2>
          <button onClick={handleResetQuiz} className="reset-button">
            Reset Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
