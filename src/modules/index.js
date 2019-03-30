const books = require('./books/routes')

module.exports = async (app) => {
    app.use('/books', books);

};
