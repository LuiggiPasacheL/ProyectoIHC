
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
    data = {...req.body, bed_id:null, disease_id:null}

    let id_patient = await patient.getLastId()
    let family_cod = 'fam_' + (id_patient + 1)

    await family.createFamily(family_cod)

    data.family_id = await family.getLastId()

    let result = await patient.createPatient(data)

    res.send(result)
}

async function deletePatient(req, res) {
    let id = req.params.id
    try{
        let result = await patient.deletePatient(id)
        console.log(result)
        res.send(true)
    }catch(e){
        console.log(e)
        res.send(false)
    }
}

module.exports = {
    getPatients,
    getPatient,
    createPatient,
    deletePatient
}