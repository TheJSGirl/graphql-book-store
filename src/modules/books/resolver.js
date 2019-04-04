const Book = require('./models');

async function list(isDeleted){
    return Book.find({ deleted: isDeleted});
}

async function findById(args){
    return Book.findById(args.id);
}

async function create(args) {
    const { user } = await validateUser(args.user);
    if(!user) {  
        return false;
    }
    return Book.create(args);
}

async function update(args) {
    const { id } = args;
    return Book.findOneAndUpdate({ _id: id }, args , { new: true });
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
    return Book.findOneAndUpdate({_id: args.id}, { $set: { authors: authors} }, { new: true });
}

    async function rmuser(args) {
        const book = await Book.findOne({_id: args.id});
        let authors = book.authors;
        if(!authors) {
            return
        }
        const updatedAuthors = authors.filter(e => args.author.toLowerCase() !== e.toLowerCase());
        return Book.findOneAndUpdate({_id: args.id}, { $set: { authors: updatedAuthors } }, { new: true });
    }

module.exports = {
    list,
    create,
    del,
    update,
    findById,
    addAuthor,
    rmuser
};
