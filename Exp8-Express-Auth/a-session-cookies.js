// Experiment 8(a): Session Management using Cookies and Sessions in Express.js
// This program demonstrates how to use cookies and sessions for session management in Express.js.

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3007;

app.use(cookieParser());
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Welcome back! You have visited ${req.session.views} times.`);
  } else {
    req.session.views = 1;
    res.send('Welcome! This is your first visit.');
  }
});

app.listen(port, () => {
  console.log(`Express app with session management listening at http://localhost:${port}`);
});
