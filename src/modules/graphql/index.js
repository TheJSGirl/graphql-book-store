const { BookType } = require('./../books/models');
const { buildSchema, GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');


var rootQuery = buildSchema(`
  type Query {
    hello: String
  }
`);
