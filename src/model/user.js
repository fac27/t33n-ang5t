const db = require('../database/db.js');

const insert_user = db.prepare(/*sql*/ `
    INSERT INTO users (username, hash)
    VALUES ($username, $hash)
    RETURNING id
`);

const createUser = (username, hash) => {
  try {
    return insert_user.get({ username, hash });
  } catch (error) {
    return null;
  }
};

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

module.exports = {createUser, getUser };
