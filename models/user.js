const database = require('../database/database')

function getUser(id, sendFunction) {
    database.query(`SELECT * FROM users where id=${id}`, function (err, rows, fields) {
        if (err) { console.log(err); }
        sendFunction(rows);
    });
}

function getUsers(sendFunction) {
    database.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) { console.log(err); }
        sendFunction(rows);
    });
}

function saveUser(username, password, sendFunction) {
    database.query(`INSERT INTO users(username,password) VALUES(${username}, ${password})`, function (err, rows, fields) {
        if (err) { console.log(err); }
        sendFunction(rows);
    })
}

function updateUser(username, password, sendFunction) {
    database.query(`UPDATE users SET username=${username}, password=${password} where username=${username}`, function (err, rows, fields) {
        if (err) { console.log(err); }
        sendFunction(rows);
    })
}

function deleteUser(username, sendFunction) {
    database.query(`DELETE users where username=${username}`, function (err, rows, fields) {
        if (err) { console.log(err); }
        sendFunction(rows);
    })
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}