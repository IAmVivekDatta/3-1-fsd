// Experiment 6(b): Express HTTP Methods - Accept, Retrieve, Delete Resource
// This program demonstrates accepting, retrieving, and deleting resources using HTTP methods in Express.js.

const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

let items = ['item1', 'item2', 'item3'];

// Accept data (POST)
app.post('/items', (req, res) => {
  const { name } = req.body;
  items.push(name);
  res.send(`Item added: ${name}`);
});

// Retrieve data (GET)
app.get('/items', (req, res) => {
  res.json(items);
});

// Delete a specified resource (DELETE)
app.delete('/items/:name', (req, res) => {
  const { name } = req.params;
  items = items.filter(item => item !== name);
  res.send(`Item deleted: ${name}`);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
