const query = require('../database/database')

async function getAllDiseases() {
    let Diseases = await query('SELECT * FROM diseases');
    return Diseases
}

async function getDisease(consulta) {
    let Disease = await query(`SELECT * FROM diseases WHERE id LIKE '%${consulta}%' OR name LIKE '%${consulta}%'`)
    return Disease
}

async function createDisease(name) {
    let result = await query(`INSERT INTO diseases(name) VALUES('${name}')`)
    return result
}

async function updateDisease(id, name) {
    let result = await query(`UPDATE diseases SET name='${name}' WHERE id=${id}`)
    return result
}

async function deleteDisease(id) {
    let result = await query(`DELETE diseases WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllDiseases,
    getDisease,
    createDisease,
    updateDisease,
    deleteDisease
}