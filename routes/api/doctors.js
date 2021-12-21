
var express = require('express');
var router = express.Router();
var doctorController = require('../../controllers/doctorController');

router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctor);

module.exports = router;
