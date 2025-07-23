// Experiment 15(a): To-Do List Application in ReactJS
// This program demonstrates a simple to-do list app using React state and events.

import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  }

  function removeTask(idx) {
    setTasks(tasks.filter((_, i) => i !== idx));
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, background: '#f5f5f5', borderRadius: 8 }}>
      <h2>Experiment 15(a): To-Do List (React)</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter a new task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx} style={{ margin: '8px 0', background: '#e3f2fd', padding: 8, borderRadius: 4, display: 'flex', justifyContent: 'space-between' }}>
            {task}
            <button onClick={() => removeTask(idx)} style={{ background: '#f44336', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
