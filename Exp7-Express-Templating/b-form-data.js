// Experiment 7(b): Express Form Data Handling Example
// This program demonstrates how to handle form data in Express.js using body-parser (built-in in Express 4.16+).

const express = require('express');
const app = express();
const port = 3006;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label>Name: <input type="text" name="name" /></label><br>
      <label>Email: <input type="email" name="email" /></label><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received: Name = ${name}, Email = ${email}`);
});

app.listen(port, () => {
  console.log(`Express app for form data listening at http://localhost:${port}`);
});
