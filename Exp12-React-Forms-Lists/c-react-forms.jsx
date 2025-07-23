// Experiment 12(c): Working with Different Form Fields using React Forms
// This program demonstrates handling various form fields in React.

import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', agree: false });
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(form)}`);
  }
  return (
    <div>
      <h2>Experiment 12(c): React Forms</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input name="name" value={form.name} onChange={handleChange} /></label><br />
        <label>Email: <input name="email" value={form.email} onChange={handleChange} type="email" /></label><br />
        <label><input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} /> I agree</label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
