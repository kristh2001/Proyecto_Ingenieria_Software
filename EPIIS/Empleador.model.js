const mongoose = require('mongoose');

const empleadorSchema  = mongoose.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    contrasenia: String,
    dni: String,
    telefono: String,
    nombrecompania: String,
    direccioncompania: String,
    lugar: String,
    nominacioncargo: String,
    fechainicio: String,
    fechafinal: String,
    institucion: String
});

const Empleador = mongoose.model('empleadores', empleadorSchema );

module.exports = Empleador;
