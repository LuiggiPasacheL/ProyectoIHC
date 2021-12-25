
const patient = require('../models/patient')
const family = require('../models/family')

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
    let data = {}
    data.bed_id = null
    data.disease_id = null
    data = req.body

    let id_patient = await patient.getLastId()
    family_cod = 'fam_' + (id_patient + 1)

    await family.createFamily(family_cod)

    data.family_id = await family.getLastId()

    let result = await patient.createPatient(data)

    res.send(result)
}

module.exports = {
    getPatients,
    getPatient,
    createPatient
}