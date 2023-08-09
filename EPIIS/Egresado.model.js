const mongoose = require('mongoose');

const egresadoSchema  = mongoose.Schema({
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
    colegio_procedencia:String,
    //practica preprofesional
    lugar_practica:String,
    insitucion_practica:String,
    duracion:String,
    dni_docente_estudiante_practica:String,
    //idioma extrangero
    lugar_idioma:String,
    institucion_idioma:String,
    nivel:String,
    nombre_idioma:String,
    dni_docente_estudiante_idioma:String,
    //Grado academico
    fechas_graduacion:Date,
    nominacion_grado:String,
    dni_docente_estudiante_grado:String,
    especialidad:String,
    institucion_grado:String,
    pais:String,
});

const egresado = mongoose.model('egresado', egresadoSchema );

module.exports =egresado;