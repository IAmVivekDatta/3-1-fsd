// Experiment 1(d): Parse a URL using the URL module in Node.js
// This program demonstrates how to parse a URL and display its components.

const url = require('url');

const address = 'http://localhost:3000/default.htm?year=2025&month=July';
const parsedUrl = url.parse(address, true);

console.log('Host:', parsedUrl.host);
console.log('Pathname:', parsedUrl.pathname);
console.log('Search:', parsedUrl.search);
console.log('Query:', parsedUrl.query);
console.log('Year:', parsedUrl.query.year);
console.log('Month:', parsedUrl.query.month);
