module.exports = { getSession, createSession };

const db = require('../database/db');

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

function createSession( id, user_id) {
  return insert_session.run(id, user_id);
}
