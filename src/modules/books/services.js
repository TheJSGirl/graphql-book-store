const Book = require('./models');

async function list(req, res){
    const books = await Book.find();
    res.status(200).json(books);
}

async function create(req, res) {
    try {
        const book = await Book.create(req.body);
        res.status(200).json(book);
    } catch (e) {
        return res.send(400).json(e.message);
    }
}

async function put(req, res) {
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

async function patch(req, res) {
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

async function update(req, res) {
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

async function del(req, res) {
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
    list,
    create,
    update,
    patch,
    del,
    put,
};
