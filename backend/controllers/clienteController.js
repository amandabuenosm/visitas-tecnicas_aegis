const Cliente = require('../models/clienteModel');

exports.getAll = (req, res) => {
    Cliente.findAll((err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar clientes', error: err });
        res.json(rows);
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    Cliente.findById(id, (err, row) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar cliente com esse ID: ', error: err });
        if (!row) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(row);
    });
}

exports.create = (req, res) => {
    Cliente.create(req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar cliente: ', error: err});
        res.json({ id: this.lastID });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Cliente.update(id, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao alterar dados do cliente: ', error: err});
        res.json({ updated: true });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.delete(id, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao excluir dados do cliente: ', error: err});
        res.json({ deleted: true });
    })
}