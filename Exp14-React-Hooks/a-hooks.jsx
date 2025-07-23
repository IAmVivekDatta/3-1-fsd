// Experiment 14(a): Importance of Using Hooks in ReactJS
// This program demonstrates the use of the useState and useEffect hooks in React.

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <h2>Experiment 14(a): Using Hooks</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>(Check the browser tab title!)</p>
    </div>
  );
}

export default App;
