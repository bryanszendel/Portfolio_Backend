const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// REQUIRED ROUTES
const authRouter = require('../auth/auth-router.js')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)

// ROUTES
server.get('/', (req, res) => {
  res.status(200).json({message: 'API IS UP'})
})


module.exports = server;