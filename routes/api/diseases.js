
var express = require('express');
var router = express.Router();
var diseaseController = require('../../controllers/diseaseController');

router.get('/', diseaseController.getUsers);
router.get('/:id', diseaseController.getUser);

module.exports = router;
