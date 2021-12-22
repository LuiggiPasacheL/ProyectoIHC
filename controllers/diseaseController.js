
const disease = require('../models/disease')

async function getDiseases(req, res) {
    let data = await disease.getAllDiseases()
    res.send(data)
}

async function getDisease(req, res) {
    let consulta = req.params.consulta
    let data = await disease.getDisease(consulta)
    res.send(data)
}

module.exports = {
    getDiseases,
    getDisease
}