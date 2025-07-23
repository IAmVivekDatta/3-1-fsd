// Experiment 11(a): Working with Props and States in ReactJS
// This program demonstrates passing props and using state in a React component.

import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Experiment 11(a): Props and States</h2>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
