const crypto = require('node:crypto');
const db = require('../database/db');

module.exports = { createSession, getSession, deleteSession };

const select_session = db.prepare(/*sql*/ `
  SELECT *
  FROM sessions
  WHERE id = ?
  `);

function getSession(sid) {
  return select_session.get(sid);
}

const delete_session = db.prepare(/*sql*/ `
  DELETE FROM sessions
  WHERE id = ?
  `);

function deleteSession(sid) {
  return delete_session.run(sid);
}

const insert_session = db.prepare(/*sql*/ `
  INSERT INTO sessions (
    id,
    user_id,
    expires_at
  ) VALUES (
    ?,
    ?,
    DATE('now', ('+7 days'))
  ) RETURNING id
`);

function createSession(user_id) {
  const id = crypto.randomBytes(18).toString('base64');
  return insert_session.get(id, user_id);
}
