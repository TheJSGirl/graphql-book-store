const Book  = require('./../books/models');
const { BookType }  = require('./../books/schema');
const { create, update, list, findById, del} = require('../books/resolver');
const { GraphQLObjectType, GraphQLID, GraphQLList, 
        GraphQLFloat, GraphQLSchema,
        GraphQLBoolean, GraphQLNonNull, GraphQLString } = require('graphql');

const {Mutations} = require('./mutations');
const {RootQuery} = require('./root-query');


const schema = new GraphQLSchema({
   query: RootQuery,
   mutation: Mutations
});

module.exports = {
    schema
};

