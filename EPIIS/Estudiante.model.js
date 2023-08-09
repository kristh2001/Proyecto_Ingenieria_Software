const mongoose = require('mongoose');

const estudianteSchema  = mongoose.Schema({
    nombres: String,
    apellidos: String,
    codigo: String,
    semestre: String,
    creditos: Number,
    email: String,
    contrasenia: String,
    direccion: String,
    numero_telefonico: String,
    genero: String,
    dni: String,
    fecha_nacimiento: Date,
    colegio_procedencia:String
});

const estudiante = mongoose.model('estudiante', estudianteSchema );

module.exports = estudiante;