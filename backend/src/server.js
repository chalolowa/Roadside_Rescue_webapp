const express = require('express');
const cors = require('cors');
const { route } = require('./routes.js');

const server = express();

server.use(cors());
server.use(express.json({}));
server.use(express.urlencoded({extended: false}));

server.get('/', (req, res) => {
    console.log("Server is online!!");
    res.send("Welcome!!");
    res.status(200);
    res.json({message: "Hello there!"})
});

server.use('/api', route)

module.exports = server;