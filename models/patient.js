const query = require('../database/database')

async function getAllPatients() {
    let patients = await query(`SELECT patients.id, first_name, last_name, DNI, email, direction, 
    concat(pareja_first_name,' ', pareja_last_name) as family_id, ifnull(bed_id, 'sin cama') as bed_id, 
    ifnull(diseases.name, 'sin enfermedades') as disease_id
    FROM patients left join diseases on diseases.id = disease_id
    left join families on families.id = family_id`);
    return patients
}

async function getPatientsForId(id) {
    let patient = await query(`SELECT * FROM patients WHERE id=${id}`)
    return patient
}

async function getPatient(consulta) {
    let Patient = await query(`SELECT patients.id, first_name, last_name, DNI, email, direction, 
    concat(pareja_first_name,' ', pareja_last_name) as family_id, ifnull(bed_id, 'sin cama') as bed_id, 
    ifnull(diseases.name, 'sin enfermedades') as disease_id
    FROM patients left join diseases on diseases.id = disease_id
    left join families on families.id = family_id 
    having patients.id LIKE '%${consulta}%' OR first_name LIKE '%${consulta}%' OR last_name LIKE '%${consulta}%' 
    OR family_id LIKE '%${consulta}%' OR direction LIKE '%${consulta}%' OR email LIKE '%${consulta}'
    OR DNI LIKE '%${consulta}%' OR family_id LIKE '%${consulta}%' OR bed_id LIKE '%${consulta}%' OR disease_id LIKE '%${consulta}%'`)
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

    console.log(data);

    let result = await query(`INSERT INTO patients(first_name, last_name, gender, city, district, 
    direction, telephone, email, dni, date_birth, family_id, bed_id, disease_id) 
    VALUES('${first_name}', '${last_name}', '${gender}', '${city}', '${district}', '${direction}', '${telephone}',
    '${email}', '${dni}', '${date_birth}', ${family_id}, ${bed_id}, ${disease_id})`)

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
    let result = await query(`DELETE FROM patients WHERE id=${id}`)
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