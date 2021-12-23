const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database/database');//conexion a la base de datos

passport.use('local.agregar_paciente', new LocalStrategy({ //colocamos lo que queremos recibir de agregar_paciente
    firstnameField: 'firstname', //de donde recibimos el dato del usuario
    lastnameField: 'lastname',
    ageField: 'age',
    passReqToCallback: true
}, async (req, firstname, lastname, age, done) => {
    console.log(req);
    if (!req.body.id) { return done(null, null, null); }
    const newPatient = {//definimos a un nuevo usuario
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
    };
    const result = await pool.query('INSERT INTO patients SET ?', [newPatient]); //insertar al nuevo usario en la tabla en la base de datos
    newPatient.id = result.insertId;
    return done(null, newPatient);
}));