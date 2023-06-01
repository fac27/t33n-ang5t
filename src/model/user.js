const db = require('../database/db.js');

module.exports = { getUser };

const select_user = db.prepare(/*sql*/ `
  SELECT
    id,
    username,
    hash
  FROM users
  WHERE username = ?
`);

function getUser(userName) {
  return select_user.get(userName);
}
