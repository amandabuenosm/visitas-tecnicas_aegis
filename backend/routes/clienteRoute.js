const express = require('express');
const rota = express.Router();
const controller = require('../controllers/clienteController');

rota.get('/', controller.getAll);
rota.get('/:id', controller.getById);
rota.post('/', controller.create);
rota.put('/:id', controller.update);
rota.delete('/:id', controller.delete);

module.exports = rota;