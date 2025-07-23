// Experiment 1(c): Create a text file src.txt and add specified content
// Aim: To create a text file named src.txt and write the following content using Node.js:
// HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js
// Question: Write a Node.js program to create a text file src.txt and add the given content to it.

const fs = require('fs');
const path = require('path');

const content = 'HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js';
const filePath = path.join(__dirname, 'src.txt');

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to src.txt:', err);
  } else {
    console.log('src.txt created and content written successfully.');
  }
});
