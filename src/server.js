require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');
const signUp = require('./routes/sign-up.js');
const signIn = require('./routes/sign-in.js');
const signOut = require('./routes/sign-out.js');
const entries = require('./routes/entries.js');
const { getSession, deleteSession } = require('./model/session.js');

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static('public'));

server.use(cookies);
server.use((req, res, next) => {
  const sessionId = req.signedCookies && req.signedCookies.sid;
  const session = getSession(sessionId);

  if (session) {
    const isExpired = new Date() > new Date(session.expires_at);

    if (isExpired) {
      deleteSession(sessionId);
      res.clearCookie('sid');
    } else {
      req.session = session;
    }
  }

  next();
});

server.get('/', home.get);
server.get('/sign-up', signUp.get);
server.post('/sign-up', bodyParser, signUp.post);
server.get('/sign-in', signIn.get);
server.post('/sign-in', bodyParser, signIn.post);
server.post('/sign-out', signOut.post);
server.get('/entries/:user_id', entries.get);
server.post('/entries/:user_id', bodyParser, entries.post);
server.post('/entries/delete/:entry_id', entries.remove);

module.exports = server;
