var express = require('express');
const { resourceLimits } = require('worker_threads');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('iniciar_sesion');
});

router.get('/inicio', function (req, res, next) {
  res.render('index');
});

router.get('/sobre-nosotros', function (req, res, next) {
  res.render('sobre_nosotros');
});

router.get('/prueba', function (req, res, next) {
  res.render('iniciar_sesion');
});

module.exports = router;
