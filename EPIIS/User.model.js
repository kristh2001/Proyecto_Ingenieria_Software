const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombres: String,
    apellidos: String,
    genero: String,
    direccion: String,
    dni: String,
    telefono: String,
    area: String,
    email: String,
    contrasenia: String,
    fechatitulacion: String,
    nominaciontitulo: String,
    instituciontitulo: String,
    paistitulo: String,
    fechagraduacion: String,
    nominaciongrado: String,
    especialidad: String,
    instituciongrado: String,
    paisgrado: String,
    denominacion: String,
    duracion: String,
    institucioncapacitacion: String,
    fechainicio: String,
    fechafinal: String,
    lugar: String
})

const User = mongoose.model('constituyente', userSchema)

module.exports = User;
