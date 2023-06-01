const { getEntries, createEntry } = require('../model/entries.js');
const { layout } = require('../templates/layout.js');
const { entriesPage } = require('../templates/user-page.js');

module.exports = { get, post };

function get(req, res) {
  const entries = getEntries();
  const user_id = req.session.user_id; //fix when authentication is there
  const user_name = getUser(user_id).username;
  const body = entriesPage(entries, user_id, user_name);
  const title = 'Entries'
  res.send(layout(title, body));
}

function post(req, res) {
  const { entry } = req.body;
  const user_id = req.session.user_id;
  createEntry(entry, user_id); // fix when authentication is there;
  res.redirect(`/entries/${user_id}`);
}
