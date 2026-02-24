const db = require('../db/database');

const Tecnico = {

    createTable() {
        db.run(`CREATE TABLE IF NOT EXISTS tecnicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            especialidade TEXT NOT NULL,
            telefone TEXT NOT NULL,
            ordemserv_id INTEGER,
			FOREIGN KEY (ordemserv_id) REFERENCES ordemservicos(id))`
        );
    },

    getAll(callback) {
        db.all('SELECT * FROM tecnicos', [], callback);
    },

    getById(id, callback) {
        db.get('SELECT * FROM tecnicos WHERE id = ?', [id], callback);
    },

    create(tecnico, callback) {
        db.run('INSERT INTO tecnicos (nome, especialidade, telefone, ordemserv_id) VALUES (?, ?, ?, ?)', [tecnico.nome, tecnico.especialidade, tecnico.telefone, tecnico.ordemserv_id], callback);
    },

    update(id, tecnico, callback) {
        db.run('UPDATE tecnicos SET nome = ?, especialidade = ?, telefone = ?, ordemserv_id = ? WHERE id = ?', [tecnico.nome, tecnico.especialidade, tecnico.telefone, tecnico.ordemserv_id, id], callback);
    },

    delete(id, callback) {
        db.run('DELETE FROM tecnicos WHERE id = ?', [id], callback);
    }
}

module.exports = Tecnico;