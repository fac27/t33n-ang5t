const { getEntries, createEntry, deleteEntry } = require('../model/entries.js');
const { getUser } = require('../model/user.js');
const { layout } = require('../templates/layout.js');
const { entriesPage } = require('../templates/user-page.js');

module.exports = { get, post, remove };

function get(req, res) {
  const entries = getEntries();
  if (!req?.session) return res.status(301).send('unauthorized');
  const user_id = req.session.user_id;
  const user_name = getUser(user_id).username;
  const body = entriesPage(entries, user_id, user_name);
  const title = 'Entries';
  res.send(layout(title, body));
}

function post(req, res) {
  const { entry } = req.body;
  const user_id = req.session.user_id;
  createEntry(entry, user_id);
  res.redirect(`/entries/${user_id}`);
}

function remove(req, res) {
  const entryId = req.params.entry_id;
  deleteEntry(entryId);
  res.redirect('/entries/1');
}
