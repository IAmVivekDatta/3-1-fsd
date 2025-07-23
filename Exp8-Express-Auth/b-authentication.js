// Experiment 8(b): User Authentication in Express.js
// This program demonstrates a simple user authentication system using sessions in Express.js.

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3008;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'authSecret',
  resave: false,
  saveUninitialized: true
}));

const USER = { username: 'admin', password: 'password' };

app.get('/', (req, res) => {
  if (req.session.user) {
    res.send(`Hello, ${req.session.user}. <a href="/logout">Logout</a>`);
  } else {
    res.send(`<form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>`);
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    res.redirect('/');
  } else {
    res.send('Invalid credentials. <a href="/">Try again</a>');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Express app with authentication listening at http://localhost:${port}`);
});
