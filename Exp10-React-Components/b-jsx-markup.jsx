// Experiment 10(b): Writing Markup with JSX in ReactJS
// This program demonstrates writing markup using JSX syntax in React.

import React from 'react';

function MarkupDemo() {
  const name = 'React Student';
  return (
    <div>
      <h2>Experiment 10(b): JSX Markup</h2>
      <p>Hello, {name}! This is JSX in action.</p>
    </div>
  );
}

export default MarkupDemo;
