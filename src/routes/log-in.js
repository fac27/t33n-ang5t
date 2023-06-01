const { layout } = require('../templates/layout.js');
const { signUpForm } = require('../templates/signup.js');
const { createSession } = require('../model/session.js');
const { getUser } = require('../model/user.js');
const bcrypt = require('bcryptjs');

module.exports = { get, post };

function get(req, res) {
  const title = 'Log In';
  const body = signUpForm('log-in');
  res.send(layout(title, body));
}

function post(req, res) {
  const { username, password } = req.body;
  const user = getUser(username);
  console.log(user)
  bcrypt.compare(password, user.hash).then((match) => {
    if (match) {
      createSession(user.user_id); // store this into sid for authentication
      res.redirect(`/entries/${user.user_id}`);
    } else {
      res.status(400).send('<h1> :( </h1>');
    }
  });
}
