const bed = require('../models/bed')

async function getBeds(req, res) {
    let data = await bed.getAllBeds()
    res.send(data);
}

async function getBed(req, res) {
    let id = req.params.id
    let data = await bed.getBedForId(id)
    res.send(data);
}

module.exports = {
    getBeds,
    getBed
}