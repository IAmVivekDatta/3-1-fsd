// Experiment 13(a): Routing to Different Pages using React Router
// This program demonstrates routing between pages using React Router.

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h3>Home Page</h3>;
}
function About() {
  return <h3>About Page</h3>;
}

function App() {
  return (
    <Router>
      <div>
        <h2>Experiment 13(a): React Router</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
