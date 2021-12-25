const query = require('../database/database')

async function getAllPatients() {
    let patients = await query('SELECT * FROM patients');
    return patients
}

async function getPatientsForId(id) {
    let patient = await query(`SELECT * FROM patients WHERE id=${id}`)
    return patient
}

async function getPatient(consulta) {
    let Patient = await query(`SELECT * FROM patients WHERE id LIKE '%${consulta}%' 
    OR first_name LIKE '%${consulta}%' OR last_name LIKE '%${consulta}%' OR family_id LIKE '%${consulta}%'
    OR gender LIKE '%${consulta}%' OR city LIKE '%${consulta}%' OR district LIKE '%${consulta}%' 
    OR direction LIKE '%${consulta}%' OR telephone LIKE '%${consulta}%' OR email LIKE '%${consulta}%' 
    OR DNI LIKE '%${consulta}%'`)

    return Patient
}

async function getLastId(){
    let data = await query(`SELECT * FROM patients ORDER BY id DESC LIMIT 1`)
    if(data[0])
        return data[0].id
    else
        return 0
}

async function createPatient(data) {
    let first_name = data.first_name
    let last_name = data.last_name
    let gender = data.gender
    let city = data.city
    let district = data.district
    let direction = data.direction
    let telephone = data.telephone
    let email = data.email
    let dni = data.dni
    let date_birth = data.date_birth
    let family_id = data.family_id
    let bed_id = data.bed_id
    let disease_id = data.disease_id

    try{
        let result = await query(`INSERT INTO patients(first_name, last_name, gender, city, district, 
        direction, telephone, email, dni, date_birth, family_id, bed_id, disease_id) 
        VALUES('${first_name}', '${last_name}', '${gender}', '${city}', '${district}', '${direction}', '${telephone}',
        '${email}', '${dni}', '${date_birth}', ${family_id}, ${bed_id}, ${disease_id})`)

        return true
    }catch(e){
        return false
    }
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
    getPatient,
    getPatientsForId,
    createPatient,
    updatePatient,
    deletePatient,
    getLastId
}