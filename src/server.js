const express = require('express');
const cookieParser = require('cookie-parser');
const home = require('./routes/home.js');
const signUp = require('./routes/sign-up.js');
const signIn = require('./routes/sign-in.js');
const signOut = require('./routes/sign-out.js');
const entries = require('./routes/entries.js');
const removeEntry = require('./routes/remove-entry.js')
const { getSession } = require('./model/session.js');

require('dotenv').config();

const server = express();

const bodyParser = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(express.static('public'));

server.use(cookies);
// check session from cookie
server.use((req, res, next) => {
  if (!req.signedCookies?.sid) return next();
  const session = getSession(req.signedCookies.sid);
  const isExpired = new Date() > new Date(session.expires_at) ;
    
  if (isExpired) {
    removeSession(sid);
    res.clearCookie('sid');
  } else {
    req.session = session;
  }
    
  next();
});

server.get('/', home.get);
server.get('/sign-up', signUp.get);
server.post('/sign-up', bodyParser, signUp.post);
server.get("/sign-in", signIn.get);
server.post("/sign-in", bodyParser, signIn.post);
//server.post("/sign-out", signOut.post);
server.get('/entries/:user_id', entries.get);
server.post('/entries/:user_id', bodyParser, entries.post);
server.post('/entries/delete/:entry_id', entries.removeEntry);

module.exports = server;
