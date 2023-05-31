const db = require("../database/db.js");

const select_entries = db.prepare(/*sql*/ `
  SELECT content, user_id, posted_at FROM entries
  ORDER BY posted_at DESC
`);

function listEntries() {
  return select_entries.all();
};

module.exports = { listEntries };