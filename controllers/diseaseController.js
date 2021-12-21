
const disease = require('../models/disease')

async function getDiseases(req, res) {
    let data = await disease.getDiseases()
    res.send(data)
}

async function getDisease(req, res) {
    let id = req.params.id
    let data = await disease.getDiseaseForId(id)
    res.send(data)
}

module.exports = {
    getDiseases,
    getDisease
}