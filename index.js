const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const serveStatic = require('serve-static');
const path = require('path');
const fs = require('fs');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const RegistroRouter = require('./route/registro');

const app = express();

mongoose.connect(
    "mongodb+srv://api:rSrQVwjgypyc7HZB@clusterapiacqua.m5pgr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/registro', RegistroRouter);

const swaggerDocument = YAML.load('./Carlos_Nobuaki-AcquaGuardian-1.0.0-resolved.yaml');
// Essas duas linhas estão comentadas pois não tem o arquivo do swagger, 
// depois é só descomentar e mudar o nome se necessário
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
   error: {
    message: error.message || "Internal Server Error",
    },
 });
});

let port = process.env.PORT || 3000;
let host = 'localhost';

app.listen(port, host, () => console.log(`Servidor Subiu!\nPara acessar a documentação do Swagger entre em: http://${host}:${port}/`));