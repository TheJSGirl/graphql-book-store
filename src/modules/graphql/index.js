const Book  = require('./../books/models');
const { BookType }  = require('./../books/schema');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLSchema, GraphQLBoolean } = require('graphql');


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Book.findById(args.id)
            }
        },
        books: {
            type: GraphQLList(BookType),
            args: {
                deleted: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                return Book.find({});
            }
        }
    }
});

const schema = new GraphQLSchema({
   query: RootQuery
});

module.exports = {
    schema
};

