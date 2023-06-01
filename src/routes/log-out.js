const {deleteSession} = require('../model/session')

module.exports = { get, post };

function post(req, res) {
    const sid = req.session.sid
    deleteSession(sid)
    res.redirect('/')
}