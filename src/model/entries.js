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
  ORDER BY posted_at DESC
`);

function getEntries() {
  return select_entries.all();
}

// insert diary entry into the db
const create_entry = db.prepare(/*sql*/ `
    INSERT INTO entries (content, user_id)
    VALUES ($content, $user_id)
    RETURNING entries.id
`);

function createEntry(content, user_id) {
  return create_entry.get({ content, user_id });
};

// delete diary entry from the db
const delete_entry = db.prepare(/*sql*/ `
  DELETE FROM entries
  WHERE id = ?
`);

function deleteEntry(entry_id) {
  delete_entry.run(entry_id);
};