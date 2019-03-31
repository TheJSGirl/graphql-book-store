const Book  = require('./../books/models');
const { BookType }  = require('./../books/schema');
const { create, update, list, findById, del} = require('../books/resolver');
const { GraphQLObjectType, GraphQLID, GraphQLList, 
        GraphQLFloat, GraphQLSchema,
        GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => findById(args.id)
            
        },
        books: {
            type: GraphQLList(BookType),
            args: {
                deleted: { type: GraphQLBoolean }
            },
            resolve: (parent, args) => list()
            
        },
    }
});

module.exports = {
    RootQuery
}