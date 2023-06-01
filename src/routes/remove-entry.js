const { deleteEntry } = require('../model/entries.js');
const { layout } = require('../templates/layout.js');
const { entriesPage } = require('../templates/user-page.js');

module.exports = { post };

function post(req, res) {
    const entryId = req.params.id;
    deleteEntry(entryId);
    //res.sendStatus(204);
    res.redirect('/entries/1');
}
