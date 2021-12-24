var express = require('express');
var router = express.Router();
var patientController = require('../../controllers/patientController');

router.get('/', patientController.getPatients);
router.get('/:consulta', patientController.getPatient);

module.exports = router;
