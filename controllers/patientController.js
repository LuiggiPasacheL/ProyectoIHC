
const patient = require('../models/patient')

async function getPatitents(req, res) {
    let data = await patient.getAllPatients()
    res.send(data)
}

async function getPatient(req, res) {
    let id = req.params.id
    let data = await patient.getPatientsForId(id)
    res.send(data)
}

module.exports = {
    getPatitents,
    getPatient
}