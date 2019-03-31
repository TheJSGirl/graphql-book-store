const Book = require('./models');

async function create(args) {
       return Book.create(args);
       
}

module.exports = {
    create
}