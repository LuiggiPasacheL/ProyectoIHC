const query = require('../database/database')

async function getAllDoctors() {
    let doctors = await query('SELECT * FROM Doctors');
    return doctors
}

async function getDoctorsForId(id) {
    let doctor = await query(`SELECT * FROM Doctors WHERE id=${id}`)
    return doctor
}

async function createDoctor(first_name, last_name) {
    let result = await query(`INSERT INTO Doctors(first_name, last_name) VALUES('${first_name}', '${last_name}')`)
    return result
}

async function updateDoctor(id, first_name, last_name) {
    let result = await query(`UPDATE Doctors SET first_name='${first_name}', last_name='${last_name}' WHERE id=${id}`)
    return result
}

async function deleteDoctor(id) {
    let result = await query(`DELETE Doctors WHERE id='${id}'`)
    return result
}

module.exports = {
    getAllDoctors,
    getDoctorsForId,
    createDoctor,
    updateDoctor,
    deleteDoctor
}