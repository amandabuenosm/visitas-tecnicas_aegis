const express = require('express');
const cors = require('cors');
const modelCliente = require('./models/clienteModel');

const app = express();

app.use(cors());
app.use(express.json());

modelCliente.createTable();

const rotaCliente = require('./routes/clienteRoute');
app.use('/clientes', rotaCliente);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});