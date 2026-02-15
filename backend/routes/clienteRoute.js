const express = require('express');
const rotaCliente = express.Router();
const controller = require('../controllers/clienteController');

rotaCliente.get('/', controller.getAll);
rotaCliente.get('/:id', controller.getById);
rotaCliente.post('/', controller.create);
rotaCliente.put('/:id', controller.update);
rotaCliente.delete('/:id', controller.delete);

module.exports = rotaCliente;