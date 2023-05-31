const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');
const signup = require('./routes/sign-up.js');
const login = require('./routes/log-in.js');
const logout = require('./routes/log-out.js');
const entries = require('./routes/entries.js');

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

const server = express();

server.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

server.use(cookies);
//server.get("/", home.get);
//server.get("/sign-up", signup.get);
//server.post("/sign-up", body, signup.post);
//server.get("/log-in", login.get);
//server.post("/log-in", body, login.post);
//server.post("/log-out", logout.post);
server.get('/entries/:user_id', entries.get);
//server.post("/entries/:user_id", body, entries.post);

module.exports = server;
