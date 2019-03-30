const users = require('./users/routes');
const books = require('./books/routes')

module.exports = async (app) => {
    app.use('/users',users);
    app.use('/books', books);

};