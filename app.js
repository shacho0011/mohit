const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./components/rootAPI');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRouter);

// TODO: you need to implement server routing!!
const {usersAPI} = require('./components/users');
app.use('/users', usersAPI);

module.exports.app = app;
