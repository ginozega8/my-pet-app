const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name:  String,
  age: String,
  color: String,
  description: String,
  animal: String,
  path: String
});

// Crear el modelo
const Pet = mongoose.model('Mascota', petSchema);
module.exports = Pet;