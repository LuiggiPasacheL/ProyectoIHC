const query = require('../database/database')

async function getAllFamilies() {
    let families = await query('SELECT * FROM families');
    return families
}

async function getFamiliesForId(id) {
    let family = await query(`SELECT * FROM families WHERE id=${id}`)
    return family
}

async function getLastId(id){
    let data = await query(`SELECT * FROM families ORDER BY id DESC LIMIT 1`)
    if(data){
        return data[0].id
    }
    else{
        return 0
    }
}

async function createFamily(cod) {
    let result = await query(`INSERT INTO families(cod) VALUES('${cod}')`)
    return result
}

async function updateFamily(id, cod) {
    let result = await query(`UPDATE families SET cod='${cod}' WHERE id=${id}`)
    return result
}

async function deleteFamily(id) {
    let result = await query(`DELETE families WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllFamilies,
    getFamiliesForId,
    createFamily,
    updateFamily,
    deleteFamily,
    getLastId
}