const query = require('../database/database')

async function getAllBeds() {
    let beds = await query('SELECT * FROM beds');
    return beds
}

async function getBedForId(id) {
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

async function getLastId(){
    let data = await query(`SELECT * FROM beds ORDER BY id DESC LIMIT 1`)
    if(data){
        return data[0].id
    }
    else{
        return 0
    }
}

module.exports = {
    getAllBeds,
    getBedForId,
    createBed,
    updateBed,
    deleteBed,
    getLastId
}