// Experiment 9(b): Single Page Application using RESTful APIs in Express.js
// This program demonstrates a simple SPA backend using RESTful APIs in Express.js.

const express = require('express');
const app = express();
const port = 3010;

app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build REST API' }
];

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);
  res.json(newTodo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.task = req.body.task;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.send('Todo deleted');
});

app.listen(port, () => {
  console.log(`RESTful SPA backend listening at http://localhost:${port}`);
});
