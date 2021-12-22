
var express = require('express');
var router = express.Router();
var doctorController = require('../../controllers/doctorController');

router.get('/', doctorController.getDoctors);
router.get('/:consulta', doctorController.getDoctor);

module.exports = router;
