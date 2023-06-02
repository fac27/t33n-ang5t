const db = require('../database/db.js');

module.exports = { createUser, getUser, getUserByName };

const insert_user = db.prepare(/*sql*/ `
    INSERT INTO users (username, hash)
    VALUES ($username, $hash)
    RETURNING id
`);

function createUser(username, hash) {
  try {
    return insert_user.get({ username, hash });
  } catch (error) {
    return null;
  }
}

const select_user = db.prepare(/*sql*/ `
  SELECT
    id,
    username,
    hash
  FROM users
  WHERE id = ?
`);

function getUser(userId) {
  return select_user.get(userId);
}

const select_user_by_name = db.prepare(/*sql*/ `
  SELECT
    id,
    username,
    hash
  FROM users
  WHERE username = ?
`);

function getUserByName(userName) {
  return select_user_by_name.get(userName);
}
