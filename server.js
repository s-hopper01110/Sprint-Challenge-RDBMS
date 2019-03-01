const express = require('express');
const helmet = require('helmet');

const projectsData = require('./routes/projectsRouter.js');
const actionsData = require('./routes/actionsRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsData);
server.use('/api/actions', actionsData);


module.exports = server;