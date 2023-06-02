const db = require('../database/db.js');

module.exports = { getEntries, createEntry, deleteEntry };

// get entry from db
const select_entries = db.prepare(/*sql*/ `
  SELECT
    id,
    content,
    user_id,
    strftime('%d/%m/%Y', posted_at) AS posted_at
  FROM entries
  ORDER BY id DESC
`);

function getEntries() {
  return select_entries.all();
}

// insert diary entry into the db
const insert_entry = db.prepare(/*sql*/ `
    INSERT INTO entries (content, user_id)
    VALUES ($content, $user_id)
    RETURNING entries.id
`);

function createEntry(content, user_id) {
  return insert_entry.get({ content, user_id });
}

// delete entry from db
const delete_entry = db.prepare(/*sql*/ `
  DELETE FROM entries WHERE id = $entries_id
`);

function deleteEntry(entries_id) {
  delete_entry.run({ entries_id });
}
