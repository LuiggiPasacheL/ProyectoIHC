const query = require('../database/database')

async function getAllFamilies() {
    let families = await query('SELECT * FROM families');
    return families
}

async function getFamiliesForId(id) {
    let family = await query(`SELECT * FROM families WHERE id=${id}`)
    return family
}

async function getLastId(){
    let data = await query(`SELECT * FROM families ORDER BY id DESC LIMIT 1`)
    if(data){
        return data[0].id
    }
    else{
        return 0
    }
}

async function createFamily(data) {
    let cod = data.cod
    let pareja_first_name = data.pareja_first_name
    let pareja_last_name = data.pareja_last_name
    let pareja_telephone = data.pareja_telephone
    let pareja_email = data.pareja_email
    let pareja_dni = data.pareja_dni
    let hijo_first_name = data.hijo_first_name
    let hijo_last_name = data.hijo_last_name

    let result = await query(`INSERT INTO families(cod, pareja_first_name , pareja_last_name ,
    pareja_telephone , pareja_email , pareja_dni , hijo_first_name , hijo_last_name)
    VALUES('${cod}', '${pareja_first_name}', '${pareja_last_name}', '${pareja_telephone}',
    '${pareja_email}', '${pareja_dni}', '${hijo_first_name}', '${hijo_last_name}')`)

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