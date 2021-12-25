var express = require('express');
var router = express.Router();
var patientController = require('../../controllers/patientController');

router.get('/', patientController.getPatients);
router.get('/:consulta', patientController.getPatient);
router.post('/add', patientController.createPatient); 

module.exports = router;
