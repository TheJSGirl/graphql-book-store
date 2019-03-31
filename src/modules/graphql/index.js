const Book  = require('./../books/models');
const { BookType }  = require('./../books/schema');
const {create} = require('../books/resolver');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLSchema, GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql');


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
                price: { type: GraphQLString },
                edition: { type: GraphQLString },
                subject: { type: GraphQLString }
            },
            resolve: (parent, args) => create(args)
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

