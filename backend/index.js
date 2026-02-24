const express = require('express');
const cors = require('cors');
const modelCliente = require('./models/clienteModel');
const modelTecnico = require('./models/tecnicoModel');

const app = express();

app.use(cors());
app.use(express.json());

modelCliente.createTable();
modelTecnico.createTable();

const rotaCliente = require('./routes/clienteRoute');
const rotaTecnico = require('./routes/tecnicoRoute');

app.use('/clientes', rotaCliente);
app.use('/tecnicos', rotaTecnico);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});