// Experiment 6(c): Express Middleware Example
// This program demonstrates the use of middleware in Express.js.

const express = require('express');
const app = express();
const port = 3004;

// Custom middleware function
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // Pass control to the next handler
}

// Use the middleware
app.use(logger);

app.get('/', (req, res) => {
  res.send('Middleware example: Check your console for logs!');
});

app.listen(port, () => {
  console.log(`Express app with middleware listening at http://localhost:${port}`);
});
