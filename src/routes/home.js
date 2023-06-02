const { layout } = require('../templates/layout');
const { home } = require('../templates/home');

const get = (req, res) => {
  const title = 'Welcome';
  const content = home();
  if (req?.session) {
    res.redirect(`/entries/${req.session.user_id}`);
  } else {
    res.send(layout(title, content));
  }
};

module.exports = { get };
