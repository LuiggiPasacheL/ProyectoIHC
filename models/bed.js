const query = require('../database/database')

async function getAll() {
    let beds = await query('SELECT * FROM beds');
    return beds
}

async function getForID(id) {
    let bed = await query(`SELECT * FROM beds WHERE id=${id}`)
    return beds
}

async function createBed(cod) {
    let result = await query(`INSERT INTO beds(cod) VALUES('${cod}')`)
    return result
}

async function updateBed(id, cod) {
    let result = await query(`UPDATE beds SET cod='${cod}' WHERE id=${id}`)
    return result
}

async function deleteBed(id) {
    let result = await query(`DELETE beds WHERE cod='${cod}'`)
}

module.exports = {
    getAll,
    getForID,
    createBed,
    updateBed,
    deleteBed
}