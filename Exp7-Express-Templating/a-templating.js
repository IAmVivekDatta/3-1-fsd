// Experiment 7(a): Express Templating Engine Example
// This program demonstrates using a templating engine (EJS) in Express.js.

const express = require('express');
const app = express();
const port = 3005;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express Templating', message: 'Hello from EJS Template!' });
});

app.listen(port, () => {
  console.log(`Express app with EJS templating listening at http://localhost:${port}`);
});

// Note: You need to create a 'views' folder with an 'index.ejs' file for this to work.
