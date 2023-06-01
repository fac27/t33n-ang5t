const bcrypt = require('bcryptjs');

const { signUpForm } = require('../templates/signup');
const { createUser } = require('../model/user');
const { createSession } = require('../model/session');
const { sanitise } = require('../model/sanitise.js');

const get = (req, res) => {
  res.send(signUpForm('sign-up'));
};

const post = async (req, res) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, 12);
  const userId = createUser(sanitise(username), hash);

  if (!userId) {
    res.status(400).send('Username must be unique');
  } else {
    const sessionId = createSession(userId.id);

    res.cookie('sid', sessionId, {
      signed: true,
      httpOnly: true,
      maxAge: 604800,
      sameSite: 'lax',
    });

    res.redirect(`/entries/:${userId}`);
  }
};

module.exports = { get, post };
