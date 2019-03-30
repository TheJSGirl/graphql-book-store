const route = require('express').Router();
const controller = require('./controllers');

route.get('/', controller.list);
route.post('/', controller.create);
route.patch('/:id', controller.patch);
route.put('/:id', controller.update);
route.delete('/:id', controller.del);

module.exports = route;
