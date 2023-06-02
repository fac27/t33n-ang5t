const bcrypt = require('bcryptjs');

const { layout } = require('../templates/layout.js');
const { signUpForm } = require('../templates/signup.js');
const { createSession } = require('../model/session.js');
const { getUserByName } = require('../model/user.js');
const { sanitise } = require('../model/sanitise.js');

module.exports = { get, post };

function get(req, res) {
  const title = 'Sign In';
  const body = signUpForm('sign-in');
  res.send(layout(title, body));
}

function post(req, res) {
  const { username, password } = req.body;
  const user = getUserByName(sanitise(username));

  bcrypt.compare(password, user.hash).then((match) => {
    if (match) {
      const user_id = user.id;
      const sid = createSession(user_id).id;
      res.cookie('sid', sid, {
        signed: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'lax',
      }); // store this into sid for authentication
      res.redirect(`/entries/${user_id}`);
    } else {
      res.status(400).send(`
          <script>
            alert("something went wrong"); 
            window.location.href = "/";
          </script>`);
    }
  });
}
