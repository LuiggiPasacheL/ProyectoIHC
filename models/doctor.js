const query = require('../database/database')

async function getAllDoctors() {
    let doctors = await query('SELECT * FROM doctors');
    return doctors
}

async function getDoctorForId(id) {
    let doctor = await query(`SELECT * FROM doctors WHERE id=${id}`)
    return doctor
}

async function getDoctor(identificador) {
    let doctor = await query(`SELECT * FROM doctors WHERE first_name LIKE '%${identificador}%' 
                        OR last_name LIKE '%${identificador}%'`)
    return doctor
}

async function createDoctor(first_name, last_name) {
    let result = await query(`INSERT INTO doctors(first_name, last_name) VALUES('${first_name}', '${last_name}')`)
    return result
}

async function updateDoctor(id, first_name, last_name) {
    let result = await query(`UPDATE doctors SET first_name='${first_name}', last_name='${last_name}' WHERE id=${id}`)
    return result
}

async function deleteDoctor(id) {
    let result = await query(`DELETE doctors WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllDoctors,
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
}