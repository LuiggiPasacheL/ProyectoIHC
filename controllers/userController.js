const user = require('../models/user')

async function loginUser(req, res) {
    let username = req.params.username
    let password = req.params.password
    let data = await user.getUserForUsername(username)

    res.send(password === data)
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