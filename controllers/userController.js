const user = require('../models/user')
const database = require('../database/database')

function loginUser(req, res) {
    let username = req.params.username
    user.getUser(username, function (data){
        res.send(data);
    });
}

function getUsers(req, res) {
    user.getUsers(function (data){
        res.send(data)
    });
}

function getUser(req, res) {
    let id = req.params.id;
    user.getUser(id, function (data) {
        res.send(data);
    });
}

module.exports = {
    loginUser,
    getUsers,
    getUser
}