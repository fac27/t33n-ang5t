const db = require('../database/db.js');

// get entry from db
const select_entries = db.prepare(/*sql*/ `
  SELECT content, user_id, posted_at FROM entries
  ORDER BY posted_at DESC
`);

function listEntries() {
  return select_entries.all();
}

const db = require('../database/db');

// insert dairy entry into the db
const create_enrty = db.prepare(/*sql*/ `
    INSERT INTO entries (content, user_id)
    VALUES ($content, $user_id)
    RETURNING entries.id
`);

const createEntry = (content, user_id) => {
  return create_enrty.get({ content, user_id });
};

module.exports = { listEntries, createEntry };
