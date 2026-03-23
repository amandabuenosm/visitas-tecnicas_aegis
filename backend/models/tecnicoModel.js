const db = require('../db/database');

const Tecnico = {

    createTable() {
        db.run(`CREATE TABLE IF NOT EXISTS tecnicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            especialidade TEXT NOT NULL,
            telefone TEXT NOT NULL)`
        );
    },

    getAll(callback) {
        db.all('SELECT * FROM tecnicos', [], callback);
    },

    getById(id, callback) {
        db.get('SELECT * FROM tecnicos WHERE id = ?', [id], callback);
    },

    create(tecnico, callback) {
        db.run('INSERT INTO tecnicos (nome, especialidade, telefone) VALUES (?, ?, ?)', [tecnico.nome, tecnico.especialidade, tecnico.telefone], callback);
    },

    update(id, tecnico, callback) {
        db.run('UPDATE tecnicos SET nome = ?, especialidade = ?, telefone = ? WHERE id = ?', [tecnico.nome, tecnico.especialidade, tecnico.telefone, id], callback);
    },

    delete(id, callback) {
        db.run('DELETE FROM tecnicos WHERE id = ?', [id], function(err) {
            if (err) { return callback(err); }
            callback(null, { affectedRows: this.changes });
        });
    }
}

module.exports = Tecnico;