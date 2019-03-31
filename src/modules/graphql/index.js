const { buildSchema } = require('graphql');

var rootQuery = buildSchema(`
  type Query {
    hello: String
  }
`);
