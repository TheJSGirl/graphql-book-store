const route = require('express').Router();
const controller = require('./controllers');

route.get('/', controller.get);

module.exports = route;
