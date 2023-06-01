const db = require('../database/db');
const crypto = require('node:crypto');

const select_session = db.prepare(/*sql*/ `
  SELECT *
  FROM sessions 
  WHERE id = ?
  `)

const getSession = (sid) => {
  return select_session.get(sid);
}

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


module.exports = { createSession, getSession };
