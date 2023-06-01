const { listEntries, createEntry } = require('../model/entries.js');
const { layout } = require('../templates/layout.js');
const { entriesPage } = require('../templates/user-page.js');
const { sanitise } = require('../model/sanitise.js');

module.exports = { get, post };

function get(req, res) {
  const entries = listEntries();
  const user_id = 1; //fix when authentication is there
  const user_name = 'xxDarkSoulxx';
  const body = entriesPage(entries, user_id, user_name);
  let title = 'Entries';
  res.send(layout(title, body));
}

function post(req, res) {
  const { entry } = req.body;
  createEntry(entry, 1); // fix when authentication is there;
  res.redirect('/entries/1');
}
