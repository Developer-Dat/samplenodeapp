const express = require('express');
var cors = require('cors')
const router = require('./route')
const server = express();
server.use(cors())
// server.use(express.json())

server.use(router)

module.exports = server