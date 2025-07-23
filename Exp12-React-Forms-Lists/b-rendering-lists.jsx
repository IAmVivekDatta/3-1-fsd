// Experiment 12(b): Rendering Lists in ReactJS
// This program demonstrates rendering a list of items in React.

import React from 'react';

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <div>
      <h2>Experiment 12(b): Rendering Lists</h2>
      <ul>
        {fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
      </ul>
    </div>
  );
}

export default App;
