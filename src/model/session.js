const db = require('../database/db');
const crypto = require('node:crypto');

const delete_session = db.prepare(/*sql*/ 'DELETE FROM sessions WHERE id = ?')

function deleteSession(sid) {
  delete_session.run(sid)
}

const getSession = () => {}

const insert_session = db.prepare(/*sql*/ `
  INSERT INTO sessions (
    id,
    user_id,
    expires_at
  ) VALUES (
    ?,
    ?,
    DATE('now' + '7 days')
  ) RETURNING id
`);

function createSession( user_id) {
  const id = crypto.randomBytes(18).toString('base64');
  return insert_session.run(id, user_id);
}


module.exports = { createSession, getSession, deleteSession };
