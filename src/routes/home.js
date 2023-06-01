const { layout } = require('../templates/layout');
const { home } = require('../templates/home');

const get = (req, res) => {
  const title = 'Welcome';
  const content = home();

  res.send(layout(title, content));
};

module.exports = { get };
