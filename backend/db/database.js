const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const databasePath = path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(databasePath, (err) => {
    if (err) {
        console.error('Erro ao conectar-se com o banco de dados:', err.message);
    } else {
        console.log('Conexão com o banco de dados concluída.');
    }
});

module.exports = db;
