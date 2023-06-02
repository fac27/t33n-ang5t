const {deleteSession} = require('../model/session')

module.exports = { post };

function post(req, res) {
    const sid = req.session.id
    deleteSession(sid)
    res.clearCookie('sid')
    res.redirect('/')
}