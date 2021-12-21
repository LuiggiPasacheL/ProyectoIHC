var express = require('express');
var router = express.Router();
var bedController = require('../../controllers/bedController');

router.get('/', bedController.getBeds);
router.get('/:id', bedController.getBed);

module.exports = router;