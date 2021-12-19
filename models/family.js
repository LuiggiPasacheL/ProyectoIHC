const query = require('../database/database')

async function getAllFamilies() {
    let families = await query('SELECT * FROM Families');
    return families
}

async function getFamiliesForId(id) {
    let family = await query(`SELECT * FROM Families WHERE id=${id}`)
    return family
}

async function createFamily(cod) {
    let result = await query(`INSERT INTO Families(cod) VALUES('${cod}')`)
    return result
}

async function updateFamily(id, cod) {
    let result = await query(`UPDATE Families SET cod='${cod}' WHERE id=${id}`)
    return result
}

async function deleteFamily(id) {
    let result = await query(`DELETE Families WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllFamilies,
    getFamiliesForId,
    createFamily,
    updateFamily,
    deleteFamily
}