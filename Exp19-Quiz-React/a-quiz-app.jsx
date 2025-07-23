// Experiment 19: Quiz App using ReactJS
// This program demonstrates a simple quiz application in ReactJS.

import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 2
  },
  {
    question: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 3
  },
  {
    question: 'What does CSS stand for?',
    options: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
    answer: 1
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleAnswer(idx) {
    if (idx === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowScore(true);
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, background: '#f5f5f5', borderRadius: 8 }}>
      <h2>Experiment 19: Quiz App (React)</h2>
      {showScore ? (
        <div>Your score: {score} / {questions.length}</div>
      ) : (
        <div>
          <div>{questions[current].question}</div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {questions[current].options.map((opt, idx) => (
              <li key={idx} style={{ margin: '8px 0' }}>
                <button onClick={() => handleAnswer(idx)}>{opt}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
