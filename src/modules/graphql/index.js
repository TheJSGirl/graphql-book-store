const Book  = require('./../books/models');
const { BookType, AuthorType }  = require('./../books/schema');
const { create, update, addAuthor } = require('../books/resolver');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLFloat, GraphQLSchema, GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql');


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

const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBook: {
            type: BookType,
            args: {
                user: { type: new GraphQLNonNull(GraphQLString)},
                name: { type: new GraphQLNonNull(GraphQLString)},
                authors: { type: GraphQLString},
                price: {type: new GraphQLNonNull(GraphQLFloat) },
                edition: { type: GraphQLString },
                subject: { type: GraphQLString },

            },
            resolve: (parent, args) => create(args)
        },
        updateBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
                name: { type: GraphQLString },
                price: {type: GraphQLFloat },
                authors: { type: GraphQLString},
                edition: { type: GraphQLString },
                subject: { type: GraphQLString },
            },
            resolve: (parent, args) => update(args)
        },
        addAuthor: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
                author: { type: GraphQLNonNull(GraphQLString)},
            },
            resolve: (parent, args) => addAuthor(args)
        },
        removeAuthor: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
                author: { type: GraphQLNonNull(GraphQLString)},
            },
            resolve: (parent, args) => update(args)
        }
    }

})

const schema = new GraphQLSchema({
   query: RootQuery,
   mutation: Mutations
});

module.exports = {
    schema
};

