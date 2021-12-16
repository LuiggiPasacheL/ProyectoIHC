var express = require('express');
var router = express.Router();
var userController = require('../../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.get('/login/:username',userController.loginUser);

module.exports = router;
