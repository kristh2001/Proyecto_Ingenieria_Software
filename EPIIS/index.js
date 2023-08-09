const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Llmar a express
const app = express();

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Model
const User = require('./User.model');
const Empleador = require('./Empleador.model');
const egresado=require('./Egresado.model');
const estudiante=require('./Estudiante.model')

mongoose.connect('mongodb://127.0.0.1:27017/proyecto-software', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('CONECTADO A BBDD'))
  .catch(error => console.error('Error al conectar a la BBDD:', error));

//Routing
app.get('/api/estudiante', (req, res) => {
  estudiante
    .find()
    .then(allestudiantes => res.json(allestudiantes))
});
app.get('/api/egresados', (req, res) => {
  egresado
    .find()
    .then(allEgresados => res.json(allEgresados))
});
app.get('/api/constituyentes', (req, res) => {

  User
    .find()
    .then(allConstituyentes => res.json(allConstituyentes))
});

app.get('/api/empleadores', (req, res) => {

  Empleador
    .find()
    .then(allempleadores => res.json(allempleadores))
});

app.get('/api/details/:constituyente_id', (req, res) => {
  try {
    const {constituyente_id} = req.params

    User
      .findById(constituyente_id)
      .then(constituyente => res.json(constituyente))
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});
app.get('/api/estudiantes/:estudiante_id', (req, res) => {
  try {
    const {estudiante_id} = req.params

    estudiante
      .findById(estudiante_id)
      .then(estudiante => res.json(estudiante))
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

app.get('/api/empleadores/:empleador_id', (req, res) => {
  try {
    const {empleador_id} = req.params

    Empleador
      .findById(empleador_id)
      .then(empleador => res.json(empleador))
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

app.listen(5005, () => {
  console.log(`Servidor en http://localhost:5005`);
});
