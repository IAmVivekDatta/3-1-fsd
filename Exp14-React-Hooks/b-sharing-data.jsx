// Experiment 14(b): Sharing Data Between Components in ReactJS
// This program demonstrates sharing data between parent and child components using props and state.

import React, { useState } from 'react';

function Child({ value, onIncrement }) {
  return (
    <div>
      <p>Child Value: {value}</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Experiment 14(b): Sharing Data Between Components</h2>
      <p>Parent Value: {count}</p>
      <Child value={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
