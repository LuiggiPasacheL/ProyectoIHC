
let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  database : 'four_salud',
  user     : 'root',
  password : 'password'
});

connection.connect();

module.exports = connection;