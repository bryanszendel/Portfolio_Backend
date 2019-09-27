const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// REQUIRED ROUTES



const server = express();

server.use('helmet');
server.use(cors());
server.use(express.json());

// ROUTES



module.exports = server;