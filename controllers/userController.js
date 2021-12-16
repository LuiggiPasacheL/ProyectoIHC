const user = require('../models/user')
const database = require('../database/database')

function loginUser(req, res) {
    let username = req.params.username
    let password = req.params.password
    user.getUserForUsername(username, function (user){
        res.send(user.password === password)
    })
}

function getUsers(req, res) {
    user.getUsers(function (data){
        res.send(data)
    })
}

function getUser(req, res) {
    let id = req.params.id
    user.getUserForId(id, function (data) {
        res.send(data);
    })
}

module.exports = {
    loginUser,
    getUsers,
    getUser
}