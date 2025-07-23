// Experiment 13(b): Updating the Screen in ReactJS
// This program demonstrates updating the screen by changing state in React.

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Experiment 13(b): Updating the Screen</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
