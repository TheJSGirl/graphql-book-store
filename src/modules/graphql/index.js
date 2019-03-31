const { GraphQLSchema } = require('graphql');

const {Mutations} = require('./mutations');
const {RootQuery} = require('./root-query');


const schema = new GraphQLSchema({
   query: RootQuery,
   mutation: Mutations
});

module.exports = {
    schema
};

