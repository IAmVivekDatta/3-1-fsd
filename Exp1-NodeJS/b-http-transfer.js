// Experiment 1(b): Transfer Data over HTTP using Node.js
// This program demonstrates sending data from a Node.js server to a client over HTTP.
// The server responds with a JSON object containing a message and the current date/time.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const data = {
    message: 'Data transferred over HTTP!',
    date: new Date().toISOString()
  };
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
