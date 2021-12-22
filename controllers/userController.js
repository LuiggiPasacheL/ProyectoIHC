const user = require('../models/user')

async function loginUser(req, res) {
    let username = req.body.username.trim()
    let password = req.body.password.trim()
    
    let data = await user.getUserForUsername(username)

    if(data[0]){
        res.send(data[0].password === password);
    }
    else{
        res.send(false);
    }
}

async function getUsers(req, res) {
    let data = await user.getUsers()
    res.send(data);
}

module.exports = {
    loginUser,
    getUsers,
}