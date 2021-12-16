const config = require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
})

let query = function (sql, values) {
  // devolver una promesa
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          // finaliza la sesión
          connection.release()
        })
      }
    })
  })
}

module.exports = query;