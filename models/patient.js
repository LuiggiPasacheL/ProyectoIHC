const query = require('../database/database')

async function getAllPatients() {
    let patients = await query('SELECT * FROM patients');
    return patients
}

async function getPatientsForId(id) {
    let patient = await query(`SELECT * FROM patients WHERE id=${id}`)
    return patient
}

async function createPatient(data) {
    let first_name = data.first_name
    let last_name = data.last_name
    let age = data.age
    let family_id = data.family_id
    let family_rol = data.family_rol
    let bed_id = data.bed_id

    let result = await query(`INSERT INTO patients(first_name, last_name, age,
                            family_id, family_rol, bed_id) VALUES('${first_name}', '${last_name}', 
                            '${age}', '${family_id}', '${family_rol}', '${bed_id}')`)
    return result
}

async function updatePatient(id, data) {
    let first_name = data.first_name
    let last_name = data.last_name
    let age = data.age
    let family_id = data.family_id
    let family_rol = data.family_rol
    let bed_id = data.bed_id
     
    let result = await query(`UPDATE patients SET first_name='${first_name}', last_name='${last_name}'
                             , '${age}', '${family_id}', '${family_rol}', '${bed_id}' WHERE id=${id}`)
    return result
}

async function deletePatient(id) {
    let result = await query(`DELETE patients WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllPatients,
    getPatientsForId,
    createPatient,
    updatePatient,
    deletePatient
}