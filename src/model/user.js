const db = require('../database/db.js');

const create_user = db.prepare(/*sql*/ `
    INSERT INTO users (username, hash)
    VALUES ($username, $hash)
    RETURNING id
`);

const createUser = (username, hash) => {
  try {
    return create_user.get({ username, hash });
  } catch (error) {
    return null;
  }
};

module.exports = { createUser };
