// Experiment 1(a): Node.js Web Server Example
// This program demonstrates the workflow of JavaScript code by creating a simple web server in Node.js.
// When you run this file, it will start a server that responds with a message for every request.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is a simple Node.js web server!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
