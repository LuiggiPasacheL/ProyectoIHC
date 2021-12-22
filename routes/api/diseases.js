
var express = require('express');
var router = express.Router();
var diseaseController = require('../../controllers/diseaseController');

router.get('/', diseaseController.getDiseases);
router.get('/:consulta', diseaseController.getDisease);

module.exports = router;
