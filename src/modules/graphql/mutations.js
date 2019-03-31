const Book  = require('./../books/models');
const { BookType }  = require('./../books/schema');
const { create, update, addAuthor, removeAuthor, findById, del} = require('../books/resolver');
const { GraphQLObjectType, GraphQLID, GraphQLList,
        GraphQLFloat, GraphQLSchema,
        GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql');


const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBook: {
            type: BookType,
            args: {
                user: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                authors: { type: GraphQLString },
                price: { type: new GraphQLNonNull(GraphQLFloat) },
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
                authors: { type: GraphQLString },
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
            resolve: (parent, args) => removeAuthor(args.id)
        },
        deleteBook: {
            type: BookType,
            args: {
                id: { type: GraphQLString }
            },
            resolve: (parent, args) => del(args.id)
        }
    }

});

module.exports = {
    Mutations
};
