const test = require('node:test')
const assert = require('node:assert')
const {
    reset,
    createUser,
    createSession,
    getSession,
  } = require("./helpers.js");

// test that entries.js can fetch entries and then display them correctly
test('should fetch entries and display them correctly', () => {
    reset()
    assert.strictEqual()
})


// test post request redirects to the correct entries page 