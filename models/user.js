const query = require('../database/database')

async function getUserForId(id) {
    let rows = await query(`SELECT * FROM users where id=${id}`)
    return rows;
}

async function getUserForUsername(username) {
    let rows = await query(`SElECT * FROM users where username=${username}`)
    return rows;
}

async function getUsers() {
    let rows = await query(`SElECT * FROM users`)
    return rows;
}

async function saveUser(username, password) {
    let rows = await query(`INSERT INTO users(username,password) VALUES(${username}, ${password})`)
    return rows;
}

async function updateUser(username, password) {
    let result = await query(`UPDATE users SET username=${username}, password=${password} where username=${username}`)
    return result;
}

async function deleteUser(username) {
    let result = await query(`DELETE users where username=${username}`)
    return result;
}

module.exports = {
    getUserForId,
    getUserForUsername,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}