// Experiment 12(a): Conditional Rendering in ReactJS
// This program demonstrates conditional rendering in React.

import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h2>Experiment 12(a): Conditional Rendering</h2>
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in.</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
