// Experiment 1(e): User-defined Module and Modularization in Node.js
// This program demonstrates how to create and use a user-defined module in Node.js.
// The 'greet.js' module exports a function that is imported and used in this main file.

const greet = require('./greet');

greet('Full Stack Development');
