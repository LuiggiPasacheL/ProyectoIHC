var express = require('express');
var router = express.Router();
var userController = require('../../controllers/userController');

router.get('/', userController.getUsers);
router.post('/login',userController.loginUser);

module.exports = router;
