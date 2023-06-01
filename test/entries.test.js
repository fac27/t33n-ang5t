const test = require('node:test')
const assert = require('node:assert')
const {
    reset,
    createUser,
    createSession,
    getSession,
  } = require("./helpers.js");

// test that entries.js can fetch entries and then display them correctly
test('should fetch entries and display them correctly', async () => {
    reset()
    
    const user_id = createUser('dummy', 'password')
    const entry = createEntry(entry)
    getEntries(user_id)

    const {body} = await request(`/entries/${user_id}`)

    assert.match(body, `/${entry}/`)
})


// test post request redirects to the correct entries page 
test('should redirect to users entry page', async () => {
    const {headersWithoutAuth} = await request(`/entries/1`)
    assert.equal(headersWithoutAuth.status, 300) // unauthorized redirect
    
    const user_id = createUser('dummy', 'password')

    const {headersWithAuth} = await request(`/entries/${user_id}`)
    assert.equal(headersWithAuth.status, 200) // authorized redirect
})