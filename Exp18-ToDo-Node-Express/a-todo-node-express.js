// Experiment 18: To-Do List Application using NodeJS and ExpressJS
// This program demonstrates a simple to-do list backend using Node.js and Express.js.

const express = require('express');
const app = express();
const port = 3011;

app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (task) {
    todos.push(task);
    res.send('Todo added');
  } else {
    res.status(400).send('Task is required');
  }
});

// Delete a todo by index
app.delete('/todos/:index', (req, res) => {
  const idx = parseInt(req.params.index);
  if (idx >= 0 && idx < todos.length) {
    todos.splice(idx, 1);
    res.send('Todo deleted');
  } else {
    res.status(404).send('Todo not found');
  }
});

app.listen(port, () => {
  console.log(`To-Do app (Node+Express) listening at http://localhost:${port}`);
});
