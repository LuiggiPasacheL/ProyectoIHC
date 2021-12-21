
const doctor = require('../models/doctor')

async function getDoctors(req, res) {
    let data = await doctor.getDoctors()
    res.send(data)
}

async function getDoctor(req, res) {
    let id = req.params.id
    let data = await doctor.getDoctorForId(id)
    res.send(data)
}

module.exports = {
    getDoctors,
    getDoctor
}