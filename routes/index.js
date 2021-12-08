var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Four Salud' , body: 'Bienvenido a Four Salud' });
});

router.get('/registro', (req, res, next) => {
  res.render('index',{ title: 'Aca va el registro de pacientes', body: 'formulario aca'});
});

module.exports = router;
