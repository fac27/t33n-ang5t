const test = require('node:test')
const assert = require('node:assert')
const {
    reset,
    createEntry,
    getEntries,
    createUser,
    request,
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
    const {statusWithoutAuth} = await request(`/entries/1`)
    assert.equal(statusWithoutAuth, 300, 'unauthorized access to an entry page') // unauthorized redirect
    
    const user_id = createUser('dummy', 'password')

    const {statusWithAuth} = await request(`/entries/${user_id}`)
    assert.equal(statusWithAuth, 200, 'authorized redirect didnt work') // authorized redirect
})