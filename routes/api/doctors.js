var express = require('express');
var router = express.Router();
var doctorController = require('../../controllers/doctorController');

router.get('/', doctorController.getUsers);
router.get('/:id', doctorController.getUser);

module.exports = router;
