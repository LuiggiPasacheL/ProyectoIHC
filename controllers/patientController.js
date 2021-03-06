
const patient = require('../models/patient')
const family = require('../models/family')
const bed = require('../models/bed')

async function getPatients(req, res) {
    let data = await patient.getAllPatients()
    res.send(data);
}

async function getPatient(req, res) {
    let consulta = req.params.consulta
    let data = await patient.getPatient(consulta)
    res.send(data)
}

async function createPatient(req, res) {
    let data = { ...req.body }

    if (!valid(data)) {
        res.send('error al enviar datos')
        return;
    }

    let id_patient = await patient.getLastId()

    let bed_cod = 'bed_' + (id_patient + 1)

    let family_cod = 'fam_' + (id_patient + 1)
    let data_family = {
    cod: family_cod,
    pareja_first_name: data.pareja_first_name,
    pareja_last_name: data.pareja_last_name,
    pareja_telephone: data.pareja_telephone,
    pareja_email: data.pareja_email,
    pareja_dni: data.pareja_dni,
    hijo_first_name: data.hijo_first_name,
    hijo_last_name: data.hijo_last_name
    }

    await bed.createBed(bed_cod)
    await family.createFamily(data_family)

    data.family_id = await family.getLastId()
    data.bed_id = await bed.getLastId()

    let result = await patient.createPatient(data)

    res.send(result)
}

async function deletePatient(req, res) {
    let id = req.params.id
    let result = await patient.deletePatient(id)
    res.send(result.affectedRows > 0)
}

function valid(data) {
    if(
    data.first_name === "" ||
    data.last_name === "" ||
    data.gender === "" ||
    data.city === "" ||
    data.district === "" ||
    data.direction === "" ||
    data.telephone === "" ||
    data.email === "" ||
    data.dni === "" ||
    data.date_birth === "" ||
    data.family_id === "" ||
    data.bed_id === "" ||
    data.disease_id === ""){
        return false;
    }
    else{
        return true;
    }


}

module.exports = {
    getPatients,
    getPatient,
    createPatient,
    deletePatient
}