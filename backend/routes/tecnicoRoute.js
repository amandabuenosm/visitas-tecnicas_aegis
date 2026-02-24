const express = require('express');
const rotaTecnico = express.Router();
const controller = require('../controllers/tecnicoController');

rotaTecnico.get('/', controller.getAll);
rotaTecnico.get('/:id', controller.getById);
rotaTecnico.post('/', controller.create);
rotaTecnico.put('/:id', controller.update);
rotaTecnico.delete('/:id', controller.delete);

module.exports = rotaTecnico;