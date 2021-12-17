const query = require('../database/database')

async function getAllBeds() {
    let beds = await query('SELECT * FROM beds');
    return beds
}

async function getBedsForID(id) {
    let bed = await query(`SELECT * FROM beds WHERE id=${id}`)
    return bed
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
    let result = await query(`DELETE beds WHERE cod='${id}'`)
    return result
}

module.exports = {
    getAllBeds,
    getBedsForID,
    createBed,
    updateBed,
    deleteBed
}