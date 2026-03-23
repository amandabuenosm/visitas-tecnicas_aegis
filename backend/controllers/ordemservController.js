const OrdemServ = require('../models/ordemservModel');

exports.getAll = (req, res) => {
    OrdemServ.getAll((err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao encontrar ordens de serviço!', error: err });
        res.json({ message: 'Ordens de serviço encontradas com sucesso!', data: rows });
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    OrdemServ.getById(id, (err, row) => {
        if (err) return res.status(500).json({ message: 'Erro ao encontrar ordem de serviço!', error: err });
        if (!row) return res.status(404).json({ message: 'Ordem de serviço não encontrada com esse ID' })
        res.json({ message: 'Ordem de serviço encontrada com sucesso!', data: row });
    });
}

exports.getByTecnico = (req, res) => {
    const tecnico_id = req.params.id; 

    OrdemServ.getByTecnico(tecnico_id, (err, rows) => {
        if (err) return res.status(500).json({ message: 'Erro ao encontrar ordem de serviço!', error: err });
        if (!rows) return res.status(404).json({ message: 'Ordem de serviço não encontrada para o técnico com esse ID' })
        res.json({ message: 'Ordem(ns) de serviço encontrada(s) com sucesso!', data: rows });
    });
}

exports.create = (req, res) => {
    const {cliente_id, tecnico_id, problema, data_hora} = req.body;

    if (!cliente_id || !tecnico_id || !problema || !data_hora) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!'})
    }

    OrdemServ.create(req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar ordem de serviço!', error: err });
        res.json({ message: 'Ordem de serviço cadastrada com sucesso!' });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;

    OrdemServ.update(id, req.body, (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao alterar dados da ordem de serviço!', error: err });
        res.json({ updated: true, message: 'Dados da ordem de serviço alterados com sucesso!' });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    OrdemServ.delete(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao excluir dados da ordem de serviço!', error: err });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ordem de serviço não encontrada'});
        }

        res.json({ deleted: true, message: 'Dados da ordem de serviço excluíos com sucesso!' });
    });
}