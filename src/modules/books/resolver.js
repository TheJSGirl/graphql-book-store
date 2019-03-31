const Book = require('./models');

async function list(args){
    return Book.find(args);
}

async function create(args) {
    return Book.create(args);
}

async function update(args) {
    const { id, name, price, authors, edition, subject } = args;
    return Book.findOneAndUpdate({ _id: id }, { name, price, authors, edition, subject}, { new: true });
}

async function del(id) {
    return Book.findOneAndRemove({_id: id});
}

async function addAuthor(args) {
    const book = await Book.findOne({_id: args.id});
    let authors = book.authors;
    if(!authors) {
        authors = [args.author];
    } else {
        authors.push(args.author);
    }
    return Book.findOneAndUpdate({_id: args.id}, { authors: authors}, { new: true });
}

async function removeAuthor(id) {
    return Book.findOneAndRemove({_id: id});
}

module.exports = {
    list,
    create,
    del,
    update,
    addAuthor,
    removeAuthor
};
