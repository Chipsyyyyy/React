const db = require('../Database/db');

function getUser(req, res){
    const user = db.prepare('SELECT username FROM users WHERE id = ?').get(req.userId);

    res.status(200).json({username: user.username});
}

module.exports = { getUser };