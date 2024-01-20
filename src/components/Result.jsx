import React from "react";
import questions from '../questions';// Importing question data

// Result component to display quiz results
export default function Result({ score, questionsLength, onRestartQuiz }) {
  const totalQuestions = questionsLength || questions.length;
   // Calculate percentage score 
  const percentScore = ((score / totalQuestions) * 100);

  const handleRestartQuiz = () => {
    if (onRestartQuiz) {
      onRestartQuiz(); // Call the onRestartQuiz function if it's provided
    }
  };
  return (
    <div className="result">
      <h1 className="title" style={{ textAlign: "center" }}>Quiz Result</h1>
      <h2 className="score">{score} / {totalQuestions} Correct</h2>
      <p className="percent">Accuracy: {percentScore}%</p>
      <button className="restart" onClick={handleRestartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};
