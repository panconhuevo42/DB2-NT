const mongoose = require('mongoose');

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

module.exports = mongoose.model('Articulo', articuloSchema);
