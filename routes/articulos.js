const express = require('express'); // Importa el framework Express.
const router = express.Router(); // Crea el objeto router para manejar las rutas.
const Articulo = require('../models/Articulo'); // Importa el modelo Mongoose para interactuar con la colección de artículos.

// Obtener todos los artículos
router.get('/', async (req, res) => {
  try {
    // Busca y recupera TODOS los documentos de la colección "Articulo"
    const articulos = await Articulo.find();
    // Envía la lista completa de artículos al cliente como JSON.
    res.json(articulos);
  } catch (error) {
    // Si hay un error del servidor o base de datos, envía un código 500 (Error Interno del Servidor).
    res.status(500).json({ message: error.message });
  }
});



// Crear un nuevo artículo
router.post('/', async (req, res) => {
  try {// Crea una NUEVA instancia del modelo "Articulo" usando los datos enviados en el cuerpo de la solicitud (req.body).
    const nuevoArticulo = new Articulo({
      titulo: req.body.titulo,
      autores: req.body.autores,
      anhoPublicacion: req.body.anhoPublicacion,
      referencias: req.body.referencias,
      baseDatos: req.body.baseDatos,
      revista: req.body.revista,
      resumen: req.body.resumen,
      enlace: req.body.enlace,
    });
    // Guarda el nuevo artículo en la base de datos
    const articuloGuardado = await nuevoArticulo.save();
    // Envía el artículo guardado como respuesta con un código 201 (Creado).
    res.status(201).json(articuloGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




// Actualizar un artículo
router.put('/:id', async (req, res) => {
  try {
    // Busca un artículo por su ID (obtenido de la URL: req.params.id) y actualiza sus campos con req.body.
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Responde con el documento actualizado.
    res.json(articulo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});







// Obtener un artículo por ID
router.get('/:id', async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});










// Eliminar un artículo
router.delete('/:id', async (req, res) => {
  try {
    await Articulo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





module.exports = router;
