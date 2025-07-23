// Experiment 11(b): Adding Styles and Displaying Data in ReactJS
// This program demonstrates adding CSS styles and displaying data in React.

import React from 'react';

const styles = {
  color: '#fff',
  backgroundColor: '#2196f3',
  padding: '10px',
  borderRadius: '8px',
  textAlign: 'center'
};

function App() {
  const data = ['React', 'Node.js', 'Express', 'MongoDB'];
  return (
    <div style={styles}>
      <h2>Experiment 11(b): Styles and Data Display</h2>
      <ul>
        {data.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
