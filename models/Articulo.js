// 1. Importa la biblioteca Mongoose.
const mongoose = require('mongoose');
//2. Define el esquema de Mongoose.
const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autores: { type: String, required: true },
  resumen: { type: String },
  anhoPublicacion: { type: String },
  referencias: { type: String },
  baseDatos: { type: String },
  revista: { type: String },
  enlace: { type: String },
});
//3. Exporta el modelo.
module.exports = mongoose.model('Articulo', articuloSchema);
