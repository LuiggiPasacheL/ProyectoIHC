
const doctor = require('../models/doctor')

async function getDoctors(req, res) {
    let data = await doctor.getAllDoctors()
    res.send(data);
}

async function getDoctor(req, res) {
    let identificador = req.params.consulta
    let data = await doctor.getDoctor(identificador)
    console.log(data)
    res.send(data)
}

module.exports = {
    getDoctors,
    getDoctor
}