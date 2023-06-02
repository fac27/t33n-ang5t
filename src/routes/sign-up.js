const bcrypt = require('bcryptjs');

const { signUpForm } = require('../templates/signup');
const { layout } = require('../templates/layout.js');
const { createUser } = require('../model/user');
const { createSession } = require('../model/session');
const { sanitise } = require('../model/sanitise.js');

const get = (req, res) => {
  const body = signUpForm('sign-up');
  const title = 'Sign in';
  res.send(layout(title, body));
};

const post = async (req, res) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, 12);
  const userId = createUser(sanitise(username), hash);

  if (!userId) {
    res.status(400).send('Username must be unique');
  } else {
    const sessionId = createSession(userId.id).id;
    res.cookie('sid', sessionId, {
      signed: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: 'lax',
    });

    res.redirect(`/entries/:${userId.id}`);
  }
};

module.exports = { get, post };
