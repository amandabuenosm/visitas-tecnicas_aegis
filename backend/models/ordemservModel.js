const db = require("../db/database");

const OrdemServ = {

    createTable() {
        db.run(`CREATE TABLE IF NOT EXISTS ordemserv (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_id INTEGER,
            tecnico_id INTEGER,
            problema TEXT NOT NULL,
            data_hora TEXT NOT NULL,
            FOREIGN KEY (tecnico_id) REFERENCES tecnicos(id),
            FOREIGN KEY (cliente_id) REFERENCES clientes(id))` 
        );
    },
    
    getAll(callback) {
        db.all('SELECT * FROM ordemserv', [], callback);
    },

    getById(id, callback) {
        db.get('SELECT * FROM ordemserv WHERE id = ?', [id], callback);
    },

    getByTecnico(tecnico_id, callback) {
        db.all('SELECT * FROM ordemserv WHERE tecnico_id = ?', [tecnico_id], callback);
    },

    create(ordemserv, callback) {
        db.run('INSERT INTO ordemserv (cliente_id, tecnico_id, problema, data_hora) VALUES (?, ?, ?, ?)', [ordemserv.cliente_id, ordemserv.tecnico_id, ordemserv.problema, ordemserv.data_hora], callback); 
    },

    update(id, ordemserv, callback) {
        db.run('UPDATE ordemserv SET cliente_id = ?, tecnico_id = ?, problema = ?, data_hora = ? WHERE id = ?', [ordemserv.cliente_id, ordemserv.tecnico_id, ordemserv.problema, ordemserv.data_hora, id], callback);
    },

    delete(id, callback) {
        db.run('DELETE FROM ordemserv WHERE id = ?', [id], function (err) {
            if (err) { return callback(err); }
            callback(null, { affectedRows: this.changes });
        });
    }
}

module.exports = OrdemServ;