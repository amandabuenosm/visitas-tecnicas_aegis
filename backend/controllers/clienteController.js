const Cliente = require('../models/clienteModel');

exports.getAll = (req, res) => {
    Cliente.getAll((err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar clientes', error: err });
        res.json({ message: 'Clientes encontrados com sucesso!', data: rows });
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    Cliente.getById(id, (err, row) => {
        if (err) return res.status(500).json({ message: 'Erro ao buscar cliente com esse ID: ', error: err });
        if (!row) return res.status(404).json({ message: 'Cliente não encontrado!' });
        res.json({ message: 'Cliente encontrado com esse ID!', data: row });
    });
}

exports.create = (req, res) => {
    const {nome, cpf, telefone, endereco, plano} = req.body;

    if (!nome || !cpf || !telefone || !endereco || !plano) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!'})
    }

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

    Cliente.delete(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao excluir dados do cliente: ', error: err});

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado'});
        }

        res.json({ deleted: true, message: 'Dados do cliente excluídos com sucesso!' });
    });
}