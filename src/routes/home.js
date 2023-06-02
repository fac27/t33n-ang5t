const { layout } = require('../templates/layout');
const { home } = require('../templates/home');

module.exports = { get };

function get(req, res) {
  const title = 'Welcome';
  const content = home();
  if (req?.session) return res.redirect(`/entries/${req.session.user_id}`);
  return res.send(layout(title, content));
}
