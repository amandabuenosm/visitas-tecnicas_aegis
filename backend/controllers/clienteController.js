const Cliente = require('../models/clienteModel');

exports.getAll = (req, res) => {
    Cliente.getAll((err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar clientes', error: err });
        res.json(rows, { message: 'Clientes encontrados com sucesso!' });
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    Cliente.getById(id, (err, row) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar cliente com esse ID: ', error: err });
        if (!row) return res.status(404).json({ message: 'Cliente não encontrado!' });
        res.json(row, { message: 'Cliente encontrado com esse ID!' });
    });
}

exports.create = (req, res) => {
    Cliente.create(req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar cliente: ', error: err});
        res.json({ message: 'Cliente cadastrado com sucesso!' });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Cliente.update(id, req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao alterar dados do cliente: ', error: err});
        res.json({ updated: true, message: 'Dados do cliente alterados com sucesso!'});
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.delete(id, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao excluir dados do cliente: ', error: err});
        res.json({ deleted: true, message: 'Dados do cliente excluídos com sucesso!' });
    });
}