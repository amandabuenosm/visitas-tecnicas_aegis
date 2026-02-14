const db = require('../db/database');

const Cliente = {
    
    createTable() {
        db.run(`CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE,
            telefone TEXT NOT NULL,
            endereco TEXT NOT NULL,
            plano TEXT NOT NULL)`
        );
    },

    getAll(callback) {
        db.all('SELECT * FROM clientes', [], callback);
    }, 

    getById(id, callback) {
        db.get('SELECT * FROM clientes WHERE id = ?', [id], callback);
    },

    create(cliente, callback) {
        db.run('INSERT INTO clientes (nome, cpf, telefone, endereco, plano) VALUES (?, ?, ?, ?, ?)', [cliente.nome, cliente.cpf, cliente.telefone, cliente.endereco, cliente.plano], callback);
    },

    update(id, cliente, callback) {
        db.run('UPDATE clientes SET nome = ?, cpf = ?, telefone = ?, endereco = ?, plano = ? WHERE id = ?', [cliente.nome, cliente.cpf, cliente.telefone, cliente.endereco, cliente.plano, id], callback);
    },

    delete(id, callback) {
        db.run('DELETE FROM clientes WHERE id = ?', [id], callback);
    }
}

module.exports = Cliente;
