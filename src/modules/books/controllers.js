const Book = require('./models');

async function get(req, res){
    console.log('book store')
}

async function post(req, res) {
    const {user, name, author, edition } = req.body;
    const data = {
        name, 
        author, 
        edition
    }
    // check user in database if it exists only then create book
  const book = new Book();
  book.save();
}

module.exports = {
    get,
    post
}