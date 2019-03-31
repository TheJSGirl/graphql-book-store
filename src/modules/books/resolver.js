const Book = require('./models');

async function createBook(args) {
       return Book.create(args);
       
}

module.exports = {
    create
}