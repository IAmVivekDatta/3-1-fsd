// Experiment 10(c): Creating and Nesting Components (Function and Class) in ReactJS
// This program demonstrates how to create and nest both function and class components in React.

import React from 'react';

// Function component
function Welcome(props) {
  return <h3>Welcome, {props.name}!</h3>;
}

// Class component
class Info extends React.Component {
  render() {
    return <p>This is a class component in React.</p>;
  }
}

function App() {
  return (
    <div>
      <h2>Experiment 10(c): Components in React</h2>
      <Welcome name="React Learner" />
      <Info />
    </div>
  );
}

export default App;
