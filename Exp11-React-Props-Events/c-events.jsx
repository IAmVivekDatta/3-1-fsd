// Experiment 11(c): Responding to Events in ReactJS
// This program demonstrates handling events (like button clicks) in React.

import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Click the button!');
  function handleClick() {
    setMessage('Button was clicked!');
  }
  return (
    <div>
      <h2>Experiment 11(c): Event Handling</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
