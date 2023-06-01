const { signUpForm } = require('../templates/signup');
const { createUser } = require('../model/user');
const { createSession } = require('../model/session');

const bcrypt = require('bcryptjs');

const get = (req, res) => {
  res.send(signUpForm('sign-up'));
};

const post = async (req, res) => {
  const { username, password } = req.body;

  // when a unique constraint fails by the db, the error is not handled well

  if (!username || !password) {
    res.status(400).send('Bad Input');
  } else {
    const hash = await bcrypt.hash(password, 12);
    const userId = createUser(username, hash).id;
    const sessionId = createSession(userId);

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
