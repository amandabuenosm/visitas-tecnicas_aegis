const Tecnico = require('../models/tecnicoModel');

exports.getAll = (req, res) => {
    Tecnico.getAll((err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar técnicos', error: err });
        res.json(rows, { message: 'Técnicos encontrados com sucesso!' });
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    Tecnico.getById(id, (err, row) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar técnico com esse ID: ', error: err });
        if (!row) return res.status(404).json({ message: 'Técnico não encontrado!' });
        res.json(row, { message: 'Técnico encontrado com esse ID!' });
    });
}

exports.create = (req, res) => {
    Tecnico.create(req.body, (err) => {
        
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar técnico: ', error: err});
        res.json({ message: 'Técnico cadastrado com sucesso!' });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Tecnico.update(id, req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao alterar dados do técnico: ', error: err});
        res.json({ updated: true, message: 'Dados do técnico alterados com sucesso!'});
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Tecnico.delete(id, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao excluir dados do técnico: ', error: err});
        res.json({ deleted: true, message: 'Dados do técnico excluídos com sucesso!' });
    });
}