var express = require('express');
var router = express.Router();
var database = require('../../database/database');

/* GET users listing. */
router.get('/', function (req, res, next) {
  database.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) { console.log(err); }
    res.send(rows);
  });
});

module.exports = router;
