const express = require('express');
const rotaOrdemserv = express.Router();
const controller = require ('../controllers/ordemservController');

rotaOrdemserv.get('/', controller.getAll);
rotaOrdemserv.get('/:id', controller.getById);
rotaOrdemserv.get('/tecnico/:id', controller.getByTecnico);
rotaOrdemserv.post('/', controller.create);
rotaOrdemserv.put('/:id', controller.update);
rotaOrdemserv.delete('/:id', controller.delete);

module.exports = rotaOrdemserv;