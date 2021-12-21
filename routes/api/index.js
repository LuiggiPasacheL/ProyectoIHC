var express = require('express');
const { resourceLimits } = require('worker_threads');
var router = express.Router();

const usersRouter = require('./users');
const doctorsRouter = require('./doctors');
const diseasesRouter = require('./diseases.js');
const bedsRouter = require('./beds.js');

router.use('/users', usersRouter);
router.use('/doctors', doctorsRouter);
router.use('/diseases', diseasesRouter);
router.use('/beds', bedsRouter);

module.exports = router;