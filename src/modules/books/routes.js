const route = require('express').Router();
const controller = require('./controllers');

route.get('/', controller.get);
route.post('/', controller.post);

module.exports = route;
