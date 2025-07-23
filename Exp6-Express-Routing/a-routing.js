// Experiment 6(a): Express Routing, Route Parameters, Query Parameters, URL Building
// This program demonstrates defining routes, handling route and query parameters, and building URLs in Express.js.

const express = require('express');
const app = express();
const port = 3002;

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Express Routing!');
});

// Route with parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  const { q, page } = req.query;
  res.send(`Search Query: ${q}, Page: ${page}`);
});

// URL building example
app.get('/build-url', (req, res) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`Full URL: ${url}`);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
