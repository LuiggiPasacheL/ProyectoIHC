const user = require('../models/user')

async function loginUser(req, res) {
    let username = req.body.username
    let password = req.body.password

    let data = await user.getUserForUsername(username)

    res.send(data[0].password === password);
}

async function getUsers(req, res) {
    let data = await user.getUsers()
    res.send(data);
}

async function getUser(req, res) {
    let id = req.params.id
    let data = await user.getUserForId(id)
    res.send(data);
}

module.exports = {
    loginUser,
    getUsers,
    getUser
}