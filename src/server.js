const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');
const signup = require('./routes/sign-up.js');
const login = require('./routes/log-in.js');
const logout = require('./routes/log-out.js');
const entries = require('./routes/entries.js');
const { getSession } = require('./model/session.js');
require('dotenv').config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);
server.use(express.static('public'));

// check session from cookie
server.use((req, res, next) => {
  const sessionId = req.signedCookies && req.signedCookies.sid;
  const session = getSession(sessionId);

  if (session) {
    const expired = new Date() > new Date(session.expires_at) ;
    
    if (expired) {
      removeSession(sid);
      res.clearCookie('sid');
    } else {
      req.session = session;
    }
  }

  next();
});

server.use(cookies);
server.get('/', home.get);
server.get('/sign-up', signup.get);
server.post('/sign-up', bodyParser, signup.post);
server.get("/log-in", login.get);
server.post("/log-in", bodyParser, login.post);
//server.post("/log-out", logout.post);
server.get('/entries/:user_id', entries.get);
server.post('/entries/:user_id', bodyParser, entries.post);

module.exports = server;
