require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

mongoose.connect(process.env.DATABASE, {
    userNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise
mongoose.connection.on('error', (error) => {
    console.log("Erro: ", error.mensage );
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(fileupload());
server.use(express.static(__dirname+ '/public'));

server.get('/ping', (req, res) => {
    res.json({prong : true});
});

server.listen(process.env.PORT, () => {
    console.log(`Rodando no endereço: ${process.env.BASE}`);
});