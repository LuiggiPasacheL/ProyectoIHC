var express = require('express');
const { resourceLimits } = require('worker_threads');
var router = express.Router();

const usersRouter = require('./users');

router.use('/users', usersRouter);

module.exports = router;